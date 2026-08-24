# Enterprise ERP Design System
Version: 1.0

This document defines the visual language and implementation standards for the Enterprise ERP Platform.

All UI implementations must follow these rules unless explicitly overridden.

---

# Design Goals

The design system should produce interfaces that are:

- Professional
- Calm
- Fast
- Accessible
- Predictable
- Highly Scannable
- Consistent
- Maintainable

---

# Grid System

Desktop

- 12-column grid
- Max Width: 1440px
- Content Width: 1280px
- Gutters: 24px

Tablet

- 8-column grid

Mobile

- 4-column grid

Never manually offset components.

Always align to the grid.

---

# Spacing Scale

Use ONLY the following spacing values.

4
8
12
16
20
24
32
40
48
56
64
80
96
120

Never use arbitrary spacing values.

Spacing should create rhythm.

---

# Border Radius

xs = 4px

sm = 6px

md = 8px

lg = 12px

xl = 16px

Rules

Buttons

8px

Inputs

8px

Cards

12px

Dialogs

12px

Never exceed 16px.

Avoid pill-shaped enterprise components unless functionally required.

---

# Shadows

Only two elevation levels.

Elevation 1

Small cards

Dropdowns

Inputs

Elevation 2

Dialogs

Popover

Feature sections

Avoid large blurred shadows.

Never stack multiple shadows.

---

# Borders

Prefer borders over shadows.

Use subtle border contrast.

Cards should feel defined by layout,

not floating.

---

# Color System

Use semantic colors.

Primary

Brand Blue

Secondary

Neutral Gray

Success

Green

Warning

Amber

Danger

Red

Info

Blue

Background

White

Surface

Very Light Gray

Text Primary

Near Black

Text Secondary

Dark Gray

Muted

Medium Gray

Never use more than one accent color on a screen.

---

# Typography

Use only one font family.

Hierarchy

Display

Hero only

H1

Section Titles

H2

Major Features

H3

Cards

Body Large

Descriptions

Body

Default Text

Small

Metadata

Caption

Badges

Never use more than five font sizes on a page.

Hierarchy comes from weight and spacing,

not excessive font sizes.

---

# Buttons

Primary

Solid

Secondary

Outlined

Tertiary

Text Button

Danger

Red

Rules

Maximum two primary buttons per section.

Never create decorative buttons.

Buttons should communicate importance.

---

# Inputs

Consistent height.

Consistent padding.

Label always visible.

Placeholder is never a label.

Validation appears below the field.

Required indicator is consistent.

Never rely on placeholder text.

---

# Tables

Enterprise tables should support

Sorting

Filtering

Pagination

Bulk Actions

Sticky Header

Column Alignment

Dense Mode

Comfortable Mode

Avoid decorative row backgrounds.

Alternating rows are optional.

Selection states must be obvious.

---

# Cards

Cards are containers.

Not decoration.

Every card should have

Clear purpose

Predictable spacing

Single hierarchy

Consistent padding

Avoid

Nested cards

Random gradients

Heavy shadows

Decorative icons

Cards should organize information,

not attract attention.

---

# Icons

Icons communicate function.

Not decoration.

Only use icons when they improve recognition.

Examples

Navigation

Actions

Status

File Type

Module

Avoid icons in headings unless meaningful.

Avoid icon backgrounds.

---

# Illustrations

Use only when explaining

Concepts

Empty States

Onboarding

Marketing illustrations should never replace product screenshots.

---

# Product Screenshots

Product screenshots are first-class design elements.

Rules

High resolution

Consistent aspect ratio

Proper framing

Real data preferred

No fake dashboards

No unrealistic analytics

Use screenshots to demonstrate capability.

---

# Section Structure

Every section should contain

Purpose

Supporting content

One primary visual

One CTA if required

Avoid

Multiple focal points

Competing visuals

Visual clutter

---

# Navigation

Navigation should prioritize

Discoverability

Predictability

Consistency

Avoid experimental navigation.

Breadcrumbs are required for enterprise applications.

---

# Motion

Duration

150–250ms

Ease

Ease Out

Animate only

State changes

Expansion

Navigation

Loading

Never animate

Decorative elements

Backgrounds

Entire layouts

---

# Empty States

Every empty state should include

Clear message

Reason

Primary action

Helpful illustration if necessary

Never use humorous empty states in enterprise software.

---

# Loading States

Prefer skeleton loaders.

Avoid spinners longer than necessary.

Loading should preserve layout stability.

---

# Forms

Multi-step forms preferred for complex workflows.

Labels aligned consistently.

Logical grouping.

Progress indicators where applicable.

Inline validation.

Never overwhelm users with unnecessary fields.

---

# Feedback

Success

Clear confirmation

Warning

Explain consequences

Error

Explain cause

Suggest recovery

Avoid vague system messages.

---

# Accessibility

Minimum contrast AA.

Visible keyboard focus.

Touch targets minimum 44px.

Keyboard navigation supported.

ARIA labels where required.

Never communicate status using color alone.

---

# Responsive Principles

Desktop

Information density

Tablet

Balanced layout

Mobile

Task-focused layout

Never hide critical functionality.

Reflow before removing content.

---

# Code Standards

Components must

Reuse design tokens

Avoid inline styles

Avoid duplicated Tailwind utilities

Use semantic HTML

Support dark mode if implemented

Support accessibility

Prefer composition over duplication.

---

# AI Implementation Rules

When creating a new component

Search for an existing component first.

Extend before creating.

Do not introduce new spacing values.

Do not introduce new radius values.

Do not invent new shadows.

Do not invent new colors.

Use existing design tokens.

Every implementation should look like it belongs to the same product.

Consistency is more important than originality.