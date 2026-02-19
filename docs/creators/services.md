---
sidebar_position: 3
title: Services, Locations & Packages
description: "Set up lesson types, assign locations and educators, and create packages. Includes a pre-launch checklist to ensure learners can book."
---

# Services, Locations & Packages

Services are the lesson types you offer (e.g., "one month session", "Demo Session"). Each service needs to be connected to at least one **location** and at least one **educator** before learners can book it.

## How Booking Works

When a learner opens the booking page, the system loads options in a chain:

1. **Service** — the learner picks a lesson type from their purchased package
2. **Location** — the system shows locations assigned to that service
3. **Educator** — the system shows educators assigned to both the service AND the selected location
4. **Date & Time** — the system shows the educator's available slots

If any link in this chain is missing, the learner gets stuck. For example, if a service has no locations assigned, the Location dropdown will be empty and the learner cannot proceed.

## Creating a Service

1. Go to **Admin Panel > Manage Services**.
2. Click **Add New Service**.
3. Fill in the service details:
   - **Title** — the name learners will see (e.g., "one month session")
   - **Length** — lesson duration in minutes
   - **Price** — cost per lesson (deducted from the learner's credit balance)
4. Save the service.

:::caution Important
Creating a service is only the first step. You must also assign locations and educators to the service, otherwise learners will not be able to book.
:::

## Assigning Locations to a Service

Every service needs at least one location. Locations define where (or how) the lesson takes place.

1. Go to **Admin Panel > Manage Services**.
2. Click on the service you want to edit.
3. In the **Locations** section, select the locations where this service is available (e.g., "Remote" for online lessons).
4. Save.

Common location types:

| Type | Example | Notes |
|------|---------|-------|
| **Remote** | Online via Zoom/Google Meet | Most common for online schools |
| **On-premise** | Your classroom or office | Learner comes to you |
| **Off-premise** | Cafe, learner's office | You go to the learner |

If your school offers online lessons, make sure the **Remote** location is assigned to every service.

## Assigning Educators to a Service

Each service also needs at least one educator assigned to teach it.

1. Go to **Admin Panel > Manage Services**.
2. Click on the service.
3. In the **Teachers** section, select the educators who can teach this service.
4. Save.

Alternatively, you can assign services from the educator's profile:

1. Go to **Users > Manage LP**.
2. Click on the educator.
3. In the **Services** tab, check the services they should teach.
4. Save.

:::tip
When you add a new service, remember to assign it to all educators who should teach it. A common mistake is creating the service and package but forgetting to link educators to it.
:::

## Assigning Locations to Educators

Educators also need locations assigned to them. This tells the system where each educator is available to teach.

1. Go to **Users > Manage LP**.
2. Click on the educator.
3. In the **Locations** tab, check the locations where they teach.
4. Save.

For the educator to appear in the booking form, they must have **both** the service AND the location assigned.

## Creating Packages

Packages bundle services into purchasable plans for learners (e.g., "one month session" with a set number of credits).

1. Go to **Admin Panel > Manage Packages**.
2. Click **Add New Package**.
3. Set the package details:
   - **Title** — what the learner sees
   - **Price** — total cost
   - **Credits** — how many lesson credits are included
   - **Duration** — how long the package is valid (start to end date)
4. In the **Services** section, link the service(s) included in this package.
5. Save.

## Pre-Launch Checklist

Before telling a learner to book, verify every link in the chain is complete. If any item is missing, the learner will get stuck on the booking page.

- [ ] **Service created** — the lesson type exists and is active
- [ ] **Location(s) assigned to service** — at least one location (usually "Remote") is linked
- [ ] **Educator(s) assigned to service** — at least one active educator is linked
- [ ] **Educator(s) assigned to location** — the same educator has the matching location
- [ ] **Package created** — if using packages, the package is linked to the service
- [ ] **Learner has active package** — the learner has purchased and has an active subscription
- [ ] **Educator's schedule is set** — the educator has availability configured for the relevant days

### Quick Test

The fastest way to verify everything is connected:

1. Log in as the learner (or use a test learner account).
2. Go to the booking page.
3. Select the service — the Location dropdown should show options.
4. Select a location — the Educator dropdown should show the correct educator(s).
5. Select an educator and date — available time slots should appear.

If any dropdown is empty or disabled, trace back through the checklist above to find the missing link.

## Troubleshooting

### "Location dropdown is empty after selecting a service"

The service has no locations assigned. Go to **Manage Services**, edit the service, and add at least one location.

### "Educator dropdown is empty after selecting a location"

Either:
- The educator is not assigned to that service — check **Manage Services > Teachers**
- The educator is not assigned to that location — check **Users > Manage LP > Locations**
- The educator's account is inactive (status = 0) — check **Users > Manage LP**

### "No available time slots for a date"

The educator has not set their schedule for that day. The educator should go to **Lesson Management** and configure their weekly availability. See [Setting Up Your Schedule](/educators/schedule).

### "Learner sees 'Please purchase a Learner Seat'"

The learner does not have an active seat subscription. This is typically resolved when the learner makes a lesson payment. Check the learner's seat status in **Users > Manage Learners**.
