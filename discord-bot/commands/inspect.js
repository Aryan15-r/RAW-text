import { Stego } from "../utils/stego.js";
import { ephemeralMessage } from "../responses.js";
import { formatInspectResponse } from "../utils/formatters.js";

/**
 * Handles /inspect slash command.
 * @param {object} interaction - Discord interaction object
 * @returns {Response}
 */
export async function handleInspect(interaction) {
  const options = interaction.data?.options || [];
  const textOpt = options.find(o => o.name === "text");
  const text = textOpt?.value;

  if (!text || typeof text !== "string") {
    return ephemeralMessage("Please provide text or an emoji string to inspect.");
  }

  const stats = Stego.inspect(text);
  return ephemeralMessage(formatInspectResponse(stats));
}
