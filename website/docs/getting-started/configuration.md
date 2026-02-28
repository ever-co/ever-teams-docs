---
id: configuration
title: Configuration
sidebar_label: Configuration
sidebar_position: 2
description: Environment variables and configuration options for Ever Teams web application.
---

# Configuration

Ever Teams uses environment variables for all runtime configuration. The web application reads these from a `.env` file in the `apps/web/` directory.

## Getting Started

Copy the sample environment file:

```bash
cp apps/web/.env.sample apps/web/.env
```

Edit the `.env` file with your preferred settings.

## Essential Configuration

### API Connection

The most important setting is the connection to the Ever Gauzy API backend:

| Variable                           | Default                     | Description                   |
| ---------------------------------- | --------------------------- | ----------------------------- |
| `GAUZY_API_SERVER_URL`             | `https://api.ever.team/api` | Backend API URL (server-side) |
| `NEXT_PUBLIC_GAUZY_API_SERVER_URL` | `https://api.ever.team`     | Backend API URL (client-side) |

:::info
By default, Ever Teams connects to the production API at `https://api.ever.team`. For self-hosted setups, point these to your own Ever Gauzy API server (e.g., `http://localhost:3000`).
:::

### Authentication

| Variable      | Default                | Description                                |
| ------------- | ---------------------- | ------------------------------------------ |
| `AUTH_SECRET` | `ever-app-auth-secret` | Secret key for NextAuth.js session signing |

:::danger
**Always change `AUTH_SECRET`** in production! Use a strong random string (at least 32 characters).
:::

## OAuth Configuration

Ever Teams supports social login with multiple providers:

### Google OAuth

| Variable                      | Description                     |
| ----------------------------- | ------------------------------- |
| `NEXT_PUBLIC_GOOGLE_APP_NAME` | Display name for Google sign-in |
| `GOOGLE_CLIENT_ID`            | Google OAuth Client ID          |
| `GOOGLE_CLIENT_SECRET`        | Google OAuth Client Secret      |

### GitHub OAuth

| Variable                      | Description                     |
| ----------------------------- | ------------------------------- |
| `NEXT_PUBLIC_GITHUB_APP_NAME` | Display name for GitHub sign-in |
| `GITHUB_CLIENT_ID`            | GitHub OAuth Client ID          |
| `GITHUB_CLIENT_SECRET`        | GitHub OAuth Client Secret      |

### Facebook OAuth

| Variable                        | Description                       |
| ------------------------------- | --------------------------------- |
| `NEXT_PUBLIC_FACEBOOK_APP_NAME` | Display name for Facebook sign-in |
| `FACEBOOK_CLIENT_ID`            | Facebook OAuth Client ID          |
| `FACEBOOK_CLIENT_SECRET`        | Facebook OAuth Client Secret      |

### Twitter OAuth

| Variable                       | Description                      |
| ------------------------------ | -------------------------------- |
| `NEXT_PUBLIC_TWITTER_APP_NAME` | Display name for Twitter sign-in |
| `TWITTER_CLIENT_ID`            | Twitter OAuth Client ID          |
| `TWITTER_CLIENT_SECRET`        | Twitter OAuth Client Secret      |

## CAPTCHA Configuration

Ever Teams supports CAPTCHA on authentication pages:

| Variable                       | Description                             |
| ------------------------------ | --------------------------------------- |
| `NEXT_PUBLIC_CAPTCHA_TYPE`     | CAPTCHA provider (`recaptcha`)          |
| `NEXT_PUBLIC_CAPTCHA_SITE_KEY` | Site key from your CAPTCHA provider     |
| `CAPTCHA_SECRET_KEY`           | Secret key for server-side verification |

## Email / SMTP Configuration

For features like invitations and email verification:

| Variable                    | Description                       |
| --------------------------- | --------------------------------- |
| `SMTP_FROM_ADDRESS`         | Sender email address              |
| `SMTP_HOST`                 | SMTP server hostname              |
| `SMTP_PORT`                 | SMTP server port (default: `587`) |
| `SMTP_SECURE`               | Use TLS (`true` / `false`)        |
| `SMTP_USERNAME`             | SMTP authentication username      |
| `SMTP_PASSWORD`             | SMTP authentication password      |
| `INVITE_CALLBACK_URL`       | URL for team invitation links     |
| `VERIFY_EMAIL_CALLBACK_URL` | URL for email verification links  |

## Video Conferencing (Meet)

| Variable                  | Default          | Description                             |
| ------------------------- | ---------------- | --------------------------------------- |
| `NEXT_PUBLIC_MEET_TYPE`   | `jitsi`          | Meeting provider (`jitsi` or `livekit`) |
| `NEXT_PUBLIC_MEET_DOMAIN` | `meet.ever.team` | Jitsi server domain                     |
| `LIVEKIT_API_KEY`         | —                | LiveKit API key                         |
| `LIVEKIT_API_SECRET`      | —                | LiveKit API secret                      |
| `NEXT_PUBLIC_LIVEKIT_URL` | —                | LiveKit server URL                      |
| `MEET_JWT_APP_ID`         | `ever_teams`     | JWT App ID for meeting authentication   |
| `MEET_JWT_APP_SECRET`     | —                | JWT secret for meeting tokens           |

## Board & Collaboration

