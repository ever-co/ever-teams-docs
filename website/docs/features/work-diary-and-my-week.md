---
id: work-diary-and-my-week
title: Work Diary and My Week
sidebar_label: Work diary and My week
sidebar_position: 13
description: Your own day and week in Ever Teams, with tracked time, tasks, screenshots, apps, and time against your weekly limit.
---

# Work Diary and My Week

Two pages show a person their own tracked time: the **Work diary**, one day at a time, and **My week**, the week or the month against their weekly limit. Both are in the sidebar under **My work**, and both show only the signed-in person's time. Managers review their team's time in **Reports**.

## Work diary

Open **My work > Work diary** (`/work-diary`).

### A day

The day view shows, for the day you pick:

- **The day's figures**: what you tracked that day
- **Tasks**: the tasks you worked on, with your breaks
- **Plan**: what you planned for the day against what you did
- **Apps & sites**: where the tracked time went
- **Screenshots**, hour by hour

Click a screenshot to open its ten minutes: the screenshots of that slot, the time tracked in it, the activity and the apps. A day made only of time added by hand or tracked in the browser has no screenshots, and the page says so.

Each task row has two shortcuts:

- **Continue** starts the timer on that task again
- **Duplicate** copies that time

### Moving between days

The toolbar has a strip of the week's days, a **Today** button and a date picker that goes back as far as you need. The address keeps the day (`?date=2026-11-23`), so a diary day can be bookmarked.

### A week

Switch the toolbar from **Day** to **Week** to see your week as a sheet, like the team's timesheets but for you alone.

| In the week sheet | You need |
| ----------------- | -------- |
| Type time into a cell | The permission to add time by hand (`ALLOW_MANUAL_TIME`), and an organization that allows manual time |
| Delete an entry | The permission to delete time (`ALLOW_DELETE_TIME`), an organization that allows it, and a sheet you can type time into |

An approved day and a running timer cannot be changed here. Without the permission to add time, the sheet is read-only and says why: nothing is typed or deleted in it.

People with an organization role, and team managers, also get **Open in Timesheets**, which opens the same days in the team's timesheets.

## My week

Open **My work > My week** (`/my-week`).

Pick **This week**, **Last week** or **This month**. The page shows:

- **A summary against your weekly limit**: today's time, the billable amount, and how much time is left before the limit, or how far over it you are
- **One bar per day**, with a dashed line at a fifth of the weekly limit, the daily share of a five-day week
- **Time by project**
- **Recent entries**: from an entry you can start the timer on its task again
- **Goals**, on This week only, where goals are available

A period without any tracked time links to the timer.

My week is a page to read: time is added and corrected in the Work diary or in the timesheets.

## Related

- **[Time Tracking](./time-tracking)**: the timer that fills these pages
- **[Timesheets](./timesheets)**: the team's time, for managers
- **[Reports](./reports)**: time and activity across the team
