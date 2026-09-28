// Unicode Zero-Width character tokens (identical to website steganography engine)
export const ZW_ONE = '\u200D';   // Zero-Width Joiner (1)
export const ZW_ZERO = '\u200C';  // Zero-Width Non-Joiner (0)
export const ZW_SEP = '\u200B';   // Zero-Width Space (Character delimiter)

export const DEFAULT_CARRIER = '👻';
export const MAX_PLAINTEXT_LENGTH = 110; // Discord limit safety threshold for single 2000-char message

/**
 * Steganography engine matching GhostGlyph (emoji-crypt.vercel.app)
 */
export const Stego = {
  /**
   * Encodes a secret message into one or more carrier characters.
   * @param {string} message - Secret plaintext
   * @param {string|string[]} [carriers=['👻']] - One or more carrier characters/emojis
   * @returns {{ result: string, totalChars: number, carrierCount: number, bitsCount: number, invisibleCount: number, carriers: string[] }}
   */
  encode(message, carriers = [DEFAULT_CARRIER]) {
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      throw new Error('Please provide at least 1 character to encode.');
    }

    if (message.length > MAX_PLAINTEXT_LENGTH) {
      throw new Error(
        `Message too long (${message.length} chars). Discord's 2,000-character limit allows a maximum of ${MAX_PLAINTEXT_LENGTH} characters per stego payload.`
      );
    }

    // Ensure carriers is an array of characters/emojis respecting surrogate pairs
    let carrierList = [];
    if (Array.isArray(carriers)) {
      carrierList = carriers.filter(Boolean);
    } else if (typeof carriers === 'string' && carriers.trim().length > 0) {
      carrierList = [...carriers.trim()];
    }
    if (carrierList.length === 0) {
      carrierList = [DEFAULT_CARRIER];
    }

    // Map each char to 16-bit binary, converted to ZWJ/ZWNJ
    const invisibleBinaryStream = message
      .split('')
      .map(char => {
        const bin = char.charCodeAt(0).toString(2).padStart(16, '0');
        return bin.split('').map(b => (b === '1' ? ZW_ONE : ZW_ZERO)).join('');
      })
      .join(ZW_SEP);

    const carrierCount = carrierList.length;
    const chunkSize = Math.ceil(invisibleBinaryStream.length / carrierCount);
    let result = '';

    for (let i = 0; i < carrierCount; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, invisibleBinaryStream.length);
      const slice = invisibleBinaryStream.slice(start, end);
      result += carrierList[i] + slice;
    }

    return {
      result,
      totalChars: message.length,
      carrierCount,
      bitsCount: message.length * 16,
      invisibleCount: invisibleBinaryStream.length,
      carriers: carrierList
    };
  },

  /**
   * Extracts and decodes hidden message from a stego string.
   * @param {string} encodedText - String containing carrier and stego payload
   * @returns {string} Decoded plaintext
   */
  decode(encodedText) {
    if (!encodedText || typeof encodedText !== 'string' || !encodedText.trim()) {
      throw new Error('Please paste text or an emoji containing a hidden payload.');
    }

    // Extract only invisible stego characters
    let stream = '';
    for (const char of encodedText) {
      if (char === ZW_SEP || char === ZW_ZERO || char === ZW_ONE) {
        stream += char;
      }
    }

    if (!stream) {
      throw new Error('No hidden payload found in the provided text.');
    }

    try {
      const groups = stream.split(ZW_SEP);
      let plaintext = '';
      let parsedGroups = 0;

      for (const group of groups) {
        if (!group) continue;
        const binary = group
          .split('')
          .map(ch => (ch === ZW_ONE ? '1' : ch === ZW_ZERO ? '0' : ''))
          .join('');

        if (binary.length === 0 || binary.length % 16 !== 0) {
          throw new Error('Corrupted payload: The zero-width sequence is invalid.');
        }

        for (let i = 0; i < binary.length; i += 16) {
          const code = parseInt(binary.substr(i, 16), 2);
          if (code > 0) {
            plaintext += String.fromCharCode(code);
            parsedGroups++;
          }
        }
      }

      if (!plaintext || parsedGroups === 0) {
        throw new Error('Corrupted payload: The zero-width sequence is invalid.');
      }

      return plaintext;
    } catch (err) {
      if (err.message && err.message.includes('Corrupted payload')) {
        throw err;
      }
      throw new Error('Corrupted payload: The zero-width sequence is invalid.');
    }
  },

  /**
   * Diagnostic inspector for stego presence and metrics without revealing secret plaintext.
   * @param {string} text - Text to analyze
   * @returns {{ hasPayload: boolean, visibleCount: number, visibleText: string, hiddenCodeUnits: number, hiddenBits: number, estimatedChars: number, estimatedBytes: number, carriers: string[] }}
   */
  inspect(text) {
    if (!text || typeof text !== 'string') {
      return {
        hasPayload: false,
        visibleCount: 0,
        visibleText: '',
        hiddenCodeUnits: 0,
        hiddenBits: 0,
        estimatedChars: 0,
        estimatedBytes: 0,
        carriers: []
      };
    }

    let visibleChars = '';
    let hiddenCodeUnits = 0;
    let hiddenBits = 0;

    for (const char of text) {
      if (char === ZW_ONE || char === ZW_ZERO) {
        hiddenCodeUnits++;
        hiddenBits++;
      } else if (char === ZW_SEP) {
        hiddenCodeUnits++;
      } else {
        visibleChars += char;
      }
    }

    const carrierArray = [...visibleChars];
    const hasPayload = hiddenBits > 0 && hiddenCodeUnits > 0;
    const estimatedChars = Math.floor(hiddenBits / 16);
    const estimatedBytes = estimatedChars * 2;

    return {
      hasPayload,
      visibleCount: carrierArray.length,
      visibleText: visibleChars,
      hiddenCodeUnits,
      hiddenBits,
      estimatedChars,
      estimatedBytes,
      carriers: carrierArray
    };
  }
};
