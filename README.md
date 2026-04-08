# PaidSync.ai — MCP Server for Ad Management

PaidSync.ai is an MCP server that connects **Google Ads**, **Meta Ads**, and **LinkedIn Ads** to AI assistants like Claude, ChatGPT, and Gemini.

Manage your ad campaigns through natural conversation. Create campaigns, adjust budgets, pull reports, run audits, and optimize performance — all without opening a dashboard.

## Features

- **200+ tools** across Google Ads, Meta Ads, and LinkedIn Ads
- **Full read and write access** — not just reporting, full campaign management
- **Works with Claude, ChatGPT, Gemini**, Cursor, Windsurf, Claude Code
- **Cross-platform** — compare performance and take action across all platforms in one conversation
- **Secure OAuth** — credentials never shared with AI assistants

## Quick Start

### 1. Sign up
Create a free account at [paidsync.ai/signup](https://paidsync.ai/signup). No credit card required.

### 2. Get your MCP server URL
After signing in, copy your unique MCP server URL from the dashboard.

### 3. Connect to your AI assistant

**Claude Desktop** — Add to your MCP config:
```json
{
  "mcpServers": {
    "paidsync": {
      "url": "https://mcp.paidsync.ai/sse?api_key=YOUR_API_KEY"
    }
  }
}
```

**ChatGPT** — Settings → Connected Tools → paste your PaidSync URL

**Claude Code** — Add PaidSync as an MCP server in your settings

### 4. Connect your ad accounts
In the PaidSync dashboard, connect Google Ads, Meta Ads, and/or LinkedIn Ads via OAuth.

### 5. Start managing ads
Open your AI assistant and try: "Show me my Google Ads campaign performance this month"

## What You Can Do

### Google Ads
- Create Search, Shopping, Display, Performance Max, and YouTube campaigns
- Manage keywords, audiences, bidding strategies, and extensions
- Run account audits and wasted spend analysis
- Pull performance reports with any date range

### Meta Ads
- Create Facebook and Instagram campaigns
- Manage audiences, ad sets, and creatives
- Demographic and placement breakdowns
- Lookalike audience creation

### LinkedIn Ads
- Create Sponsored Content and Message Ad campaigns
- Job title, company size, and industry targeting
- Campaign group management
- Conversion tracking

### Cross-Platform
- Compare cost per lead across Google, Meta, and LinkedIn
- Unified performance reporting
- Budget allocation recommendations based on live data

## Example Prompts

```
"Show me all my active Google Ads campaigns and their ROAS"
"Create a new Meta Ads lead gen campaign targeting US small business owners"
"Compare my cost per conversion across all platforms this month"
"Pause all keywords with CPA above $50 and zero conversions"
"Run a full account audit and rank issues by wasted spend"
"What is my LinkedIn Ads spend this month?"
"Increase budget by 20% on my top 3 campaigns by ROAS"
```

## Pricing

| Plan | Price | Calls/month |
|------|-------|-------------|
| Free | $0 | 15 |
| Plus | $49/mo | 150 |
| Pro | $99/mo | 600 |
| Max | $199/mo | 4,000 |

## Resources

- [Website](https://paidsync.ai)
- [Blog](https://paidsync.ai/blog)
- [Documentation](https://paidsync.ai/docs)
- [Book a Demo](https://paidsync.ai/book-demo)

## About

Built by [Ahmed Ashraf](https://paidsync.ai/about/ahmed-ashraf) — Google Premier Partner (top 3%), 10+ years in paid media, $1B+ in ad revenue generated.

## License

This repository contains documentation and examples for the PaidSync.ai MCP server. The MCP server itself is a hosted service at paidsync.ai.
