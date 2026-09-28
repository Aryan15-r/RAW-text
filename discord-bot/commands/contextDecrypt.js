import { Stego } from "../utils/stego.js";
import { ephemeralMessage } from "../responses.js";
import { formatDecodedResponse } from "../utils/formatters.js";

/**
 * Handles "Decrypt Invisible Message" context menu application command.
 * @param {object} interaction - Discord interaction object (type: 2, data.type: 3)
 * @returns {Response}
 */
export async function handleContextDecrypt(interaction) {
  const targetId = interaction.data?.target_id;
  const messageObj = interaction.data?.resolved?.messages?.[targetId];
  const content = messageObj?.content;

  if (!content || typeof content !== "string" || !content.trim()) {
    return ephemeralMessage("The targeted message does not contain any text content to decrypt.");
  }

  try {
    const plaintext = Stego.decode(content);
    return ephemeralMessage(formatDecodedResponse(plaintext));
  } catch (err) {
    if (err.message && err.message.includes("No hidden payload found")) {
      return ephemeralMessage("No hidden payload found in the provided text.");
    }
    if (err.message && err.message.includes("Corrupted payload")) {
      return ephemeralMessage("Corrupted payload: The zero-width sequence is invalid.");
    }
    return ephemeralMessage(err.message || "Failed to decode the targeted message.");
  }
}
