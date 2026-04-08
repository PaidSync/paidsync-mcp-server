/**
 * PaidSync.ai MCP Server Configuration
 *
 * MCP server for managing Google Ads, Meta Ads, and LinkedIn Ads
 * through AI assistants like Claude, ChatGPT, and Gemini.
 *
 * Get your API key at https://paidsync.ai/signup
 * Documentation: https://paidsync.ai/docs
 */

const PAIDSYNC_MCP_URL = 'https://mcp.paidsync.ai/sse';

function getConfig(apiKey) {
  if (!apiKey) {
    throw new Error('PaidSync API key is required. Get one at https://paidsync.ai/signup');
  }
  return {
    mcpServers: {
      paidsync: {
        url: `${PAIDSYNC_MCP_URL}?api_key=${apiKey}`
      }
    }
  };
}

module.exports = { getConfig, PAIDSYNC_MCP_URL };
