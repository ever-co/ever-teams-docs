---
id: roles-permissions
title: Roles & Permissions
sidebar_label: Roles & permissions
sidebar_position: 13
description: Role-based access control (RBAC) in Ever Teams.
---

# Roles & Permissions

Ever Teams implements a comprehensive Role-Based Access Control (RBAC) system to manage what users can see and do within the platform.

## Built-in Roles

| Role              | Description                                      | Level        |
| ----------------- | ------------------------------------------------ | ------------ |
| **Super Admin**   | Full system access, can manage all organizations | System       |
| **Admin / Owner** | Full organization control                        | Organization |
| **Manager**       | Team management, reporting, approvals            | Team         |
| **Member**        | Standard task and time tracking                  | Team         |
| **Viewer**        | Read-only access                                 | Team         |

## Permission Categories

### Organization Permissions

- Create/edit/delete teams
- Manage billing and subscription
- Configure integrations
- Manage organization settings
- Invite members to the organization

### Team Permissions

- Add/remove team members
- Assign roles within the team
- Create/edit/delete tasks
- Manage projects
- View team reports

### Task Permissions

- Create new tasks
- Edit task details
- Delete tasks
- Assign tasks to members
- Change task status

### Time Tracking Permissions

- Track own time
- View own time logs
- View team time logs
- Edit time entries
- Approve / reject timesheets

### Reporting Permissions

- View personal reports
- View team reports
- Export reports

## Managing Permissions

### Via Settings UI

1. Navigate to **Settings → Roles & Permissions** or `/permissions`
2. Select a role to edit
3. Toggle individual permissions on/off
4. Save changes

### Custom Roles

Create custom roles with specific permission combinations:

1. Go to **Settings → Roles**
2. Click **Create Role**
3. Name the role and set permissions
4. Assign the role to team members

## Related API Routes

| Route                   | Purpose                  |
| ----------------------- | ------------------------ |
| `/api/roles`            | CRUD operations on roles |
| `/api/roles/[id]`       | Specific role management |
| `/api/role-permissions` | Permission assignments   |

## Related Stores

| Store                | Purpose                    |
| -------------------- | -------------------------- |
| `auth/permission.ts` | Current user's permissions |
