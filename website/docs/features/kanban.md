---
id: kanban
title: Kanban Board
sidebar_label: Kanban board
sidebar_position: 6
description: Visual kanban board for agile task management in Ever Teams.
---

# Kanban Board

The Kanban Board provides a visual, drag-and-drop interface for managing tasks across customizable workflow stages.

## Overview

The board at `/kanban` organizes tasks into columns based on their **status**. Each column represents a workflow stage (e.g., Open, In Progress, In Review, Completed).

## Features

### Columns

- **Auto-generated** from your task status configuration
- **Customizable** — Add, rename, reorder, or remove columns in Settings → Task Statuses
- **Color-coded** — Each column has a distinctive color

### Task Cards

Each card on the board shows:

- Task title
- Assignees (avatars)
- Priority indicator
- Size/estimate label
- Tags/labels
- Timer button (start tracking directly from the card)

### Drag & Drop

- **Move tasks between columns** — Drag a card to a new column to change its status
- **Reorder within column** — Drag cards up/down to change priority order
- **Smooth animations** — Cards animate into their new positions

### Swimlanes

Tasks can be grouped into swimlanes by:

- **Assignee** — One row per team member
- **Priority** — Grouped by priority level
- **Project** — Grouped by project
- **None** — Flat view (default)

## Filtering

The kanban board shares the same filtering capabilities as the list view:

- Filter by assignee
- Filter by priority
- Filter by tags
- Filter by project
- Search by title

## Board vs. List vs. Calendar

| View         | Best For                                  |
| ------------ | ----------------------------------------- |
| **Kanban**   | Visual workflow management, agile sprints |
| **List**     | Detailed data viewing, bulk operations    |
| **Calendar** | Deadline-driven planning                  |

## Related Hooks

| Hook             | Purpose                   |
| ---------------- | ------------------------- |
| `useBoard`       | Board data and operations |
| `useTaskStatus`  | Column/status management  |
| `useTaskFilters` | Board filtering           |
