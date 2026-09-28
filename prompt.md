# IMPLEMENT THE DISCORD BOT NOW

You have already inspected my existing GhostGlyph / Emoji-Crypt website source and created `prd.md` for the Discord bot integration.

The `prd.md` is your implementation specification.

**Do not create another PRD. Do not explain what could be done. Actually implement the Discord bot in this existing project.**

The existing website source is already open in this Antigravity workspace, so you have access to the actual GhostGlyph encoding/decoding implementation.

---

## PRIMARY GOAL

Turn the existing GhostGlyph website's steganography engine into a **serverless Discord bot running on Cloudflare Workers**.

The Discord bot must use the **exact same GhostGlyph encoding/decoding format as the existing website**.

The website must continue working exactly as it currently does.

Do not replace, redesign, or unnecessarily modify the website.

---

# 1. USE THE EXISTING WEBSITE AS THE SOURCE OF TRUTH

Before implementing the bot:

* Locate the actual GhostGlyph encode function.
* Locate the actual GhostGlyph decode function.
* Locate any carrier/interleaving logic.
* Locate the zero-width character constants.
* Locate existing validation logic.
* Locate existing error handling.
* Understand how the website generates and reads payloads.

Then reuse/extract that logic for the Discord bot.

**Do NOT implement a second, independent version of the algorithm if the existing code can be reused.**

The following must work:

```text
Website → encode → Discord /decode → original message
```

and:

```text
Discord /encode → Website → decode → original message
```

If the existing website implementation differs from anything written in `prd.md`, prioritize the **actual existing website implementation**, because cross-platform compatibility is mandatory.

---

# 2. CREATE THE DISCORD BOT AS A SEPARATE MODULE

Do not turn the website itself into the Discord bot.

Create a separate bot directory inside the project, for example:

```text
discord-bot/
```

Use this structure:

```text
discord-bot/
├── commands/
│   ├── encode.js
│   ├── decode.js
│   ├── inspect.js
│   └── contextDecrypt.js
│
├── utils/
│   ├── stego.js
│   ├── verifyDiscord.js
│   └── formatters.js
│
├── index.js
├── responses.js
├── registerCommands.js
├── package.json
├── wrangler.toml
├── .dev.vars
└── .gitignore
```

If the existing project has a better organization that avoids duplication, you may adapt this structure.

Do not unnecessarily duplicate the website's entire source.

---

# 3. STEGO ENGINE

Create a reusable `utils/stego.js`.

It should expose functions similar to:

```js
encode(text, carrier)
decode(text)
inspect(text)
```

But **use the actual algorithm already implemented by the website**.

Do not silently change:

* Unicode representation
* bit ordering
* separators
* UTF-16 handling
* carrier placement
* chunking
* decoding behavior

The Discord bot must be able to decode strings created by the website.

---

# 4. DISCORD TECHNOLOGY

Use:

```text
Cloudflare Workers
Discord Interactions API
HTTP webhooks
Ed25519 signature verification
```

Do NOT use:

```text
discord.js
Discord Gateway
WebSockets
a VPS
a permanent Node.js process
```

The Worker should receive Discord interaction POST requests.

---

# 5. REQUIRED COMMANDS

Implement the commands defined in `prd.md`:

### Slash commands

```text
/encode
/decode
/inspect
```

### Message context menu

```text
Decrypt Invisible Message
```

The context menu must appear through Discord's:

```text
Apps → Decrypt Invisible Message
```

---

# 6. /encode

Implement:

```text
/encode
```

Options:

```text
message   STRING   required
carrier   STRING   optional
silent    BOOLEAN  optional
```

Default carrier:

```text
👻
```

Behavior:

```text
message
   ↓
existing GhostGlyph encoder
   ↓
carrier + invisible payload
   ↓
Discord response
```

If:

```text
silent = false
```

return the generated stego carrier publicly.

If:

```text
silent = true
```

return the generated result ephemerally.

Do not expose the plaintext in public responses.

Do not silently truncate oversized messages.

Use the limits/behavior specified by the existing PRD.

---

# 7. /decode

