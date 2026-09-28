# PRD: GhostGlyph (Emoji-Crypt) Discord Bot Integration

**Document Version:** 1.0.0  
**Status:** Approved for Implementation  
**Target Environment:** Cloudflare Workers (Serverless) / Discord Interactions API  
**Reference Implementations:** `index.html` (Stego Engine) & `bot-base.md` (Worker Interaction Framework)

---

## 1. Executive Summary & Objective

### 1.1 Overview
GhostGlyph is an invisible Unicode steganography engine that conceals arbitrary plaintext inside emojis and text strings using Zero-Width characters (`\u200D`, `\u200C`, `\u200B`). 

This PRD specifies the technical requirements and architecture to integrate the GhostGlyph steganography suite into a high-performance, serverless Discord bot running on Cloudflare Workers.

### 1.2 Target Users & Use Cases
* **Privacy-Conscious Communities:** Transmitting passcodes, spoiler discussions, spoilers/ARG clues, or sensitive notes in plain sight without triggering automated content filters or casual shoulder-surfers.
* **ARG & Gamified Servers:** Creating puzzle trails, hidden flags, and clandestine Easter eggs inside innocent-looking emoji reactions or chat messages.
* **Everyday Chatters:** Playful secret messaging where friends share "empty" or single-emoji messages that only recipients with the bot or web app can decode.

### 1.3 Key Value Propositions
1. **Zero-Width Invisibility:** Decoy carrier emojis appear completely standard in the Discord UI.
2. **Ephemeral Privacy by Default:** Decrypted payloads are only returned via Discord ephemeral responses (`flags: 64`), preventing public leakage.
3. **Cross-Platform Parity:** 100% algorithm and binary format compatibility with the web application (`emoji-crypt.vercel.app`).
4. **Serverless & Free Tier Scalability:** Powered by Cloudflare Workers and Discord HTTP Interaction Webhooks (zero 24/7 gateway websocket overhead, sub-50ms cold starts).

---

## 2. Technical Foundation & Steganography Specification

The Discord bot must implement the exact Unicode steganography scheme defined in `index.html`:

### 2.1 Unicode Token Mapping
| Token | Unicode Codepoint | Semantic Bit / Role |
| :--- | :--- | :--- |
| `ZW_ONE` | `\u200D` (Zero-Width Joiner) | Bit `1` |
| `ZW_ZERO` | `\u200C` (Zero-Width Non-Joiner) | Bit `0` |
| `ZW_SEP` | `\u200B` (Zero-Width Space) | Character separator (delimiter) |

### 2.2 Encoding Algorithm
1. **Plaintext Input:** String of arbitrary UTF-16 text.
2. **Binary Conversion:** Each character `c` is transformed into a 16-bit binary string:
   $$\text{bin} = \text{codePoint.toString(2).padStart(16, '0')}$$
3. **Bit-to-Glyph Mapping:**
   * `'1'` $\to$ `\u200D`
   * `'0'` $\to$ `\u200C`
4. **Stream Framing:** Character bit sequences are joined with `\u200B` (`ZW_SEP`).
5. **Carrier Interleaving:**
   * If carrier emojis/characters are provided (default: `👻`), the total invisible bitstream is partitioned across the selected carriers in balanced contiguous chunks.
   * Format: `Carrier[0] + Chunk[0] + Carrier[1] + Chunk[1] + ...`

### 2.3 Decoding Algorithm
1. Filter the raw input string, isolating only characters belonging to `{ \u200B, \u200C, \u200D }`.
2. Reject with user-friendly error if zero stego tokens are detected.
3. Split the filtered stream by `\u200B` (`ZW_SEP`).
4. For each segment:
   * Map `\u200D` $\to$ `1`, `\u200C` $\to$ `0`.
   * Ensure segment length is a multiple of 16 bits.
   * Convert every 16 bits back to `String.fromCharCode(parseInt(chunk, 2))`.
5. Return the reconstructed plaintext.

### 2.4 Discord Character Limit Budgeting
* **Discord Message Limit:** 2,000 characters per standard message (4,000 for Nitro / specific embed fields).
* **Stego Overhead:** 1 character of plaintext $\approx 16 \text{ zero-width bits} + 1 \text{ separator} = 17 \text{ Unicode code units}$.
* **Max Plaintext Capacity in a single 2,000-char Discord message:**
  $$\lfloor(2000 - \text{carrier\_length}) / 17\rfloor \approx 117 \text{ characters}$$
* **Constraint Handling:**
  * For messages $> 110$ characters, the bot must warn the user or automatically paginate / offer a downloadable `.txt` attachment when encoding.

---

## 3. Bot Commands & Interaction Architecture

The bot will expose **3 Slash Commands (Chat Input)** and **1 Message Context Menu Command (Apps)**.

### 3.1 Slash Commands (`CHAT_INPUT`)

#### 1. `/encode` (Alias: `/hide`, `/encrypt`)
Conceals a secret message inside an emoji or text carrier.

| Option | Type | Required | Description | Default |
| :--- | :--- | :--- | :--- | :--- |
| `message` | `STRING` (3) | Yes | The secret message to conceal (max 110 chars for single msg) | — |
| `carrier` | `STRING` (3) | No | Carrier emoji(s) or decoy text | `👻` |
| `silent` | `BOOLEAN` (5) | No | If true, only you can see the generated output | `false` |

* **Response Behavior:**
  * If `silent: true`: Returns an ephemeral message containing the copyable stego text, payload stats (bits, bytes, carrier count), and an explanation.
  * If `silent: false`: Sends a public message with the carrier emoji (containing the invisible steganographic payload) ready to be copied or read by others.

