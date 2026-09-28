import { verifyDiscordRequest } from "./utils/verifyDiscord.js";
import { json, ephemeralMessage } from "./responses.js";
import { handleEncode } from "./commands/encode.js";
import { handleDecode } from "./commands/decode.js";
import { handleInspect } from "./commands/inspect.js";
import { handleContextDecrypt } from "./commands/contextDecrypt.js";

export default {
  /**
   * Main entrypoint for Cloudflare Worker handling Discord Interactions.
   * @param {Request} request
   * @param {Record<string, string>} env
   * @param {ExecutionContext} ctx
   * @returns {Promise<Response>}
   */
  async fetch(request, env, ctx) {
    // 1. Only POST requests are valid for Discord interaction webhooks
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    // 2. Validate Ed25519 signature before processing any data
    const isValid = await verifyDiscordRequest(request, env);
    if (!isValid) {
      return new Response("Invalid request signature", { status: 401 });
    }

    let interaction;
    try {
      interaction = await request.json();
    } catch {
      return new Response("Bad Request: Malformed JSON", { status: 400 });
    }

    const { type, data } = interaction;

    // 3. Discord Ping ACK (Type 1 Interaction)
    if (type === 1) {
      return json({ type: 1 });
    }

    // 4. Application Commands (Type 2 Interaction: Slash Commands & Context Menus)
    if (type === 2 && data) {
      try {
        // Message Context Menu (type: 3)
        if (data.type === 3 && data.name === "Decrypt Invisible Message") {
          return await handleContextDecrypt(interaction);
        }

        // Slash Commands (type: 1 or default)
        switch (data.name) {
          case "encode":
            return await handleEncode(interaction);
          case "decode":
            return await handleDecode(interaction);
          case "inspect":
            return await handleInspect(interaction);
          default:
            return ephemeralMessage(`Unknown command: "${data.name}"`);
        }
      } catch (err) {
        // Controlled error response without leaking sensitive stack traces
        return ephemeralMessage("An error occurred while executing this command. Please try again.");
      }
    }

    return json({ error: "Interaction type not recognized" }, 400);
  }
};
