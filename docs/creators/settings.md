---
sidebar_position: 5
title: Platform Settings
description: "Configure your Loka Creator school — branding, booking page, services, payment settings, calendar integration, and notifications."
---

# Platform Settings

As a Loka Creator, you can configure your school's settings to match your business needs. Access all settings from **Admin Panel > Settings**.

## System Settings

### Timezone

Set your school's default timezone. This affects:

- How available time slots are displayed to learners
- Default timezone for new user accounts
- Scheduling and reminder calculations

Individual users can override this with their own timezone in their account settings.

### Currency

The platform currency is currently set to USD. Currency configuration may be expanded in future updates.

### Booking Rules

Configure how learners book lessons at your school:

- **Minimum advance booking** -- how far in advance a lesson must be booked (e.g., 24 hours).
- **Maximum booking window** -- how far into the future learners can book (e.g., 2 weeks, 1 month).
- **Cancellation policy** -- the cutoff time for free cancellations and what happens with late cancellations.
## Integrations

Loka connects with several third-party services to extend your school's capabilities.

### Stripe

Stripe handles all payment processing for Loka. Your Stripe connection is set up during onboarding.

- View connection status in **Settings > Integrations > Stripe**
- Manage your Stripe account directly from the Stripe dashboard
- Webhook events are handled automatically (lesson payments, seat renewals, cancellations)

### Zoom

Connect Zoom to automatically generate meeting links for online lessons.

- Go to **Settings > Integrations > Zoom**
- Authorize your Zoom account
- Once connected, booking an online lesson automatically creates a Zoom meeting and includes the join link in the confirmation email

### Zoho Invoice

Integrate with Zoho Invoice for billing and invoicing. When connected, learner contacts are automatically created in Zoho Invoice when they join your school.

- Go to **Settings > Integrations > Zoho**
- Authorize your Zoho Invoice account
- Contacts are created automatically when new learners register

### Asana

Asana integration is available for task and project management. This integration is currently inactive and may be enabled in a future update. The configuration fields exist in Settings for when it becomes available.

## Email Configuration

Loka sends automated emails for common events:

- Welcome / invitation emails
- Booking confirmations and reminders
- Lesson summary notifications
- Password reset emails

Email templates are pre-configured with your school name and logo. The notification email address can be set in Settings to receive system alerts.

## White-Labelling

Make Loka feel like your own platform with white-labelling options. White-labelling access requires a one-time purchase ($100).

- **School name** -- displayed throughout the platform and in emails.
- **Logo** -- upload your school's logo to replace the default Loka branding in the navigation bar and emails.
- **Copyright text** -- customize the footer copyright text.

:::tip
White-labelling helps build trust with your learners. When the platform looks and feels like your brand, it reinforces your school's identity and professionalism.
:::
