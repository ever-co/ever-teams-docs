---
id: teams
title: Teams & Organizations
sidebar_label: Teams & organizations
sidebar_position: 3
description: Managing organizations, teams, and team members in Ever Teams.
---

# Teams & Organizations

Ever Teams supports a hierarchical organizational structure: **Organizations** contain **Teams**, and teams contain **Members**.

## Organizations

An organization is the top-level entity that owns:

- Teams
- Projects
- Tasks
- Settings
- Integrations
- Billing (if applicable)

### Multi-Organization Support

Users can belong to **multiple organizations** and switch between them using the **workspace selector**. Each organization has its own:

- API tenant context
- Team structure
- Projects and tasks
- Settings and integrations

### Creating Organizations

Organizations are typically created during the initial registration flow:

1. Sign up or log in to Ever Teams
2. Complete the onboarding wizard
3. Create your first organization
4. Invite team members

## Teams

Teams are the primary working unit within an organization.

### Team Features

| Feature                 | Description                         |
| ----------------------- | ----------------------------------- |
| **Member management**   | Add/remove members, set roles       |
| **Task assignment**     | Assign tasks to team members        |
| **Time tracking**       | Track time per team member          |
| **Activity monitoring** | View team activity in real-time     |
| **Team settings**       | Configure team-specific preferences |

### Creating Teams

1. Navigate to **Settings → Teams**
2. Click **Create Team**
3. Enter team name and description
4. Add team members
5. Configure team settings

### Team Views

The main team page shows:

- **Team members list** — Each member with their current task, timer status, and activity
- **Today's time** — Total tracked time for each member today
- **Current task** — The task each member is currently working on
- **Activity indicator** — Real-time activity level

## Members & Roles

### Member Types

| Role        | Permissions                                  |
| ----------- | -------------------------------------------- |
| **Owner**   | Full control over organization and all teams |
| **Manager** | Manage team members, tasks, and settings     |
| **Member**  | Work on tasks, track time                    |
| **Viewer**  | Read-only access to tasks and reports        |

### Inviting Members

Invite new members via email:

1. Navigate to **Settings → Members** or use the invite button
2. Enter email address(es)
3. Select the role
4. Choose the team(s) to add them to
5. Send invitation

The invitee receives an email with a link to:

- Accept the invitation
- Create an account (if new)
- Join the team

### Managing Members

- **Change role** — Promote/demote members
- **Remove from team** — Remove a member from a specific team
- **Remove from organization** — Remove a member entirely
- **View activity** — See a member's tracked time and activity

## Workspace Switching

For users in multiple organizations/workspaces:

1. Click the workspace selector in the sidebar
2. View all available workspaces
3. Click to switch to a different workspace
4. The entire UI context updates to the selected workspace

## Related Hooks

| Hook                   | Purpose                        |
| ---------------------- | ------------------------------ |
| `useOrganizationTeams` | Fetch and manage teams         |
| `useTeamTasks`         | Get tasks for the current team |
| `useCollaborative`     | Collaborative mode features    |
| `useCurrentOrg`        | Current organization context   |
| `useAcceptInvite`      | Handle invitation acceptance   |
| `useWorkspaces`        | List user workspaces           |
| `useWorkspaceSwitcher` | Switch between workspaces      |

## Related Stores

| Store                        | Purpose                       |
| ---------------------------- | ----------------------------- |
| `teams/all-teams.ts`         | All teams in the organization |
| `teams/organization-team.ts` | Current active team           |
| `teams/collaborative.ts`     | Collaborative mode state      |
| `auth/workspaces.ts`         | User's workspace list         |
