import { Stego } from "../utils/stego.js";
import { ephemeralMessage } from "../responses.js";
import { formatDecodedResponse } from "../utils/formatters.js";

/**
 * Handles /decode slash command.
 * @param {object} interaction - Discord interaction object
 * @returns {Response}
 */
export async function handleDecode(interaction) {
  const options = interaction.data?.options || [];
  const textOpt = options.find(o => o.name === "stego_text");
  const stegoText = textOpt?.value;

  if (!stegoText || typeof stegoText !== "string" || !stegoText.trim()) {
    return ephemeralMessage("Please provide the emoji or text containing the hidden payload to decode.");
  }

  try {
    const plaintext = Stego.decode(stegoText);
    return ephemeralMessage(formatDecodedResponse(plaintext));
  } catch (err) {
    // Specific error strings requested by PRD & specifications
    if (err.message && err.message.includes("No hidden payload found")) {
      return ephemeralMessage("No hidden payload found in the provided text.");
    }
    if (err.message && err.message.includes("Corrupted payload")) {
      return ephemeralMessage("Corrupted payload: The zero-width sequence is invalid.");
    }
    return ephemeralMessage(err.message || "Failed to decode the provided message.");
  }
}
