/**
 * Helper to construct JSON Responses for Cloudflare Workers.
 * @param {object} data
 * @param {number} [status=200]
 * @returns {Response}
 */
export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

/**
 * Creates an ephemeral Discord message response (InteractionResponseType: 4, flags: 64).
 * @param {string} content
 * @param {object} [extraData={}]
 * @returns {Response}
 */
export function ephemeralMessage(content, extraData = {}) {
  return json({
    type: 4, // CHANNEL_MESSAGE_WITH_SOURCE
    data: {
      content,
      flags: 64, // EPHEMERAL
      ...extraData
    }
  });
}

/**
 * Creates a public Discord message response (InteractionResponseType: 4).
 * @param {string} content
 * @param {object} [extraData={}]
 * @returns {Response}
 */
export function publicMessage(content, extraData = {}) {
  return json({
    type: 4, // CHANNEL_MESSAGE_WITH_SOURCE
    data: {
      content,
      ...extraData
    }
  });
}
