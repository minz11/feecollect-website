# Enterprise ERP Frontend Architecture
Version: 1.0

This document defines the architectural rules for the frontend.

Every implementation must follow these rules.

Maintainability has higher priority than implementation speed.

---

# Architecture Philosophy

The frontend is a long-term product.

It will continuously evolve.

Every decision must optimize for:

- Scalability
- Readability
- Maintainability
- Reusability
- Predictability

Never optimize for writing less code today if it increases technical debt tomorrow.

---

# Ownership Hierarchy

Every file must have a clear owner.

Application

↓

Module

↓

Feature

↓

Page

↓

Section

↓

Component

↓

Primitive

Never violate this hierarchy.

---

# Folder Organization

Preferred structure

src/

    app/

    pages/

    layouts/

    modules/

    components/

    hooks/

    contexts/

    services/

    api/

    stores/

    lib/

    utils/

    constants/

    types/

    assets/

    styles/

    routes/

Do not invent new top-level folders.

---

# Feature First

Business functionality belongs inside modules.

Example

modules/

    admissions/

    hrms/

    finance/

    library/

    examination/

Each module owns

pages

hooks

api

types

constants

feature components

Only reusable components belong in shared.

---

# Shared Components

Shared components must be completely domain independent.

Good

Button

Table

Card

Modal

Input

Tabs

Badge

Toast

Poor

StudentCard

FeeCard

TeacherCard

ExamTable

These belong inside their feature module.

---

# Component Ownership

Every component belongs to one category.

Primitive

Button

Input

Badge

Card

↓

Layout

Sidebar

Header

PageContainer

↓

Shared

DataTable

FilterBar

EmptyState

↓

Feature

AdmissionForm

StudentProfile

FeeSummary

↓

Page

AdmissionPage

Never move feature logic into shared components.

---

# File Size

Target

200–300 lines

Acceptable

500 lines

Maximum

700 lines

If a file exceeds this,

extract responsibilities.

Never create 1500-line React components.

---

# Component Responsibility

Each component should answer one question.

Example

Bad

StudentAdmissionDashboard

Contains

Filters

Table

Modal

Chart

Statistics

Timeline

Good

AdmissionStatistics

AdmissionTable

AdmissionFilters

AdmissionTimeline

AdmissionActions

Compose,

don't centralize.

---

# State Ownership

State belongs as close as possible to where it is used.

Priority

Local State

↓

Feature State

↓

Context

↓

Global Store

↓

Server

Never store local UI state globally.

---

# API Layer

Never call APIs directly inside UI components.

Use

services/

or

api/

Example

AdmissionService

StudentService

FeeService

UI should consume services,

not endpoints.

---

# Business Logic

Business logic never belongs inside JSX.

Move calculations into

hooks

utils

services

selectors

Keep components declarative.

---

# Custom Hooks

Hooks encapsulate behavior.

Examples

usePagination

useSearch

useTableSelection

useDebounce

useStudent

Avoid

hooks that render UI.

---

# Utilities

Utilities must be

Pure

Reusable

Independent

Never import React into utility functions.

---

# Constants

Every repeated string belongs in constants.

Examples

Status

Routes

Roles

Permissions

Labels

Never duplicate literals.

---

# Types

Types belong close to their owner.

Shared types

types/

Feature types

modules/admissions/types/

Never create one massive types.ts.

---

# Routing

Every page owns one route.

Nested routes follow business hierarchy.

Avoid deeply nested routing unless required.

---

# Layouts

Layouts manage

Navigation

Sidebar

Header

Breadcrumb

Content Width

Authentication

Pages never duplicate layouts.

---

# Page Composition

Preferred

Page

↓

Sections

↓

Components

↓

Primitives

Avoid

Page

↓

Huge JSX

---

# Styling

Use design tokens.

Avoid arbitrary Tailwind values.

Never hardcode colors.

Never hardcode spacing.

Never duplicate utility combinations repeatedly.

Extract reusable styles.

---

# Naming

Components

PascalCase

Hooks

useSomething

Files

PascalCase.tsx

Utilities

camelCase.ts

Constants

UPPER_CASE

Folders

kebab-case

Consistency is mandatory.

---

# Imports

Order

External

Internal

Components

Hooks

Utilities

Styles

Types

Avoid circular imports.

Avoid barrel files when they create dependency confusion.

---

# Performance

Memoize only when necessary.

Prefer simpler code over premature optimization.

Lazy load

Large pages

Charts

Heavy editors

Large dialogs

Do not optimize blindly.

Measure first.

---

# Accessibility

Every reusable component must support

Keyboard

Focus

ARIA

Screen readers

Semantic HTML

Accessibility is a feature,

not an enhancement.

---

# Error Handling

Every async operation must define

Loading

Success

Empty

Error

Retry

Never leave users without feedback.

---

# AI Refactoring Rules

Before creating any file

Search for an existing implementation.

Before duplicating logic

Extract reusable code.

Before adding props

Ask whether composition is better.

Before creating a new component

Ask whether the current component can be extended.

Before creating a new hook

Search for an existing one.

Before creating a utility

Search utils/.

Before creating a constant

Search constants/.

Before creating a type

Search feature types.

---

# AI Code Review Checklist

For every implementation verify

□ Responsibility is clear

□ Component is reusable

□ Logic is separated from presentation

□ No duplicated code

□ No duplicated styles

□ No duplicated API calls

□ File size acceptable

□ Uses design tokens

□ Accessible

□ Responsive

□ Typed correctly

□ Feature ownership respected

□ Easy to test

□ Easy to extend

If any answer is "No",

refactor before considering the task complete.

---

# Golden Rule

When uncertain,

prefer extending the existing architecture over introducing a new pattern.

A consistent architecture is more valuable than an individually elegant implementation.