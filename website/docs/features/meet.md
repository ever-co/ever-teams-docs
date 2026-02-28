---
id: meet
title: Video Conferencing (Meet)
sidebar_label: Meet
sidebar_position: 9
description: Built-in video conferencing with Jitsi and LiveKit in Ever Teams.
---

# Video Conferencing (Meet)

Ever Teams includes built-in video conferencing for team meetings, accessible via `/meet`.

## Providers

Ever Teams supports two video conferencing backends:

| Provider                          | Description                                    | Configuration    |
| --------------------------------- | ---------------------------------------------- | ---------------- |
| **[Jitsi](https://jitsi.org)**    | Open-source, self-hostable video conferencing  | Default provider |
| **[LiveKit](https://livekit.io)** | WebRTC-based, scalable real-time communication | API key required |

### Selecting a Provider

Set the provider in your environment:

```bash
# Use Jitsi (default)
NEXT_PUBLIC_MEET_TYPE=jitsi
NEXT_PUBLIC_MEET_DOMAIN=meet.ever.team

# Use LiveKit
NEXT_PUBLIC_MEET_TYPE=livekit
LIVEKIT_API_KEY=your-api-key
LIVEKIT_API_SECRET=your-api-secret
NEXT_PUBLIC_LIVEKIT_URL=wss://your-livekit-server.com
```

## Features

### Meeting Rooms

- Create instant meetings
- Schedule meetings for later
- Join meetings via link
- Team-specific meeting rooms

### In-Meeting Features

- **Video** — Toggle camera on/off
- **Audio** — Toggle microphone on/off
- **Screen sharing** — Share your screen
- **Chat** — In-meeting text chat
- **Participants** — View and manage participants
- **Reactions** — Send emoji reactions

### JWT Authentication

Meetings are secured with JWT tokens:

1. User requests a meeting room
2. Server generates a JWT token with user identity
3. Token is used to authenticate with the meeting provider
4. Meeting room is created/joined with the token

## Related Configuration

| Variable                  | Description                          |
| ------------------------- | ------------------------------------ |
| `NEXT_PUBLIC_MEET_TYPE`   | Provider type (`jitsi` or `livekit`) |
| `NEXT_PUBLIC_MEET_DOMAIN` | Jitsi server domain                  |
| `MEET_JWT_APP_ID`         | JWT application ID                   |
| `MEET_JWT_APP_SECRET`     | JWT secret key                       |
| `LIVEKIT_API_KEY`         | LiveKit API key                      |
| `LIVEKIT_API_SECRET`      | LiveKit API secret                   |
| `NEXT_PUBLIC_LIVEKIT_URL` | LiveKit WebSocket URL                |
