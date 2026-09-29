/**
 * Formats the /decode response.
 * @param {string} plaintext
 * @returns {string}
 */
export function formatDecodedResponse(plaintext) {
  return [
    '**Decoded message:**',
    '',
    '```',
    plaintext,
    '```',
    '',
    `**Characters:** ${plaintext.length}`
  ].join('\n');
}

/**
 * Formats the /inspect response without revealing plaintext.
 * @param {ReturnType<import('./stego.js').Stego['inspect']>} stats
 * @returns {string}
 */
export function formatInspectResponse(stats) {
  const statusStr = stats.hasPayload ? '🟢 DETECTED' : '⚪ NONE';

  return [
    '### 🔍 GhostGlyph Inspection',
    '',
    `**Stego status:** ${statusStr}`,
    `**Visible characters:** ${stats.visibleCount} (${stats.visibleText || 'None'})`,
    `**Hidden Unicode code units:** ${stats.hiddenCodeUnits}`,
    `**Hidden bits:** ${stats.hiddenBits}`,
    `**Estimated payload size:** ~${stats.estimatedBytes} bytes (${stats.estimatedChars} chars)`,
    ...(stats.hasPayload
      ? ['', '*Use `/decode` or right-click the message → **Apps** → **Decrypt Invisible Message** to reveal content.*']
      : [])
  ].join('\n');
}

/**
 * Formats the /encode response for ephemeral mode.
 * @param {string} encodedString
 * @param {number} charCount
 * @param {number} carrierCount
 * @returns {string}
 */
export function formatEncodedEphemeralResponse(encodedString, charCount, carrierCount) {
  return [
    '🔒 **GhostGlyph Encoded Successfully!**',
    '',
    '**Copy the carrier emoji/text below:**',
    '```',
    encodedString,
    '```',
    `*Payload embedded: ${charCount} chars across ${carrierCount} carrier glyph(s).*`,
    '*Paste this into any channel or DM — only users with the bot or GhostGlyph website can decode it.*'
  ].join('\n');
}