Implement:

```text
/decode
```

with:

```text
stego_text STRING required
```

Run the existing GhostGlyph decoder.

The response MUST ALWAYS be ephemeral.

Use Discord:

```js
flags: 64
```

Example result:

```text
Decoded message:

Hello World

Characters: 11
```

If no hidden payload exists:

```text
No hidden payload found in the provided text.
```

If the payload is malformed:

```text
Corrupted payload: The zero-width sequence is invalid.
```

Do not publicly reveal decoded content.

---

# 8. /inspect

Implement:

```text
/inspect
```

with:

```text
text STRING required
```

Return an ephemeral diagnostic response containing information such as:

```text
GhostGlyph Inspection

Stego status: DETECTED / NONE

Visible characters: ...
Hidden Unicode code units: ...
Hidden bits: ...
Estimated payload size: ...
```

Do not decode and display the secret plaintext in this command.

---

# 9. MESSAGE CONTEXT MENU

Implement the Discord Message Application Command:

```text
Decrypt Invisible Message
```

When a user selects it on a Discord message:

```text
Target Discord message
        ↓
message content
        ↓
GhostGlyph decoder
        ↓
ephemeral result
```

The user should not have to manually copy/paste the message.

Handle Discord's resolved message data correctly.

If the target message does not contain a valid GhostGlyph payload, return the appropriate error ephemerally.

---

# 10. DISCORD SIGNATURE SECURITY

Create:

```text
utils/verifyDiscord.js
```

Use `discord-interactions`.

Verify:

```text
x-signature-ed25519
x-signature-timestamp
```

against:

```text
PUBLIC_KEY
```

before parsing/processing the interaction.

Invalid requests:

```text
HTTP 401
```

Never bypass signature verification during production requests.

---

# 11. WORKER ROUTER

Create:

```text
index.js
```

It must:

1. Accept POST requests.
2. Verify Discord's signature.
3. Parse the interaction.
4. Respond to Discord PING.
5. Route slash commands.
6. Route the message context menu.
7. Return controlled errors.

Discord PING:

```json
{
  "type": 1
}
```

Response:

```json
{
  "type": 1
}
```

Unsupported HTTP methods should return:

```text
405 Method Not Allowed
```

---

# 12. NO DATA STORAGE

This bot is intended to be privacy-preserving.

Do NOT add:

```text
D1
KV
R2
database
analytics
telemetry
external logging
```

The following must never be persisted:

* secret plaintext
* decoded messages
* encoded payloads
* target Discord message content

Do not log entire Discord interaction objects.

Do not add debug logging containing user payloads.

---

# 13. SECRETS

Use:

```text
APPLICATION_ID
PUBLIC_KEY
BOT_TOKEN
```

Never hardcode:

```text
BOT_TOKEN
```

Never commit real credentials.

Use:

```text
.dev.vars
```

for local development.

Use:

```bash
npx wrangler secret put BOT_TOKEN
npx wrangler secret put PUBLIC_KEY
```

for production secrets.

---

# 14. COMMAND REGISTRATION

Create:

```text
registerCommands.js
```

Register:

```text
/encode
/decode
/inspect
Decrypt Invisible Message
```

Use the Discord REST API.

Use the current valid Discord API format for:

```text
CHAT_INPUT
MESSAGE
integration_types
contexts
```

Do not blindly use outdated Discord API syntax if the current API requires something different.

The registration script must read:

```text
APPLICATION_ID
BOT_TOKEN
```

from environment variables.

Never put the bot token directly into the source.

---

# 15. PACKAGE CONFIGURATION

Create a separate package configuration for the bot if necessary.

Use:

```bash
npm install discord-interactions dotenv
npm install -D wrangler
```

Provide scripts for:

```text
npm run dev
npm run deploy
npm run register
```

---

# 16. CLOUDFLARE CONFIGURATION

Create:

```text
wrangler.toml
```

with the Worker configuration.

Use an appropriate Worker name such as:

```text
emoji-crypt-bot
```

Keep private credentials out of this file.

---

# 17. ERROR HANDLING