| Variable                             | Description                                            |
| ------------------------------------ | ------------------------------------------------------ |
| `NEXT_PUBLIC_BOARD_APP_DOMAIN`       | URL for the board application                          |
| `NEXT_PUBLIC_BOARD_BACKEND_POST_URL` | Board API endpoint                                     |
| `NEXT_PUBLIC_BOARD_FIREBASE_CONFIG`  | Firebase configuration (JSON) for real-time board sync |

## Monitoring & Analytics

### Sentry (Error Tracking)

| Variable                                | Description                               |
| --------------------------------------- | ----------------------------------------- |
| `SENTRY_ORG`                            | Sentry organization slug                  |
| `SENTRY_PROJECT`                        | Sentry project slug                       |
| `SENTRY_AUTH_TOKEN`                     | Sentry authentication token               |
| `SENTRY_DSN` / `NEXT_PUBLIC_SENTRY_DSN` | Sentry Data Source Name                   |
| `NEXT_PUBLIC_SENTRY_DEBUG`              | Enable Sentry debug mode (`true`/`false`) |

### PostHog (Product Analytics)

| Variable                   | Description             |
| -------------------------- | ----------------------- |
| `NEXT_PUBLIC_POSTHOG_KEY`  | PostHog project API key |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog instance URL    |

### Jitsu (Event Tracking)

| Variable                              | Description                      |
| ------------------------------------- | -------------------------------- |
| `NEXT_PUBLIC_JITSU_BROWSER_URL`       | Jitsu tracking URL (client-side) |
| `NEXT_PUBLIC_JITSU_BROWSER_WRITE_KEY` | Jitsu write key (client-side)    |
| `JITSU_SERVER_URL`                    | Jitsu URL (server-side)          |
| `JITSU_SERVER_WRITE_KEY`              | Jitsu write key (server-side)    |

### Google Analytics

| Variable                        | Description                       |
| ------------------------------- | --------------------------------- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID |

## Branding & White-Labeling

Ever Teams supports full white-label customization:

| Variable              | Default                                  | Description                       |
| --------------------- | ---------------------------------------- | --------------------------------- |
| `APP_NAME`            | `Ever Teams`                             | Application display name          |
| `APP_SLOGAN_TEXT`     | `Real-Time Clarity, Real-Time Reality™.` | Tagline text                      |
| `APP_LINK`            | `https://ever.team`                      | Main website URL                  |
| `APP_SIGNATURE`       | `Ever Teams`                             | Email signature name              |
| `APP_LOGO_URL`        | Ever Teams logo                          | Logo URL for emails               |
| `COMPANY_NAME`        | `Ever Co. LTD`                           | Company name                      |
| `COMPANY_LINK`        | `https://ever.co`                        | Company website                   |
| `TERMS_LINK`          | `https://ever.team/tos`                  | Terms of Service URL              |
| `PRIVACY_POLICY_LINK` | `https://ever.team/privacy`              | Privacy Policy URL                |
| `MAIN_PICTURE`        | —                                        | Auth page background (light mode) |
| `MAIN_PICTURE_DARK`   | —                                        | Auth page background (dark mode)  |

### SEO Metadata

| Variable                       | Description                     |
| ------------------------------ | ------------------------------- |
| `NEXT_PUBLIC_SITE_NAME`        | Site name for meta tags         |
| `NEXT_PUBLIC_SITE_TITLE`       | Page title                      |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | Meta description                |
| `NEXT_PUBLIC_SITE_KEYWORDS`    | Meta keywords (comma-separated) |
| `NEXT_PUBLIC_WEB_APP_URL`      | Canonical site URL              |
| `NEXT_PUBLIC_TWITTER_USERNAME` | Twitter handle for cards        |

## Logging

| Variable                  | Default | Description               |
| ------------------------- | ------- | ------------------------- |
| `ACTIVE_LOCAL_LOG_SYSTEM` | `true`  | Enable local file logging |
| `LOG_FOLDER_MAX_SIZE`     | `10`    | Max log folder size (MB)  |

## Application Flags

| Variable                                     | Default | Description                           |
| -------------------------------------------- | ------- | ------------------------------------- |
| `NEXT_PUBLIC_DEMO`                           | —       | Enable demo mode restrictions         |
| `IS_DESKTOP_APP`                             | —       | Flag for desktop app builds           |
| `NEXT_PUBLIC_DISABLE_AUTO_REFRESH`           | `false` | Disable automatic data refresh        |
| `ANALYZE`                                    | `false` | Enable webpack bundle analyzer        |
| `RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED` | `false` | Enable Recoil duplicate atom warnings |

## Images Configuration

| Variable                   | Description                                                                    |
| -------------------------- | ------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_IMAGES_HOSTS` | Comma-separated list of allowed image hostnames for Next.js Image Optimization |

## Cookies

| Variable                     | Default     | Description                  |
| ---------------------------- | ----------- | ---------------------------- |
| `NEXT_PUBLIC_COOKIE_DOMAINS` | `ever.team` | Domain(s) for cookie sharing |

## Customer Support

| Variable                       | Description                |
| ------------------------------ | -------------------------- |
| `NEXT_PUBLIC_CHATWOOT_API_KEY` | Chatwoot live chat API key |

## Email Marketing

| Variable                    | Description                        |
| --------------------------- | ---------------------------------- |
| `MAILCHIMP_API_KEY`         | Mailchimp API key                  |
| `MAILCHIMP_LIST_ID`         | Mailchimp list/audience ID         |
| `POSTMARK_SERVER_API_TOKEN` | Postmark transactional email token |
