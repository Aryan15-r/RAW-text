import { verifyKey } from "discord-interactions";

/**
 * Validates Ed25519 signatures on incoming Discord Interaction requests.
 * @param {Request} request - Incoming Cloudflare Worker request
 * @param {Record<string, string>} env - Cloudflare Worker environment variables
 * @returns {Promise<boolean>} True if signature matches, false otherwise
 */
export async function verifyDiscordRequest(request, env) {
  const signature = request.headers.get("x-signature-ed25519");
  const timestamp = request.headers.get("x-signature-timestamp");

  if (!signature || !timestamp || !env.PUBLIC_KEY) {
    return false;
  }

  try {
    const body = await request.clone().text();
    return await verifyKey(body, signature, timestamp, env.PUBLIC_KEY);
  } catch (err) {
    return false;
  }
}
