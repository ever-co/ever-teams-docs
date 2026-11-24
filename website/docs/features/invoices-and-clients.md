---
id: invoices-and-clients
title: Invoices and Clients
sidebar_label: Invoices and Clients
sidebar_position: 5
description: Clients, their payment terms, and invoices built from billable tracked time in Ever Teams.
---

# Invoices and Clients

Ever Teams bills the time your team tracks. A **client** owns projects, the billable time tracked on those projects becomes the lines of an **invoice**, and the client reads, downloads and pays that invoice from a page of its own.

## Clients

Open **Clients** in the sidebar, right after Projects.

A client holds a name, an email address, a phone number, notes and its **payment terms**. The payment terms set the due date an invoice proposes: the workspace default, on receipt, 15, 30 or 60 days, or a custom number of days up to 365.

The list has a search field, **Active** and **Archived** tabs, and sorts by newest or by number of projects. Each row's menu offers **Edit**, **Copy link**, **New invoice**, **Archive** and **Restore**.

Archiving a client keeps its projects, its tracked time and its invoices. The client only leaves the picker that assigns a client to a project.

A client's page shows where its billing stands, its details, its invoices and its projects.

### Linking a project to a client

A project gets its client in the project's own settings, with **Add client**. Time tracked on that project then counts for that client.

## Invoices

Open **Invoices** in the sidebar. The list filters by **Draft**, **Open**, **Overdue**, **Paid** and **Void**.

### Creating an invoice

1. Press **New invoice**, on the Invoices page or from a client.
2. Pick the client and the period to bill.
3. Choose how the time is grouped into lines: **By project**, **By member** or **By task**.
4. Check the details: the invoice number (the next free one is proposed), the issue date, the due date, the currency, a discount and a tax in percent, and a note to the client, printed on the invoice.
5. Rewrite a line's description or remove a line if needed, then save it as a draft or use **Save and send**.

The lines come from the **billable** time tracked on the client's projects in that period, priced at the client's rates. Hours already on another invoice are left out, so the same hour is never billed twice.

:::note
Invoice lines always come from tracked time. There are no free lines for products or expenses in the web app.
:::

### Statuses and what you can do

| Status         | What you can do                                              |
| -------------- | ------------------------------------------------------------ |
| Draft          | Edit, Send, Mark as paid, Void, Delete                       |
| Sent, Viewed   | Edit, Send again, Mark as paid, Void                         |
| Partially paid | Send again, Mark as paid, Void and replace                   |
| Paid           | Send again, Mark as unpaid, Void and replace                 |
| Overpaid       | Send again, Void and replace                                 |
| Void           | Nothing: a void invoice is never reopened                    |

Only a draft can be deleted. Once money was received on an invoice it is no longer edited: **Void and replace** voids it and opens a new invoice for the same time.

**Edit** and **Void and replace** are offered on invoices made from billable time in Ever Teams. An invoice made elsewhere is changed where it was made.

### Sending an invoice

**Send** opens a dialog with the address the invoice goes to, which you can change. The invoice goes by email with its PDF attached, and is then marked **Sent**.

**Download PDF** is on the list, on the invoice's page and on the client's page of the invoice.

### The client's page of an invoice

The email carries a link to a public page where the client reads the invoice and downloads the PDF without an account. When the link was revoked or the invoice voided, the page says so and asks the client to get a new link from the sender.

### Online payment

A workspace can let clients pay from that page, with a **Pay** button showing the amount. An administrator sets it up in **Settings > Integrations**, under **Online invoice payments**: the address of the workspace's payment connector, a switch to offer online payment, and a test mode in which payments are logged and never recorded on invoices. The payment provider's keys stay with the connector.

After a payment, the page shows the invoice as paid as soon as the payment provider confirms it.

### Billing on a schedule

On a client's page, **Billing schedule** makes that client's invoice by itself **every week**, **every two weeks** or **every month**, from the billable time not billed yet. Each run either keeps the invoice as a draft or emails it to the client. A schedule can be paused and resumed, and the page lists its last runs and the date of the next invoice.

## Who can use them

Access follows the permissions of the person's role, set in **Settings > Roles & permissions**.

| To do this                                    | The role needs                                                                 |
| --------------------------------------------- | ------------------------------------------------------------------------------ |
| See Invoices                                  | `INVOICES_VIEW`, and access to client rates (`ORG_EMPLOYEES_EDIT` or `CHANGE_SELECTED_EMPLOYEE`) |
| Send, mark paid or unpaid, void, delete a draft | The above, and `INVOICES_EDIT`                                               |
| Create or edit an invoice, set a billing schedule | The above, and `CHANGE_SELECTED_EMPLOYEE`, so the invoice counts everyone's time |
| See Clients                                   | `ORG_CONTACT_VIEW`                                                             |
| Create a client                               | `ORG_CONTACT_ADD` or `ORG_CONTACT_EDIT`                                        |
| Edit a client                                 | `ORG_CONTACT_EDIT`                                                             |
| Archive or restore a client                   | `ORG_CONTACT_DELETE` or `ORG_CONTACT_EDIT`                                     |

Invoices state what a client is billed per hour, which is why seeing them also asks for access to rates. A person without access does not see **Invoices** in the sidebar.

## Related

- **[Projects](./projects)**: where a project gets its client
- **[Time Tracking](./time-tracking)**: where billable time comes from
- **[Roles and Permissions](./roles-permissions)**: who holds which permission
