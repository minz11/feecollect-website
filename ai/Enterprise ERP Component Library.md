# Enterprise ERP Component Library
Version: 1.0

This document defines every reusable UI component used throughout the application.

No new component should be created without checking this document first.

Consistency has higher priority than creativity.

---

# Component Philosophy

Components are reusable building blocks.

Every component must:

- Solve one problem
- Have one responsibility
- Be reusable
- Be composable
- Be accessible
- Be responsive

Never create one-off visual components.

---

# Button

Purpose

Perform actions.

Variants

Primary

- Main page action
- One per section when possible

Secondary

- Alternative action

Tertiary

- Low emphasis action

Danger

- Destructive actions

Icon Button

- Toolbar actions only

Rules

Never use more than two primary buttons inside one visual section.

Never create gradient buttons.

Never animate buttons continuously.

Loading buttons must preserve width.

---

# Card

Purpose

Group related information.

Variants

Information Card

Feature Card

Statistic Card

Preview Card

Configuration Card

Rules

Cards are containers.

Cards are not decoration.

Maximum one visual hierarchy inside a card.

Avoid nested cards.

Avoid oversized shadows.

Avoid gradients.

Avoid decorative icon backgrounds.

---

# Table

Purpose

Display structured enterprise data.

Every table should support when applicable

Sorting

Filtering

Search

Pagination

Bulk Selection

Column Visibility

Export

Sticky Header

Density Toggle

Rules

Tables are preferred over cards when viewing large datasets.

Do not replace tables with grids for enterprise workflows.

---

# Form

Purpose

Capture information.

Rules

Always use labels.

Never use placeholders as labels.

Group related fields.

Use section headers.

Support keyboard navigation.

Inline validation.

Required fields clearly indicated.

Long forms should be multi-step.

---

# Input

Supported Types

Text

Email

Password

Phone

Number

Currency

Date

Time

Date Range

Textarea

Search

Rules

Consistent height.

Clear validation.

Visible labels.

Prefix and suffix only when meaningful.

---

# Select

Purpose

Choose one option.

Rules

Searchable after 8 options.

Virtualize large datasets.

Support keyboard navigation.

Never replace select with radio if options exceed five.

---

# Multi Select

Purpose

Choose multiple values.

Rules

Display selected values as chips.

Provide Clear All.

Provide Search.

---

# Checkbox

Purpose

Multiple independent selections.

Never use for mutually exclusive choices.

---

# Radio

Purpose

Single choice from a small list.

Maximum 5 visible options.

---

# Toggle Switch

Purpose

Instant system state changes.

Never use for actions requiring confirmation.

---

# Tabs

Purpose

Switch between related content.

Maximum 7 visible tabs.

Scrollable if required.

Never hide navigation inside tabs.

---

# Accordion

Purpose

Reduce vertical space.

Use only for secondary information.

Never hide primary workflows.

---

# Modal

Purpose

Interrupt user flow.

Use sparingly.

Only for

Confirmation

Quick Edit

Preview

Simple Forms

Avoid complex workflows.

---

# Drawer

Purpose

Contextual editing.

Preferred over modal for large forms.

---

# Sidebar

Purpose

Primary application navigation.

Must support

Collapse

Active State

Nested Items

Permission-based visibility

Never overload with decorative elements.

---

# Breadcrumb

Purpose

Communicate hierarchy.

Required on all application pages.

Never truncate hierarchy unnecessarily.

---

# Badge

Purpose

Display status.

Allowed Types

Success

Warning

Danger

Info

Neutral

Avoid decorative badges.

---

# Chip

Purpose

Represent selected values.

Used for

Tags

Filters

Categories

Selections

---

# Alert

Purpose

Communicate important information.

Types

Success

Warning

Error

Info

Must always explain

Problem

Impact

Recovery

---

# Toast

Purpose

Temporary confirmation.

Duration

3–5 seconds.

Never use for critical information.

---

# Empty State

Must include

Title

Description

Primary Action

Optional Illustration

Never use jokes.

Never blame users.

---

# Skeleton

Preferred loading state.

Preserve layout.

Avoid spinner-only loading.

---

# Progress Indicator

Types

Linear

Circular

Step Progress

Timeline

Use the simplest option that communicates progress.

---

# Timeline

Purpose

Sequential processes.

Examples

Admissions

Approvals

Implementation

Audit Logs

Avoid decorative timelines.

---

# KPI Card

Purpose

Quick metrics.

Only use when metrics influence decision making.

Never create fake KPIs for marketing.

Every KPI must answer

"What action does this metric enable?"

---

# Dashboard Widget

Should contain

Title

Value

Supporting Context

Action if applicable

Avoid decorative charts.

---

# Chart

Use only when visual analysis is better than tables.

Preferred

Bar

Line

Area

Pie only when categories are limited.

Avoid

3D Charts

Gradient Charts

Decorative Charts

---

# Search

Must support

Instant Feedback

Clear Button

Keyboard Focus

Debounce

---

# Filter Bar

Reusable across modules.

Contains

Search

Filters

Sort

Reset

Export

Keep consistent across every screen.

---

# Page Header

Contains

Title

Breadcrumb

Primary Action

Secondary Actions

Optional Description

Avoid hero banners inside application screens.

---

# Section Header

Contains

Title

Description

Optional Action

Consistent spacing throughout the product.

---

# Data List

Alternative to tables on mobile.

Supports

Actions

Status

Metadata

Selection

---

# File Upload

Supports

Drag & Drop

Browse

Progress

Preview

Retry

Validation

---

# Avatar

Use only when representing real people.

Never use avatars decoratively.

---

# Notification

Purpose

Communicate system events.

Must include

Severity

Message

Timestamp if persistent.

---

# AI Rules

Before creating a component

Search the existing codebase.

If one exists

Reuse it.

If a similar one exists

Extend it.

Create a new component only when

No existing component satisfies the requirement.

Never create duplicate versions of

Buttons

Cards

Tables

Inputs

Dialogs

Badges

Tabs

Navigation

Forms

Every reusable component belongs inside the shared component library.

No feature module should own generic UI components.

Every component should be independently testable.

Every component should accept design tokens rather than hardcoded styles.

Avoid prop explosion.

Prefer composition over configuration.

A component should do one thing exceptionally well.