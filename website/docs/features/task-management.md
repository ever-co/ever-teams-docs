---
id: task-management
title: Task Management
sidebar_label: Task management
sidebar_position: 2
description: Task creation, assignment, statuses, priorities, and management in Ever Teams.
---

# Task Management

Task management is at the heart of Ever Teams. Create, assign, organize, and track tasks across your teams and projects.

## Creating Tasks

Tasks can be created from multiple places:

- **Team view** — Quick-create input at the top of the team task list
- **Kanban board** — Add card in any status column
- **Task detail page** — Full creation form with all fields
- **Daily plan** — Create tasks as part of daily planning

### Task Fields

| Field              | Description                                     | Required             |
| ------------------ | ----------------------------------------------- | -------------------- |
| **Title**          | Task name / summary                             | ✅                   |
| **Description**    | Detailed task description (supports rich text)  | ❌                   |
| **Status**         | Current workflow status                         | ✅ (default: "Open") |
| **Priority**       | Task priority level                             | ❌                   |
| **Size**           | Task size / estimation                          | ❌                   |
| **Issue Type**     | Type categorization (Bug, Feature, Story, etc.) | ❌                   |
| **Assignees**      | Team members assigned to the task               | ❌                   |
| **Project**        | Parent project                                  | ❌                   |
| **Tags / Labels**  | Categorization labels                           | ❌                   |
| **Due Date**       | Task deadline                                   | ❌                   |
| **Version**        | Release version                                 | ❌                   |
| **Related Issues** | Linked tasks (parent, child, blocked by, etc.)  | ❌                   |

## Task Statuses

Tasks follow a customizable status workflow. Default statuses include:

| Status           | Category    | Color  |
| ---------------- | ----------- | ------ |
| Open             | To Do       | Blue   |
| In Progress      | In Progress | Yellow |
| Ready for Review | In Progress | Orange |
| In Review        | In Progress | Purple |
| Blocked          | Blocked     | Red    |
| Completed        | Done        | Green  |
| Closed           | Done        | Gray   |

### Custom Statuses

Organizations can create custom statuses via **Settings → Task Statuses**. Each status has:

- Name
- Color
- Category (To Do, In Progress, Done)
- Icon

## Task Priorities

| Priority | Color  | Description                         |
| -------- | ------ | ----------------------------------- |
| Urgent   | Red    | Critical, needs immediate attention |
| High     | Orange | Important, should be done soon      |
| Medium   | Yellow | Normal priority                     |
| Low      | Blue   | Nice to have, can wait              |

## Task Sizes

Estimation sizing for tasks:

| Size    | Description                          |
| ------- | ------------------------------------ |
| X-Large | Very large task (multiple days/week) |
| Large   | Large task (full day)                |
| Medium  | Medium task (half day)               |
| Small   | Small task (hours)                   |
| Tiny    | Very small task (minutes)            |

## Task Views

### List View (Default)

Tasks displayed in a tabular list with columns for:

- Status indicator
- Task title
- Assignees
- Priority
- Size/estimate
- Timer (track time directly from list)
- Due date
- Tags

### Kanban Board

Visual board with columns for each status. Drag-and-drop tasks between columns to change status.
See [Kanban Board](./kanban) for details.

### Calendar View

Tasks plotted on a calendar based on due dates.
See [Calendar View](./calendar) for details.

## Task Detail View

Click on any task to open the detailed view (`/task/:id`):

- Full task description with rich text editor
- Comment thread
- Activity history
- Time logs associated with the task
- Related tasks / issues
- Assignee management
- Status, priority, size controls

## Task Filtering

The task list supports powerful filtering:

| Filter          | Options                     |
| --------------- | --------------------------- |
| **Status**      | Any combination of statuses |
| **Priority**    | Filter by priority level    |
| **Size**        | Filter by estimation size   |
| **Assignee**    | Filter by team member       |
| **Label / Tag** | Filter by labels            |
| **Issue Type**  | Filter by issue type        |

## Task Assignment

Tasks can be assigned to one or more team members:

- **Direct assignment** — Select assignees from the team member dropdown
- **Self-assignment** — Team members can assign tasks to themselves
- **Re-assignment** — Change assignees at any time

## Issue Types

Categorize tasks by type:

| Type        | Icon | Use Case           |
| ----------- | ---- | ------------------ |
| Bug         | 🐛   | Software defects   |
| Feature     | ✨   | New functionality  |
| Story       | 📖   | User stories       |
| Task        | ✅   | General work items |
| Epic        | 🏔️   | Large initiatives  |
| Improvement | ⬆️   | Enhancements       |

Custom issue types can be configured in Settings.

## Related Hooks

| Hook                | Purpose                   |
| ------------------- | ------------------------- |
| `useTaskInput`      | Task creation and editing |
| `useTaskStatus`     | Status management         |
| `useTaskFilters`    | Task list filtering       |
| `useTaskStatistics` | Task count statistics     |
| `useTeamTasks`      | Team-scoped task listing  |
| `useTaskLabels`     | Tag/label management      |
| `useTaskPriorities` | Priority management       |
| `useTaskSizes`      | Size management           |
| `useIssueTypes`     | Issue type management     |

## Related Stores

| Store                              | Purpose                       |
| ---------------------------------- | ----------------------------- |
| `tasks/task-filter.ts`             | Current filter state          |
| `tasks/task-optimistic-updates.ts` | Pending optimistic updates    |
| `tasks/task-timesheet.ts`          | Task ↔ timesheet associations |
| `teams/team-tasks.ts`              | Team's task collection        |
