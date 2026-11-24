---
id: account-security
title: Account Security
sidebar_label: Account security
sidebar_position: 2
description: Two-factor authentication, recovery codes, the list of your sessions, the sites you signed in from, personal API tokens, and leaving teams or deleting your account in Ever Teams.
---

# Account Security

This page covers what a person controls about their own account in the web app: a second factor at sign-in, where the account is signed in, the sites allowed to use its timer, the tokens scripts use, and leaving teams or deleting the account.

Everything here is under **Settings**, in the **Account** group.

| What | Where |
| --- | --- |
| Two-factor authentication, recovery codes | Settings > Security (`/settings/personal/security`) |
| Sessions | Settings > Profile (`/settings/personal`) |
| Sites you signed in from | Settings > Security (`/settings/personal/security`) |
| API tokens | Settings > API tokens (`/settings/personal/api-tokens`) |
| Leave teams, delete account | Settings > Profile, at the bottom |

:::info Depends on the server
Two-factor authentication and API tokens are features of the API your web app talks to. When the server does not offer one, its page says so ("Not available on this server yet", "API tokens are not offered here") instead of showing controls. An administrator of the server turns them on.
:::

## Two-factor authentication

With two-factor authentication on, a sign-in also asks for a code from an authenticator app on your phone, after your emailed code or your password.

### Turn it on

1. Open **Settings > Security** and press **Turn on**.
2. Add the account to your authenticator app: scan the QR code, or, on the same device, open the link or type the setup key.
3. Enter the 6-digit code the app shows.
4. Save your **recovery codes**. They are shown once.

### Recovery codes

Each recovery code signs you in once if you lose your phone. The page shows how many unused codes are left.

- Copy or download them when they are shown, and keep them somewhere safe: they are not shown again.
- **New recovery codes** replaces the whole set. The previous codes stop working.

### Signing in

After your emailed code or your password, the sign-in asks for the 6-digit code of your authenticator app. A recovery code works in the same field.

Too many wrong codes pause the check for a few minutes.

### Turn it off, or get new codes

Both ask for proof first: a code from your app, or one of your recovery codes.

:::tip When your organization requires it
An organization can ask its members to sign in with a second factor. The Security page then says "Your organization asks you to turn this on".
:::

## Sessions

**Settings > Profile** lists where your account is signed in: the browser or app, its system, when it signed in and when it was last active. The device you are using is marked **This device**.

- **Sign out** on a row ends that one session.
- **Sign out other sessions** ends all of them at once and keeps this device signed in. It asks you to confirm it is you first: with your password, or, for an account without a password, with a code sent to your email.

Every other browser and app signed in to your account then has to sign in again.

Use it when you signed in on a computer you no longer use, or when you see a session you do not recognize.

## Sites you signed in from

A site that embeds the Ever Teams timer can offer a **Sign in with Ever Teams** button. When you accept, that site may start and stop your timer, and it renews its sign-in by itself for a while.

**Settings > Security > Sites you signed in from** lists those sites: the address of each, and the date until which it can renew its sign-in.

- **End** on a row ends the sign-in from that site, after you confirm. The site can no longer renew it, and at its next renewal it shows its sign-in button again.
- A site you never signed in from is not listed. With no site at all, the section says so.

Use it for a site you no longer use, or one you do not recognize. Ending a site does not sign you out of Ever Teams, and it does not touch your sessions above.

The section appears only on a server where embedding is available.

## API tokens

A personal API token lets a script call the API as you. Create one token for each script, so that you can revoke one without touching the others.

### Create a token

1. Open **Settings > API tokens** and press **Create token**.
2. Give it a name that says what it is for, such as "Friday report".
3. Choose when it expires: in 90 days, in 1 year, or never.
4. Copy the token. Its secret is shown this once.

You can hold up to 10 working tokens. Each row shows when the token was created, when it was last used and when it expires.

### Use a token in a script

A script does not send the token with every call. It trades the token for a short-lived access token, then calls the API as usual:

```bash
curl -X POST https://your-api.example.com/api/auth/api-token/exchange \
  -H "Content-Type: application/json" \
  -d '{"token": "YOUR_TOKEN"}'
```

Send the access token it answers in the `Authorization: Bearer` header of your calls, and trade the token again when the access token expires. The page shows the command with your own server's address.

### Revoke a token

**Revoke** stops a token at once: scripts can no longer trade it for access, and access they already hold ends within an hour. A revoked token cannot be restored.

:::warning Treat a token like a password
Anyone who holds a token can act as you through the API. Store it in a secret manager or an environment variable, never in a repository, and revoke it when a script is retired.
:::

## Leave your teams or delete your account

**Settings > Profile** ends with an **Account** section. Each of its actions says what it does before you confirm, and a deletion cannot be undone.

| Action | What it does |
| --- | --- |
| Leave teams | Removes you from the teams you joined as a member, and unassigns your tasks there. Teams you manage keep you, and your account stays. |
| Delete account | Deletes your account and removes you from every team. You can no longer sign in with it. |
| Delete account and data | Deletes your account and your records in this workspace, or the whole workspace when you are its only member. The dialog lists what goes before you confirm. |
| Delete my account by email | Deletes every account with your email, in all workspaces, once you confirm from a link sent to your email. |

The two deletions in the dialog ask you to type your email address to confirm.

### Delete by an emailed link

This is also the way for a person who cannot sign in: the public **Delete your account** page (`/delete-account`) asks for an email address and sends the link. Whether or not an account exists for that address, the page answers the same way.

1. Ask for the link. Nothing is deleted yet, and the link expires after a short time.
2. Open the link. The page lists what confirming will delete, workspace by workspace:
   - In a workspace where you are the only member, the **whole workspace** and all its data.
   - In a workspace with other members, your account and your member records (time logs, screenshots, activity). Tasks, comments and other shared content stay, without your name.
3. Tick the box that says you understand, type the word the page asks for, and confirm.

The page warns you when you are the only admin of a workspace that has other members: make someone else an admin first if they need one.

If someone joined or left a workspace between the summary and your confirmation, nothing is deleted: the page shows the new summary and asks you to confirm again.

Some things are kept after a deletion: a record of the request without your name, emails already delivered, billing records the law requires, and encrypted backups until they expire.

## Related

- [Authentication](./authentication.md)
- [Forgot password](./forgot-password.md)
- [Settings](./settings.md)
