import { Stego, ZW_ONE, ZW_ZERO, ZW_SEP, DEFAULT_CARRIER } from '../utils/stego.js';

// Exact website implementation copied directly from index.html (lines 1284-1368) for cross-compatibility testing
const WebsiteStego = {
  encode: function (message, carriers) {
    if (!message || !message.trim()) {
      throw new Error('Please enter a secret message to encode.');
    }
    if (!carriers || carriers.length === 0) {
      throw new Error('Please select or specify at least one carrier emoji or character.');
    }

    const invisibleBinaryStream = message
      .split('')
      .map(char => {
        const bin = char.charCodeAt(0).toString(2).padStart(16, '0');
        return bin.split('').map(b => (b === '1' ? ZW_ONE : ZW_ZERO)).join('');
      })
      .join(ZW_SEP);

    const carrierCount = carriers.length;
    const chunkSize = Math.ceil(invisibleBinaryStream.length / carrierCount);
    let result = '';

    for (let i = 0; i < carrierCount; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, invisibleBinaryStream.length);
      const slice = invisibleBinaryStream.slice(start, end);
      result += carriers[i] + slice;
    }

    return {
      result: result,
      totalChars: message.length,
      carrierCount: carrierCount,
      bitsCount: message.length * 16,
      invisibleCount: invisibleBinaryStream.length
    };
  },

  decode: function (encodedText) {
    if (!encodedText || !encodedText.trim()) {
      throw new Error('Please paste text or an emoji containing a hidden payload.');
    }

    let stream = '';
    for (const char of encodedText) {
      if (char === ZW_SEP || char === ZW_ZERO || char === ZW_ONE) {
        stream += char;
      }
    }

    if (!stream) {
      throw new Error('No invisible payload found. Ensure the text contains a GhostGlyph message.');
    }

    try {
      const groups = stream.split(ZW_SEP);
      let plaintext = '';

      for (const group of groups) {
        if (!group) continue;
        const binary = group
          .split('')
          .map(ch => (ch === ZW_ONE ? '1' : ch === ZW_ZERO ? '0' : ''))
          .join('');

        if (binary.length % 16 !== 0) continue;

        for (let i = 0; i < binary.length; i += 16) {
          const code = parseInt(binary.substr(i, 16), 2);
          if (code > 0) {
            plaintext += String.fromCharCode(code);
          }
        }
      }

      if (!plaintext) {
        throw new Error('Invalid or corrupted payload format.');
      }

      return plaintext;
    } catch (err) {
      throw new Error(err.message || 'Failed to decode message.');
    }
  }
};

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    testsPassed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    testsFailed++;
  }
}

console.log('\n--- 1. Testing Bot Pure Steganography Engine ---');

const testCases = [
  'Hello',
  'Hello World',
  '123456789',
  '!@#$%^&*()_+-=[]{}|;\':",./<>?',
  'Secret 🔥 🚀 💻 message',
  'Line 1\nLine 2\nLine 3',
  'Spaces   and    tabs\t\there',
  'Multilingual: Bonjour le monde / こんにちは / नमस्ते दुनिया'
];

for (const testText of testCases) {
  const encoded = Stego.encode(testText, '👻');
  const decoded = Stego.decode(encoded.result);
  assert(decoded === testText, `Roundtrip encoding/decoding: "${testText.slice(0, 25)}..."`);
}

console.log('\n--- 2. Testing Multiple & Diverse Carriers ---');

const carriersToTest = [
  '👻',
  '🔒',
  '🤫',
  ['👻', '🔒', '🐱'],
  'CovertMsg'
];

for (const carrier of carriersToTest) {
  const label = Array.isArray(carrier) ? carrier.join('') : carrier;
  const encoded = Stego.encode('GhostGlyph Carrier Test', carrier);
  const decoded = Stego.decode(encoded.result);
  assert(decoded === 'GhostGlyph Carrier Test', `Carrier support: ${label}`);
}

console.log('\n--- 3. Testing Inspection Diagnostics ---');

const testStego = Stego.encode('Top Secret', '🔒').result;
const inspectedStego = Stego.inspect(testStego);
assert(inspectedStego.hasPayload === true, 'Inspector detects hidden payload in stego text');
assert(inspectedStego.hiddenBits === 10 * 16, `Inspector counts correct bits (${inspectedStego.hiddenBits} == 160)`);
assert(inspectedStego.estimatedChars === 10, 'Inspector calculates correct character count');

const plainText = 'Plain Emoji 👻 without secret';
const inspectedPlain = Stego.inspect(plainText);
assert(inspectedPlain.hasPayload === false, 'Inspector detects NO payload in normal text');

console.log('\n--- 4. Testing Error Handling & Constraints ---');

// Empty input
try {
  Stego.encode('   ');
  assert(false, 'Should throw on empty input');
} catch (e) {
  assert(e.message === 'Please provide at least 1 character to encode.', 'Empty input error message matched');
}

// Oversized input (> 110 chars)
try {
  const longMsg = 'A'.repeat(120);
  Stego.encode(longMsg);
  assert(false, 'Should throw on oversized message');
} catch (e) {
  assert(e.message.includes('Message too long'), 'Length constraint error triggered with explanation');
}

// Decode text with no payload
try {
  Stego.decode('Hello World with no secret');
  assert(false, 'Should throw when decoding payload-free text');
} catch (e) {
  assert(e.message === 'No hidden payload found in the provided text.', 'Missing payload error message matched');
}

// Corrupted payload
try {
  const corrupted = '👻' + ZW_ONE + ZW_ZERO + ZW_ONE; // Incomplete 3 bits (not 16-bit aligned)
  Stego.decode(corrupted);
  assert(false, 'Should throw on corrupted payload');
} catch (e) {
  assert(e.message.includes('Corrupted payload'), 'Corrupted payload error message matched');
}

console.log('\n--- 5. Cross-Compatibility: Website <-> Discord Bot ---');

// Direction 1: Website encode -> Discord Bot decode
const webEncoded = WebsiteStego.encode('Secret message from website', ['👻']);
const botDecoded = Stego.decode(webEncoded.result);
assert(botDecoded === 'Secret message from website', 'Website encoded → Discord Bot decoded perfectly');

// Direction 2: Discord Bot encode -> Website decode
const botEncoded = Stego.encode('Secret message from Discord bot', '👻');
const webDecoded = WebsiteStego.decode(botEncoded.result);
assert(webDecoded === 'Secret message from Discord bot', 'Discord Bot encoded → Website decoded perfectly');

// Direction 3: Multi-carrier cross-compatibility
const multiWebEncoded = WebsiteStego.encode('Multi-carrier cross test', ['🔒', '🤫', '👻']);
const multiBotDecoded = Stego.decode(multiWebEncoded.result);
assert(multiBotDecoded === 'Multi-carrier cross test', 'Multi-carrier Website encoded → Discord Bot decoded');

const multiBotEncoded = Stego.encode('Multi-carrier bot test', ['🔒', '🤫', '👻']);
const multiWebDecoded = WebsiteStego.decode(multiBotEncoded.result);
assert(multiWebDecoded === 'Multi-carrier bot test', 'Multi-carrier Discord Bot encoded → Website decoded');

console.log(`\n================================`);
console.log(`Tests Completed: ${testsPassed} passed, ${testsFailed} failed`);
console.log(`================================\n`);

if (testsFailed > 0) {
  process.exit(1);
}
