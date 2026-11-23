---
id: whiteboard
title: Whiteboard
sidebar_label: Whiteboard
sidebar_position: 11
description: The whiteboard in Ever Teams, alone in the web app or live with teammates in the Board app.
---

# Whiteboard

Ever Teams has a whiteboard for sketches, diagrams and notes. It works in two ways: a board of your own inside the web app, and a live board shared with teammates in the Board app, when your deployment has one.

## Opening a whiteboard

Press **Collaborate** in the top bar, choose **Whiteboard**, pick the teammates to invite if any, then **Open whiteboard**. The Collaborate button is in the top bar on wide screens.

- With teammates picked, and a Board app set up for the deployment, the **live whiteboard** opens in a new tab. The teammates you picked get an entry in their Inbox to join you.
- Otherwise, the whiteboard opens for you alone, inside the web app (`/board`).

## Your own whiteboard

The whiteboard inside the web app is kept in your browser. It is still there when you come back in the same browser, and it is not shared with anyone or copied to another device.

From its menu you can load a scene from a file, save it to a file, export it, save it as an image, clear the canvas, and change the theme and the canvas background.

The live-share button sends the board to the Board app and opens it there, when the deployment has the Board app and its storage set up.

## The live whiteboard

The Board app is a separate app that runs beside the web app. People sign in to it with their Ever Teams account: someone who is not signed in is sent to the Ever Teams sign-in page and comes back to the board afterwards.

Ever Teams tells people about boards in the Inbox and by notification:

- when someone invites them to a board
- when someone shares a board with them
- when someone mentions them in a board

Each person chooses whether to get these under **Settings > Notifications > Boards**.

## Setting it up on your own server

The whiteboard inside the web app needs nothing. The live whiteboard needs the Board app, and these variables on the web app, read at runtime:

| Variable | What it is |
| -------- | ---------- |
| `NEXT_PUBLIC_BOARD_APP_DOMAIN` | The address of the Board app. It must use `https` (plain `http` is accepted for `localhost` in development only) |
| `NEXT_PUBLIC_BOARD_BACKEND_POST_URL` | Where a board sent with the live-share button is stored |
| `NEXT_PUBLIC_BOARD_FIREBASE_CONFIG` | The storage for the files of such a board: the configuration object Firebase gives for a web app (`apiKey`, `authDomain`, `projectId`, `storageBucket` and the rest), as one line of JSON |

Two more conditions:

- **Same site.** The Board app must be on the same site as the web app (for example `app.example.com` and `board.example.com`), so that the browser sends it the person's session.
- **One trusted address.** The web app answers the Board app only from the exact address in `NEXT_PUBLIC_BOARD_APP_DOMAIN`. A request from any other address is refused.

When the address is missing or not valid, **Open whiteboard** opens the whiteboard inside the web app instead.

## Related

- **[Meet](./meet)**: the other choice of the Collaborate button
- **[Teams](./teams)**: the teammates you can invite
