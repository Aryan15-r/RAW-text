import { Stego, DEFAULT_CARRIER, MAX_PLAINTEXT_LENGTH } from "../utils/stego.js";
import { ephemeralMessage, publicMessage } from "../responses.js";
import { formatEncodedEphemeralResponse } from "../utils/formatters.js";

/**
 * Handles /encode slash command.
 * @param {object} interaction - Discord interaction object
 * @returns {Response}
 */
export async function handleEncode(interaction) {
  const options = interaction.data?.options || [];
  const messageOpt = options.find(o => o.name === "message");
  const carrierOpt = options.find(o => o.name === "carrier");
  const silentOpt = options.find(o => o.name === "silent");

  const message = messageOpt?.value;
  const carrier = carrierOpt?.value || DEFAULT_CARRIER;
  const isSilent = silentOpt?.value === true;

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return ephemeralMessage("Please provide at least 1 character to encode.");
  }

  if (message.length > MAX_PLAINTEXT_LENGTH) {
    return ephemeralMessage(
      `❌ **Message too long:** Your secret contains **${message.length}** characters.\n\n` +
      `Because GhostGlyph expands each character into 16 invisible zero-width bits, Discord's 2,000-character single-message limit accommodates up to **${MAX_PLAINTEXT_LENGTH}** characters per payload.\n\n` +
      `Please shorten your message by ${message.length - MAX_PLAINTEXT_LENGTH} character(s). The input has not been truncated.`
    );
  }

  try {
    const encoded = Stego.encode(message, carrier);

    if (isSilent) {
      return ephemeralMessage(
        formatEncodedEphemeralResponse(encoded.result, message.length, encoded.carrierCount)
      );
    }

    // Public message: return only the stego carrier containing invisible payload (NEVER the plaintext)
    return publicMessage(encoded.result);
  } catch (err) {
    return ephemeralMessage(`Failed to encode message: ${err.message || 'Unknown error'}`);
  }
}
