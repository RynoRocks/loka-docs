---
sidebar_position: 4
title: AI-Powered Features
description: "Use AI in Loka with your own API key. Get lesson preparation help, real-time suggestions, and automated session feedback."
---

# AI-Powered Features

Loka integrates AI to help you teach more effectively. From generating teaching suggestions to creating review materials automatically, these tools save time and improve the learning experience.

## Bring Your Own Key (BYOK)

Loka uses a **BYOK model** for AI features. This means you provide your own API key from a supported AI provider, and Loka uses it to power AI features in your account. You are billed directly by the AI provider based on your usage -- Loka does not mark up or resell AI access.

### Supported Providers

| Provider | Key Setting | Default Model |
|----------|-------------|---------------|
| **Anthropic Claude** | Settings > AI Integration | Claude Sonnet |
| **OpenAI** | Settings > AI Integration | GPT-4o Mini |

### Adding Your API Key

1. Go to **Settings** in your educator dashboard
2. Open the **AI Integration** section
3. Enter your API key for Anthropic, OpenAI, or both
4. Select your **preferred provider** (the one Loka will try first)
5. Save your settings

Your keys are encrypted and stored securely. Loka never shares your keys with third parties.

:::tip
If you're unsure which provider to choose, Anthropic Claude generally produces more nuanced language feedback, while OpenAI GPT-4o Mini is faster and uses fewer tokens. You can add keys for both and let the fallback system handle the rest.
:::

## Provider Fallback

If you have keys for both providers, Loka uses an automatic fallback system:

1. Loka tries your **preferred provider** first
2. If that provider fails (rate limit, quota exceeded, temporary error), Loka automatically retries with the **other provider**
3. You get your result without interruption

This means you're never blocked by a single provider's downtime.

## AI Features

### AI Suggest

During or after a lesson, use **AI Suggest** to get teaching recommendations based on your session notes:

- Suggested follow-up topics based on what was covered
- Recommended exercises for areas where the student struggled
- Vocabulary expansion ideas related to the lesson theme

Access AI Suggest from the canvas toolbar or the session review screen.

### ARP Generation

AI can automatically generate **Active Recall Pairs** from your lesson content:

1. Complete a session with notes on the [Living Canvas](/educators/canvas)
2. Click **Generate ARPs** from the canvas menu
3. AI analyzes your session notes, keywords, and CIPs
4. A set of question-answer pairs is generated for student review

You can edit, approve, or discard any generated ARPs before they're added to the student's review deck.

### AI-Powered Session Feedback

After a lesson, AI can generate structured feedback for your student:

- Summary of what was covered
- Strengths demonstrated during the session
- Areas for improvement with specific examples
- Recommended practice activities

This feedback is based on your canvas notes and CIPs, so the more detailed your session records, the better the feedback.

## Fathom AI Integration

If you use **Fathom AI** for meeting transcription, you can connect it to Loka:

1. Go to **Settings > AI Integration**
2. Enter your Fathom API key
3. After a lesson conducted via video call, Fathom's transcription can feed into Loka's ARP generation and feedback tools

This is especially powerful for conversation-heavy lessons where you may not have time to type detailed notes on the canvas. The transcription fills in the gaps.

## Usage and Costs

Since you own your API keys, AI costs depend on your usage:

| Feature | Typical Cost |
|---------|-------------|
| AI Suggest | A few cents per request |
| ARP Generation | A few cents per session |
| Session Feedback | A few cents per session |

Costs are billed directly by your AI provider (Anthropic or OpenAI). Check your provider's dashboard for detailed usage tracking.

:::note
AI features are optional. Loka works fully without them -- you can always create ARPs, write feedback, and plan lessons manually. AI simply speeds up the process.
:::
