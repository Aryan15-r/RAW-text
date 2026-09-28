# Serverless Discord Bot on Cloudflare Workers — Complete Starter Guide

This is an end-to-end setup reference containing everything required to build, test, secure, register, and deploy a serverless Discord interaction bot using Cloudflare Workers.

---

## 1. Credentials Checklist

Locate these variables in the [Discord Developer Portal](https://discord.com/developers/applications):

| Variable | Developer Portal Path | Purpose |
| :--- | :--- | :--- |
| `APPLICATION_ID` | **General Information** $\to$ Application ID | Registering slash commands and constructing follow-up webhook URLs |
| `PUBLIC_KEY` | **General Information** $\to$ Public Key | Validating ED25519 request signatures in the Worker |
| `BOT_TOKEN` | **Bot** $\to$ Reset/Copy Token | Authorized HTTP PUT calls during command registration |

---

## 2. Directory Layout

```text
my-bot/
├── commands/
│   └── ping.js
├── utils/
│   └── verifyDiscord.js
├── index.js
├── registerCommands.js
├── responses.js
├── package.json
└── wrangler.toml
```

---

## 3. Configuration & Dependency Setup

### `package.json`

Run the installation commands:

```bash
npm init -y
npm install discord-interactions dotenv
npm install -D wrangler
```

Your `package.json` will resemble:

```json
{
  "name": "my-discord-bot",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "wrangler dev",
    "deploy": "wrangler deploy",
    "register": "node registerCommands.js"
  },
  "dependencies": {
    "discord-interactions": "^4.1.0",
    "dotenv": "^16.4.5"
  },
  "devDependencies": {
    "wrangler": "^3.0.0"
  }
}
```

### `wrangler.toml`

```toml
name = "my-discord-bot"
main = "index.js"
compatibility_date = "2024-01-01"

[vars]
APPLICATION_ID = "YOUR_DISCORD_APPLICATION_ID"
```

---

## 4. Secret Configuration

### Cloudflare Production Secrets

Never place private tokens or keys directly into `wrangler.toml`. Upload them using the Wrangler CLI:

```bash
# Upload bot token
npx wrangler secret put BOT_TOKEN

# Upload application public key
npx wrangler secret put PUBLIC_KEY
```

### Local Development Environment (`.dev.vars`)

Create a `.dev.vars` file in the project root for local testing via `npx wrangler dev`. Add this file to `.gitignore`:

```ini
APPLICATION_ID="your_application_id_here"
BOT_TOKEN="your_bot_token_here"
PUBLIC_KEY="your_public_key_here"
```

---

## 5. Security & Verification Helper (`utils/verifyDiscord.js`)

Discord requires Ed25519 signature validation on all incoming interaction payloads. Requests failing verification must return an HTTP 401.

```javascript
import { verifyKey } from "discord-interactions";

export async function verifyDiscordRequest(request, env) {
  const signature = request.headers.get("x-signature-ed25519");
  const timestamp = request.headers.get("x-signature-timestamp");

  if (!signature || !timestamp) {
    return false;
  }

  const body = await request.clone().text();
  const isValid = await verifyKey(body, signature, timestamp, env.PUBLIC_KEY);
  return isValid;
}
```

---

## 6. HTTP JSON Response Helper (`responses.js`)

```javascript
export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
```

---

## 7. Sample Slash Command (`commands/ping.js`)

```javascript
import { json } from "../responses.js";

export async function handlePing(interaction, env, ctx) {
  return json({
    type: 4, // InteractionResponseType: CHANNEL_MESSAGE_WITH_SOURCE
    data: {
      content: "Pong! 🏓",
      flags: 64 // Ephemeral: only visible to the user running the command
    }
  });
}
```

---

## 8. Main Worker Router (`index.js`)

Handles incoming HTTP requests, signature checks, Discord PING/PONG handshakes, and interaction routing:

```javascript
import { verifyDiscordRequest } from "./utils/verifyDiscord.js";
import { json } from "./responses.js";
import { handlePing } from "./commands/ping.js";

export default {
  async fetch(request, env, ctx) {
    // Discord interactions only use POST requests
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    // Step 1: Verify the signature
    const isValid = await verifyDiscordRequest(request, env);
    if (!isValid) {
      return new Response("Invalid request signature", { status: 401 });
    }

    const interaction = await request.json();
    const { type, data } = interaction;

    // Step 2: Handle Discord Ping ACK (Type 1 Interaction)
    if (type === 1) {
      return json({ type: 1 });
    }

    // Step 3: Slash Commands (Type 2 Application Command)
    if (type === 2) {
      const { name } = data;

      if (name === "ping") {
        return await handlePing(interaction, env, ctx);
      }
    }

    return json({ error: "Interaction not recognized" }, 400);
  }
};
```

---

## 9. Global Command Registration Script (`registerCommands.js`)

Run this script locally using Node.js to update slash commands across Discord:

```javascript
import "dotenv/config";

const APP_ID = process.env.APPLICATION_ID;
const TOKEN = process.env.BOT_TOKEN;

if (!APP_ID || !TOKEN) {
  console.error("Missing APPLICATION_ID or BOT_TOKEN in environment.");
  process.exit(1);
}

const commands = [
  {
    name: "ping",
    description: "Check bot latency and connectivity",
    type: 1, // CHAT_INPUT
    integration_types: [0, 1], // 0: Guild Install, 1: User Install
    contexts: [0, 1, 2] // 0: Guild, 1: Bot DM, 2: Group DM
  }
];

async function register() {
  const endpoint = `[https://discord.com/api/v10/applications/$](https://discord.com/api/v10/applications/$){APP_ID}/commands`;

  const response = await fetch(endpoint, {
    method: "PUT",
    headers: {
      Authorization: `Bot ${TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(commands)
  });

  if (response.ok) {
    console.log("Successfully registered global application commands.");
  } else {
    const errorData = await response.json();
    console.error("Failed to register commands:", JSON.stringify(errorData, null, 2));
  }
}

register();
```

Execute command registration:

```bash
node registerCommands.js
```

---

## 10. Deployment & Connecting to Discord

1. **Deploy to Cloudflare:**
   ```bash
   npx wrangler deploy
   ```
2. **Retrieve Assigned Endpoint:**
   Copy the output URL:
   `https://my-discord-bot.<subdomain>.workers.dev`
3. **Set Discord Interaction URL:**
   - Go to [Discord Developer Portal](https://discord.com/developers/applications).
   - Navigate to **General Information** $\to$ **Interactions Endpoint URL**.
   - Paste the deployment URL.
   - Click **Save Changes**.
4. Discord will immediately dispatch a `type: 1` test PING payload. Upon receiving an HTTP 200 with `{ "type": 1 }`, the endpoint will be marked verified and operational.