Implement proper validation for:

### Empty encode input

```text
Please provide at least 1 character to encode.
```

### Too-long input

Explain the allowed limit and do not truncate.

### No payload

```text
No hidden payload found in the provided text.
```

### Corrupted payload

```text
Corrupted payload: The zero-width sequence is invalid.
```

### Unknown command

Return a controlled Discord error.

Never expose JavaScript stack traces to users.

---

# 18. TESTING

Before telling me the bot is finished, test the pure steganography engine.

At minimum test:

```text
Hello
Hello World
123456789
special characters
emoji
Unicode text
spaces
newlines
punctuation
```

Test round trips:

```js
decode(encode("Hello World", "👻"))
```

must produce:

```text
Hello World
```

Test several carriers.

Most importantly:

### WEBSITE → DISCORD

Take an actual payload produced by the existing website.

Decode it with the Discord bot's `decode()`.

It must return the original message.

### DISCORD → WEBSITE

Encode a message using the Discord bot.

Take the generated carrier and decode it using the existing website.

It must return the original message.

If either direction fails, fix the shared algorithm rather than adding a Discord-specific workaround.

---

# 19. DO NOT BREAK MY WEBSITE

This is critical.

Do not:

* redesign the website
* change the website UI
* remove existing functionality
* replace existing dependencies unnecessarily
* rewrite unrelated files
* change the existing GhostGlyph format
* move the entire website into the Worker

Only make modifications necessary for code reuse or bot integration.

If you need to extract the GhostGlyph engine from an existing HTML/JS file, preserve the website's behavior exactly.

---

# 20. IMPLEMENTATION ORDER

Follow this order:

### Step 1

Inspect the existing GhostGlyph implementation.

### Step 2

Identify the smallest reusable portion of code.

### Step 3

Create the Discord bot structure.

### Step 4

Create/reuse the pure GhostGlyph engine.

### Step 5

Implement Discord signature verification.

### Step 6

Implement Worker routing.

### Step 7

Implement `/encode`.

### Step 8

Implement `/decode`.

### Step 9

Implement `/inspect`.

### Step 10

Implement `Decrypt Invisible Message`.

### Step 11

Implement command registration.

### Step 12

Configure Wrangler.

### Step 13

Run local tests.

### Step 14

Run cross-compatibility tests against the website.

### Step 15

Only then prepare the deployment instructions.

---

# 21. IMPORTANT: DO NOT DEPLOY OR CREATE CREDENTIALS FOR ME

Do not invent:

```text
APPLICATION_ID
PUBLIC_KEY
BOT_TOKEN
```

Do not ask me to paste my bot token into source code.

If credentials are missing, leave safe placeholders and tell me exactly where I need to provide/configure them.

Do not automatically deploy the Worker unless I explicitly ask you to deploy it.

---

# 22. FINAL RESPONSE FROM ANTIGRAVITY

When implementation is complete, give me:

## A. What you changed

List every created/modified file and why.

## B. Final directory structure

Show the final tree.

## C. Installation

Give exact commands.

## D. Local configuration

Tell me exactly what goes into `.dev.vars`.

## E. Discord Developer Portal

Tell me exactly where I need to configure the Interaction Endpoint URL.

## F. Command registration

Give the exact command:

```bash
npm run register
```

or whatever command you actually configured.

## G. Local testing

Give exact commands.

## H. Deployment

Give exact Wrangler commands.

## I. Final testing checklist

Include:

```text
[ ] /encode
[ ] /decode
[ ] /inspect
[ ] Decrypt Invisible Message
[ ] Discord PING
[ ] invalid signature
[ ] website → Discord compatibility
[ ] Discord → website compatibility
[ ] desktop Discord
[ ] mobile Discord
```

---

# FINAL INSTRUCTION

**Stop planning and implement it now.**

The `prd.md` already exists because you generated it from this project.

Use that PRD plus the actual existing website source.

Do not generate another planning document.

Do not merely tell me how to build it.

Build the Discord bot files in the workspace and make the implementation ready for me to configure with my Discord credentials and deploy.