#### 2. `/decode` (Alias: `/reveal`, `/decrypt`)
Extracts and reveals hidden text from a steganographic message or emoji.

| Option | Type | Required | Description | Default |
| :--- | :--- | :--- | :--- | :--- |
| `stego_text` | `STRING` (3) | Yes | The emoji or message containing the hidden payload | — |

* **Response Behavior:**
  * **Always Ephemeral (`flags: 64`):** Protects the secret from accidental channel-wide broadcast.
  * Displays:
    * Decoded Plaintext in code block or clearquote.
    * Character count & encoding metadata.
  * If no payload is found or payload is corrupted: Returns an ephemeral error explaining why decoding failed.

#### 3. `/inspect` (Diagnostic Command)
Analyzes any text or emoji string to test for presence of zero-width stego data.

| Option | Type | Required | Description | Default |
| :--- | :--- | :--- | :--- | :--- |
| `text` | `STRING` (3) | Yes | The message or emoji to analyze | — |

* **Response Behavior (Ephemeral):**
  * Stego Status: `DETECTED` or `NONE`.
  * Total Length (visible characters vs hidden code units).
  * Invisible bits count & estimated secret byte size.
  * Carrier characters identified.

---

### 3.2 Message Context Menu Command (`MESSAGE`)

#### "Decrypt Invisible Message"
Allows users to right-click (desktop) or long-press (mobile) any Discord message and select **Apps $\to$ Decrypt Invisible Message**.

* **Target:** `type: 3` (Message Application Command)
* **Flow:**
  1. User right-clicks a message containing a stego emoji.
  2. Bot receives the interaction with the target message's `content`.
  3. Bot runs `Stego.decode(message.content)`.
  4. Bot returns an immediate ephemeral message to the invoking user with the decrypted content.
* **UX Benefit:** Frictionless 1-click decoding without copying/pasting messy strings into a slash command box.

---

## 4. System Architecture & Directory Structure

Built on Cloudflare Workers using the directory layout established in `bot-base.md`:

```text
emoji-crypt-bot/
├── commands/
│   ├── encode.js             # /encode slash command logic
│   ├── decode.js             # /decode slash command logic
│   ├── inspect.js            # /inspect diagnostics logic
│   └── contextDecrypt.js     # Message context menu handler
├── utils/
│   ├── stego.js              # Pure JavaScript Stego engine (ported from index.html)
│   ├── verifyDiscord.js      # Ed25519 signature validator via discord-interactions
│   └── formatters.js         # Discord embed and response card builders
├── index.js                  # Cloudflare Worker fetch router & interaction dispatcher
├── registerCommands.js       # Discord REST API command registration script
├── responses.js              # Response factory (JSON, Ephemeral, Modals)
├── package.json              # Dependencies: discord-interactions, dotenv, wrangler
└── wrangler.toml             # Cloudflare Worker deployment definition
```

---

## 5. Security, Validation & Error Handling

### 5.1 Discord Ed25519 Request Verification
* All incoming requests to the Cloudflare Worker URL must be verified against `PUBLIC_KEY` using `x-signature-ed25519` and `x-signature-timestamp`.
* Any unverified or forged request is immediately rejected with HTTP `401 Unauthorized`.

### 5.2 Privacy Guarantees
* **No Persistence:** Decoded plaintexts and encoded secrets are processed completely in-memory during the ephemeral request lifecycle. No database, logs, or external telemetry may store the payload.
* **Strict Ephemeral Defaults:** Decoding and inspecting must **never** be allowed to output publicly in a guild channel without explicit, deliberate user override.

### 5.3 Error States & Edge Cases
| Scenario | Behavior / Response |
| :--- | :--- |
| Empty / whitespace-only secret input | Returns error: `"Please provide at least 1 character to encode."` |
| Input exceeding 110 characters | Returns warning with character budget calculation and guidance to shorten. |
| Text containing no zero-width characters | Returns error: `"No hidden payload found in the provided text."` |
| Malformed / corrupted binary sequence | Returns error: `"Corrupted payload: The zero-width sequence is invalid."` |
| Discord timeout risk (>3 seconds execution) | Stego encode/decode takes $< 1\text{ms}$ in V8; responds synchronously within $\sim 15\text{ms}$. |

---

## 6. Implementation & Registration Workflow

### 6.1 Prerequisites & Credentials
* `APPLICATION_ID`: Discord Developer Portal $\to$ General Information
* `PUBLIC_KEY`: Discord Developer Portal $\to$ General Information
* `BOT_TOKEN`: Discord Developer Portal $\to$ Bot Token

### 6.2 Slash Command Definitions (`registerCommands.js`)
Commands configured with:
* `integration_types: [0, 1]` (Supports both **Guild Install** and **User App Install** so users can decode stego messages anywhere across Discord, even in DMs and external servers).
* `contexts: [0, 1, 2]` (Available in Guilds, Bot DMs, and Group DMs).

---

## 7. Acceptance Criteria & Verification Plan

- [ ] **Encoding Verification:** Encoding `"Hello World"` with carrier `👻` generates a string that renders as `👻` in Discord and decodes back to `"Hello World"`.
- [ ] **Cross-Platform Compatibility:** A string encoded on `emoji-crypt.vercel.app` decodes properly via `/decode` or Context Menu in Discord, and vice-versa.
- [ ] **Context Menu Operability:** Right-clicking any message with stego text yields the decrypted text ephemerally in under 500ms.
- [ ] **Signature Security:** Unauthenticated POST requests without valid Ed25519 headers fail with HTTP 401.
- [ ] **Mobile & Desktop Tested:** Emojis copy and paste across Discord iOS, Android, and Desktop clients without dropping zero-width characters.
