# 👻 GhostGlyph Discord Bot — Invisible Emoji Steganography

> Conceal secret messages directly inside innocent-looking emojis and text using undetectable Unicode zero-width characters. 100% private, serverless, and running globally on Cloudflare Workers.

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![Discord Interactions](https://img.shields.io/badge/Discord-Interactions%20API-5865F2?logo=discord&logoColor=white)](https://discord.com/developers/docs)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🌟 Features

* **👻 Invisible In Plain Sight:** Encodes UTF-16 plaintext into invisible Unicode zero-width sequences (`\u200D`, `\u200C`, `\u200B`) concealed inside decoy emojis.
* **🔒 Strict Privacy:** All decryptions are ephemeral (`flags: 64`) — revealed *only* to the command invoker, never broadcast to the channel.
* **⚡ 1-Click Message Decryption:** Right-click or long-press any message in Discord $\to$ **Apps** $\to$ **Decrypt Invisible Message** to decrypt in under 500ms without copying/pasting.
* **🌐 Cross-Platform Parity:** 100% algorithm and binary format interoperability with the [GhostGlyph Web App](https://emoji-crypt.vercel.app/).
* **🚀 100% Serverless:** Runs on Cloudflare Workers with sub-50ms cold starts, zero database requirement, zero 24/7 server costs (fits within Cloudflare's 100k requests/day free tier).
* **👤 User & Guild Install:** Works both as a standard server bot and as a personal User App usable across DMs, group chats, and servers.

---

## 📋 Available Commands

| Command | Type | Description |
| :--- | :--- | :--- |
| **`/encode`** | Slash Command | Conceal secret text inside a carrier emoji (default: `👻`). Supports public or `silent: true` ephemeral modes. |
| **`/decode`** | Slash Command | Extract and reveal hidden plaintext from any stego emoji (always ephemeral). |
| **`/inspect`** | Slash Command | Diagnostic analyzer showing stego detection status, hidden bits, and estimated byte size *without* revealing the secret. |
| **`Decrypt Invisible Message`** | Message Context Menu | Right-click / tap-and-hold any Discord message $\to$ **Apps** to reveal hidden content immediately. |

---

## 🛠️ Step-by-Step Self-Hosting Guide

Follow these steps to deploy your own private instance of the bot for free in less than 5 minutes.

### 1. Prerequisites
* [Node.js](https://nodejs.org/) (v18 or newer)
* A free [Cloudflare Account](https://dash.cloudflare.com/sign-up)
* A [Discord Account](https://discord.com/)

---

### 2. Create Your Discord Application
1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click **New Application**, name your bot (e.g. `GhostGlyph`), and accept the Terms.
3. In the **General Information** tab:
   * Copy the **Application ID** (save this for later).
   * Copy the **Public Key** (save this for later).
4. Navigate to the **Bot** tab on the left:
   * Click **Reset Token** and copy the **Bot Token** (save this securely).
5. Navigate to the **Installation** tab:
   * **Installation Contexts:** Check both **Guild Install** and **User Install**.
   * **Install Link:** Set to **Discord Provided Link**.
   * **Default Install Settings:**
     * Scopes: Select `applications.commands` and `bot`.
     * Permissions: Select `Send Messages`, `Read Message History`, and `Embed Links`.

---

### 3. Clone & Install Dependencies
Clone the repository and open the `discord-bot` directory:

```bash
git clone https://github.com/your-username/emoji-crypt.git
cd emoji-crypt/discord-bot
npm install
```

---

### 4. Configure Local Environment & Wrangler
1. Authenticate the Cloudflare Wrangler CLI with your Cloudflare account:
   ```bash
   npx wrangler login
   ```
2. Open `wrangler.toml` and update `APPLICATION_ID` with your Discord Application ID:
   ```toml
   name = "emoji-crypt-bot"
   main = "index.js"
   compatibility_date = "2024-01-01"

   [vars]
   APPLICATION_ID = "YOUR_DISCORD_APPLICATION_ID"
   ```
3. Copy `.dev.vars.example` to `.dev.vars`:
   ```bash
   cp .dev.vars.example .dev.vars
   ```
   Open `.dev.vars` and paste your credentials:
   ```ini
   APPLICATION_ID="your_discord_application_id"
   PUBLIC_KEY="your_discord_public_key"
   BOT_TOKEN="your_discord_bot_token"
   ```

---

### 5. Upload Secrets to Cloudflare
Upload your private bot token and public key securely to Cloudflare Workers (do not commit these to GitHub):

```bash
npx wrangler secret put BOT_TOKEN
# Paste your Bot Token when prompted

npx wrangler secret put PUBLIC_KEY
# Paste your Discord Public Key when prompted
```

---

### 6. Deploy the Worker
Deploy your bot to Cloudflare Workers with one command:

```bash
npm run deploy
```

Upon completion, Wrangler will output your live URL:
```text
https://emoji-crypt-bot.<your-cloudflare-subdomain>.workers.dev
```

---

### 7. Connect to Discord & Register Commands

1. **Set the Interactions Endpoint URL:**
   * Return to the [Discord Developer Portal](https://discord.com/developers/applications).
   * Open your application $\to$ **General Information**.
   * In **Interactions Endpoint URL**, paste your Worker URL (e.g. `https://emoji-crypt-bot.<your-subdomain>.workers.dev`).
   * Click **Save Changes**. Discord will send a signature test handshake and verify with a green checkmark.

2. **Register the Global Commands:**
   Run the command registration script from your terminal:
   ```bash
   npm run register
   ```
   You will see:
   ```text
   ✅ Successfully registered 4 global commands:
     - [SLASH] encode
     - [SLASH] decode
     - [SLASH] inspect
     - [CONTEXT] Decrypt Invisible Message
   ```

---

## 🧪 Testing

Run the automated test suite to verify encryption, decryption, and cross-compatibility:

```bash
npm test
```

### Manual Verification
1. In any Discord channel, type:
   ```text
   /encode message:Hello World carrier:👻 silent:false
   ```
2. You will see a ghost emoji `👻`.
3. Right-click the ghost emoji message $\to$ **Apps** $\to$ **Decrypt Invisible Message**.
4. You will instantly receive an ephemeral message:
   ```text
   Decoded message:
   Hello World
   Characters: 11
   ```
5. Copy the ghost emoji `👻` and paste it into [emoji-crypt.vercel.app](https://emoji-crypt.vercel.app/) to verify 100% cross-platform parity!

---

## 🔒 Security & Privacy Guarantees

* **Zero Persistence:** Messages and decrypted secrets are held exclusively in memory during the execution of a single request ($\approx 15\text{ms}$).
* **No Database or Telemetry:** No logs, analytics, D1 databases, or KV stores are connected.
* **Cryptographic Verification:** Every request is authenticated with Ed25519 signature validation. Unsigned or invalid requests are rejected with `HTTP 401`.

---

## 📄 License

MIT License. Free to use, modify, and distribute for personal or commercial projects.
