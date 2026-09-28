# GhostGlyph (Emoji-Crypt) 👻🔒

> Invisible Unicode Steganography & Cipher Vault — Web App & Serverless Discord Bot.

Conceal hidden messages directly inside innocent-looking emojis and text using undetectable Unicode zero-width characters (`\u200D`, `\u200C`, `\u200B`). 100% private, client-side, and cross-platform.

🌐 **Live Web Application:** [emoji-crypt.vercel.app](https://emoji-crypt.vercel.app/)  
🤖 **Discord Bot Implementation:** See [`discord-bot/README.md`](./discord-bot/README.md)

---

## 📁 Repository Structure

```text
├── index.html            # Web application (Single-page Steganography Vault)
├── fonts/                # Custom web typography
├── discord-bot/          # Serverless Cloudflare Workers Discord Bot
│   ├── commands/         # /encode, /decode, /inspect & Context Menu handlers
│   ├── utils/            # Shared steganography engine & Ed25519 verifier
│   ├── test/             # 25-point automated test suite & cross-platform validation
│   ├── index.js          # Cloudflare Worker router
│   ├── registerCommands.js # Discord REST API registration script
│   ├── wrangler.toml     # Cloudflare Worker deployment definition
│   └── README.md         # Complete self-hosting & setup guide for the bot
├── prd.md                # Product Requirements Document
└── bot-base.md           # Architecture starter guide
```

---

## 🚀 Quick Links

* **Try the Web App:** [emoji-crypt.vercel.app](https://emoji-crypt.vercel.app/)
* **Self-Host the Discord Bot:** Follow the [Discord Bot Self-Hosting Guide](./discord-bot/README.md) to deploy your own private bot on Cloudflare Workers in under 5 minutes for free!

---

## 🔒 Security & Privacy

* **100% Client-Side & In-Memory:** Neither the web app nor the Discord bot store or log your secret messages or decoded plaintexts.
* **No Database or Tracking:** Zero telemetry, no analytics, no external storage.
* **Cryptographic Signatures:** The Discord bot validates all webhook requests with Ed25519 signature checks.

---

## 📄 License

MIT License. Free to use, modify, and distribute.
