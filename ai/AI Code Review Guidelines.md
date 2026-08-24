# AI Code Review Guidelines
Version: 1.0

Purpose

This document defines the mandatory review process for every implementation.

No task is considered complete until it passes every review stage.

Do not assume the first implementation is production ready.

---

# Review Philosophy

Act as an independent reviewer.

Forget that you wrote the code.

Review it as if another engineer submitted a Pull Request.

Your responsibility is to find defects,

not justify decisions.

Assume there are problems until proven otherwise.

---

# Stage 1

Requirement Validation

Verify

Did the implementation satisfy every requirement?

Was anything skipped?

Was anything added that wasn't requested?

Did functionality change unintentionally?

If unsure,

report it.

---

# Stage 2

Architecture Review

Review

Folder structure

Component ownership

Imports

Feature boundaries

Shared components

State ownership

Routing

API organization

Utilities

Hooks

Reject implementation if

Business logic exists inside UI

Feature code exists inside shared

Shared code exists inside feature

Architecture becomes inconsistent

New unnecessary patterns appear

---

# Stage 3

Component Review

For every component ask

Does it have one responsibility?

Can it be reused?

Can naming improve?

Can props be simplified?

Can JSX become smaller?

Can repeated code be extracted?

Reject

Massive components

Prop explosion

Nested conditionals

Duplicated JSX

Hardcoded values

---

# Stage 4

Design Review

Compare against

AI_DESIGN_CONSTITUTION.md

Verify

Typography

Spacing

Hierarchy

Alignment

Consistency

Visual rhythm

Whitespace

Color usage

Shadows

Borders

Reject

Decorative gradients

Visual clutter

Competing focal points

Random colors

Inconsistent spacing

AI-looking layouts

---

# Stage 5

UX Review

Review

Number of clicks

Navigation

Discoverability

Error prevention

Information hierarchy

Primary action

Secondary action

Workflow efficiency

Ask

Can the task require fewer clicks?

Can typing be reduced?

Can confusion be reduced?

Can workflow improve?

---

# Stage 6

Accessibility Review

Verify

Keyboard navigation

Focus visibility

Semantic HTML

ARIA labels

Screen readers

Contrast

Touch targets

Reject

Clickable divs

Invisible focus

Color-only communication

Missing labels

---

# Stage 7

Responsive Review

Verify

Desktop

Laptop

Tablet

Mobile

No

Overflow

Broken layouts

Horizontal scrolling

Compressed forms

Tiny touch targets

---

# Stage 8

Performance Review

Check

Re-renders

Memoization

Bundle size

Image optimization

Unused dependencies

Lazy loading

Large imports

Reject

Premature optimization

Large unnecessary dependencies

Repeated calculations

---

# Stage 9

Maintainability Review

Ask

Would another engineer understand this?

Can names improve?

Can files become smaller?

Can logic move into hooks?

Can utilities be extracted?

Can duplication be removed?

Can complexity decrease?

---

# Stage 10

Code Hygiene

Remove

Console logs

TODO

FIXME

Dead code

Unused imports

Unused variables

Commented code

Duplicate constants

Magic numbers

Unused props

Unused hooks

Unused styles

---

# Stage 11

TypeScript Review

Verify

No any

No unnecessary assertions

Proper generics

Strong typing

Enums where appropriate

No duplicated interfaces

Avoid

as any

@ts-ignore

Loose typing

---

# Stage 12

Tailwind Review

Reject

Repeated utility chains

Arbitrary spacing

Arbitrary colors

Hardcoded values

Duplicate class combinations

Prefer

Tokens

Reusable utilities

Variants

Consistent spacing

---

# Stage 13

Enterprise UX Review

Ask

Would this exist in

Atlassian?

Microsoft?

Linear?

Workday?

Salesforce?

SAP?

Oracle?

ServiceNow?

If the answer is no,

find out why.

---

# Stage 14

AI Smell Detection

Look for

Glassmorphism

Gradient blobs

Floating cards

Random icon circles

Huge rounded corners

Marketing statistics

Meaningless icons

Decorative charts

Over-animation

Hero illustrations

Gradient text

Animated backgrounds

Generic SaaS cards

If present,

remove them.

---

# Stage 15

Consistency Review

Compare against the entire project.

Verify

Buttons

Cards

Spacing

Radius

Typography

Forms

Tables

Badges

Navigation

Dialogs

Loading

Errors

Everything should feel like

one product,

not many pages.

---

# Stage 16

Regression Review

Ensure

Nothing broke

Existing functionality preserved

Existing routes preserved

Existing accessibility preserved

Existing responsiveness preserved

Existing APIs preserved

---

# Stage 17

Final Product Review

Step away from implementation.

Imagine seeing this page for the first time.

Ask

Does this feel handcrafted?

Does this feel mature?

Does this feel enterprise?

Does this increase trust?

Does this look timeless?

Would this still look good five years from now?

---

# Required Output

Every review ends with

## Passed

Items that meet standards.

## Issues Found

Numbered list.

## Recommended Improvements

Prioritized.

## Risk Assessment

Low

Medium

High

## Production Readiness

Ready

Needs Revision

Blocked

Never simply say

Looks good.

---

# Completion Rule

A task is complete only when

Functionality

Architecture

Design

UX

Accessibility

Performance

Maintainability

Consistency

all pass review.

Anything less is work in progress.