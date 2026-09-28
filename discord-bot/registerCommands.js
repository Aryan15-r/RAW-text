import dotenv from "dotenv";
dotenv.config({ path: ".dev.vars" });
dotenv.config();

const APP_ID = process.env.APPLICATION_ID;
const TOKEN = process.env.BOT_TOKEN;

if (!APP_ID || !TOKEN || APP_ID === "YOUR_APPLICATION_ID_HERE" || TOKEN === "YOUR_BOT_TOKEN_HERE") {
  console.error(
    "\n❌ Missing or placeholder APPLICATION_ID or BOT_TOKEN.\n" +
    "Please populate .dev.vars or set the environment variables before registering commands.\n" +
    "Example:\n  APPLICATION_ID=123456789012345678\n  BOT_TOKEN=MTA...\n"
  );
  process.exit(1);
}

const commands = [
  {
    name: "encode",
    description: "Encode a secret invisible message into emojis or text",
    type: 1, // CHAT_INPUT
    options: [
      {
        name: "message",
        description: "Secret plaintext to conceal (max 110 characters for Discord message limit)",
        type: 3, // STRING
        required: true
      },
      {
        name: "carrier",
        description: "Carrier emoji(s) or decoy text (default: 👻)",
        type: 3, // STRING
        required: false
      },
      {
        name: "silent",
        description: "Send output only to you (ephemeral). Default: false (public)",
        type: 5, // BOOLEAN
        required: false
      }
    ],
    integration_types: [0, 1], // 0: Guild Install, 1: User Install
    contexts: [0, 1, 2] // 0: Guilds, 1: Bot DMs, 2: Group DMs
  },
  {
    name: "decode",
    description: "Extract and reveal hidden GhostGlyph steganographic text (always ephemeral)",
    type: 1, // CHAT_INPUT
    options: [
      {
        name: "stego_text",
        description: "The emoji or text containing the hidden payload",
        type: 3, // STRING
        required: true
      }
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2]
  },
  {
    name: "inspect",
    description: "Inspect text/emojis for zero-width steganographic payloads without revealing secrets",
    type: 1, // CHAT_INPUT
    options: [
      {
        name: "text",
        description: "The text or emoji string to inspect",
        type: 3, // STRING
        required: true
      }
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2]
  },
  {
    name: "Decrypt Invisible Message",
    type: 3, // MESSAGE context menu
    integration_types: [0, 1],
    contexts: [0, 1, 2]
  }
];

async function register() {
  const endpoint = `https://discord.com/api/v10/applications/${APP_ID}/commands`;

  console.log(`Registering ${commands.length} application commands to Discord API v10...`);

  const response = await fetch(endpoint, {
    method: "PUT",
    headers: {
      Authorization: `Bot ${TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(commands)
  });

  if (response.ok) {
    const data = await response.json();
    console.log(`\n✅ Successfully registered ${data.length} global commands:`);
    for (const cmd of data) {
      console.log(`  - [${cmd.type === 1 ? 'SLASH' : 'CONTEXT'}] ${cmd.name} (id: ${cmd.id})`);
    }
  } else {
    const errorData = await response.json();
    console.error("\n❌ Failed to register commands with Discord API:", JSON.stringify(errorData, null, 2));
    process.exit(1);
  }
}

register();
