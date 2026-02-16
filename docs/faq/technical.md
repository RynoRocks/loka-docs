---
sidebar_position: 2
title: Technical FAQ
description: "Technical FAQ for Loka — supported browsers, mobile access, API keys, calendar sync, data export, and troubleshooting tips."
---

# Technical FAQ

Common technical questions about using the Loka platform.

---

### What browsers are supported?

Loka works best on the latest versions of:

- **Google Chrome** (recommended)
- **Mozilla Firefox**
- **Microsoft Edge**
- **Safari** (macOS and iOS)

We recommend keeping your browser updated to the latest version for the best experience. Internet Explorer is not supported.

---

### My lesson times are showing the wrong timezone. How do I fix this?

Go to **Account Settings > Timezone** and make sure the correct timezone is selected. Loka detects your timezone automatically at sign-up, but it may need to be updated if you have moved or if your system clock is set incorrectly.

All lesson times, booking slots, and reminders use your configured timezone. After updating it, refresh the page to see the corrected times.

---

### What video conferencing platforms does Loka support?

Loka integrates with **Zoom** for online lessons. When Zoom is connected, booking an online lesson automatically generates a Zoom meeting link that is included in the confirmation email.

If your school uses a different video platform (Google Meet, Microsoft Teams, etc.), your educator can manually add the meeting link to the lesson details.

---

### How do I set up my AI API key?

Loka's AI features (ARP generation, lesson assessment, AI-assisted feedback) require an API key from either **Anthropic (Claude)** or **OpenAI (GPT)**.

To set up your key:

1. Go to **Profile > Settings > AI Integration**.
2. Enter your API key for Anthropic, OpenAI, or both.
3. Select your **preferred provider** (the system will try your preferred provider first and fall back to the other if needed).
4. Click **Save**.

You can obtain API keys from [Anthropic](https://console.anthropic.com/) or [OpenAI](https://platform.openai.com/). AI costs are billed directly by the provider based on your usage -- Loka does not add any markup.

---

### Can I use Loka on my phone or tablet?

Yes. Loka is a web-based platform with a responsive design that works on mobile devices and tablets. There is no separate mobile app -- you access Loka through your device's browser.

For the best experience on mobile, we recommend using Chrome or Safari.

---

### How do I export my data?

Lesson summaries can be downloaded individually as **PDF** files from the lesson detail page. Audio versions of lesson content can be generated and downloaded as **MP3** files.

For bulk data exports (lesson history, student records, etc.), contact your Loka Creator or reach out to support.

---

### I forgot my password. How do I reset it?

Click the **Forgot Password** link on the login page. Enter your registered email address, and you will receive a password reset link. The link is valid for a limited time -- if it expires, simply request a new one.

If you do not receive the email, check your spam folder. If the issue persists, contact your school administrator or Loka support.

---

### Are my API keys and data secure?

Yes. API keys stored in Loka are encrypted at rest. Loka uses HTTPS for all connections, and sensitive data is handled according to industry-standard security practices. Your AI API keys are never shared with other users or third parties -- they are used solely to make API calls on your behalf.
