---
id: inbox-and-notifications
title: Inbox and Notifications
sidebar_label: Inbox and notifications
sidebar_position: 14
description: The Inbox, notification settings, email and browser notifications in Ever Teams.
---

# Inbox and Notifications

Ever Teams tells a person what needs them: a task assigned to them, a mention, a comment, an invitation, a meeting. The bell in the app lists these notifications. A deployment can also turn on the **Inbox**, a full page to sort, snooze and close them.

## Turning the Inbox on

The Inbox is off by default. An operator turns it on for a deployment with one environment variable, read at runtime, so it is set on the running container:

```bash
NEXT_PUBLIC_INBOX_ENABLED=true
```

While it is off, the sidebar entry, the page and the browser notification settings are hidden, and the bell stays the only list.

## The Inbox

Open **Inbox** in the sidebar (`/inbox`), where a badge counts what is unread, or follow **Open the inbox** from the bell.

### Finding an entry

- **Tabs**: All, Unread, Mentions and Assigned. Under **More**: Snoozed, Done and Archived.
- **Source**: Tasks, Chat, Docs, Email, Integrations, People or Other.
- **Search**, and entries grouped by Today, Yesterday and Earlier.

The address keeps the tab and the source, so a filtered Inbox can be bookmarked.

### Acting on an entry

| Action | What it does |
| ------ | ------------ |
| Mark as read or unread | One entry, or **Mark all as read** |
| Done | Closes an entry you dealt with; it can be reopened |
| Archive | Puts an entry away; it can be restored |
| Snooze | Brings it back **Later today**, **Tomorrow** at 9:00, or **next Monday** at 9:00 |

Select several entries to act on all of them at once. Each action offers **Undo**. Some entries ask a question or an approval, and you answer them from the Inbox.

Keyboard: `J` and `K` move, `X` selects, `E` archives, `H` snoozes, `D` marks done, `U` marks read, `Enter` opens, `Shift` + `Esc` marks all as read.

:::note
On a server without the inbox extension, only read, unread and archive work, and the page says so.
:::

## What you are notified about

Open **Settings > Notifications** (`/settings/personal/notifications`).

| Section | What you choose |
| ------- | --------------- |
| Tasks | Assignments, mentions, comments, and updates of tasks |
| Team and account | Invitations, messages, payments |
| Time tracking | The reminder of a timer that has been running for long |
| Due dates, Boards, Meetings | Reminders and mentions of each |
| Email | For every kind: at once, in the daily digest, or never, with a choice of your own per kind |
| Quiet hours | Hours without notifications, and the hour of the daily digest |

When your team sets defaults for its members, the page says so.

## Browser notifications

With the Inbox on, and on a server that offers them, **Settings > Notifications** has a **Browser notifications** section.

1. Turn the switch on. The browser asks for permission to show notifications.
2. Accept. This browser is added to your devices.

The section lists your devices, each with **Remove**, and a switch per kind of notification. Clicking a notification opens its entry in the Inbox. If the browser blocks notifications or cannot show them, the section says so.

Signing out removes that browser from your devices, so a shared computer stops receiving your notifications.

## Related

- **[Settings](./settings)**: the other pages of your account
- **[Task Management](./task-management)**: where assignments, mentions and comments come from
