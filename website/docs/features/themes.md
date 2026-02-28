---
id: themes
title: Themes
sidebar_label: Themes
sidebar_position: 16
description: Dark, light, and system theme support in Ever Teams.
---

# Themes

Ever Teams supports multiple visual themes and adapts to user preferences.

## Available Themes

| Theme      | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| **Light**  | Bright interface with light backgrounds                     |
| **Dark**   | Dark interface, easier on the eyes in low-light             |
| **System** | Automatically follows the operating system theme preference |

## Implementation

Themes are implemented using:

- **CSS custom properties** — Color tokens defined as CSS variables
- **Tailwind CSS `dark:` variant** — Dark mode classes applied conditionally
- **`next-themes`** — Theme state management and persistence

### Theme Switching

Users can change themes from:

- **Settings** → Personal → Theme selector
- Theme toggle in the navigation bar

### Persistence

Theme preference is:

- Stored in `localStorage`
- Applied on page load (prevents flash of unstyled content)
- Synced across tabs in the same browser

## Customization

The theme system uses Tailwind CSS design tokens. Key customization files:

| File                          | Purpose                          |
| ----------------------------- | -------------------------------- |
| `apps/web/tailwind.config.js` | Design tokens, colors, spacing   |
| `apps/web/styles/globals.css` | CSS custom properties for themes |
| `packages/ui/src/`            | Shared component themes          |
