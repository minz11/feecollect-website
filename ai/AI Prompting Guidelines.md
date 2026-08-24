# AI Prompting Guidelines
Version: 1.0

Purpose

This document standardizes every prompt sent to AI.

Every implementation should follow a predictable workflow.

Never jump directly into coding.

The AI should always understand the project before making changes.

---

# Universal Prompt Structure

Every prompt should follow this order.

1.

Context

↓

2.

Objective

↓

3.

Constraints

↓

4.

Expected Deliverables

↓

5.

Review Criteria

AI performs significantly better when these five sections are present.

---

# Always Start With Context

Never assume the AI remembers previous conversations.

Provide

Project

Current Feature

Business Context

Target User

Existing Architecture

Relevant Documents

Example

This project is an Enterprise ERP platform for educational institutions.

Read the following before making any changes.

AI_DESIGN_CONSTITUTION.md

DESIGN_SYSTEM.md

COMPONENT_LIBRARY.md

FRONTEND_ARCHITECTURE.md

UX_PRINCIPLES.md

---

# State the Objective

Objectives should describe outcomes.

Avoid

Improve UI

Make it beautiful

Modernize

Instead

Redesign the Hero section to improve trust, hierarchy and product communication while preserving responsiveness and accessibility.

---

# Define Constraints

Always specify

Must preserve

Must improve

Must avoid

Example

Must preserve

Architecture

Responsiveness

Accessibility

Existing routes

Existing components

Must improve

Hierarchy

Whitespace

Typography

Trust

Maintainability

Must avoid

Glassmorphism

Gradient blobs

Random animations

Decorative icons

---

# Define Deliverables

Never ask only for code.

Ask for

Analysis

Implementation Plan

Code

Review

Refactoring

Summary

---

# Standard Workflow Prompt

Read all project design documents.

Analyze the existing implementation.

List problems before proposing solutions.

Create an implementation plan.

Wait if major architectural concerns exist.

Implement incrementally.

Review your implementation.

Refactor if necessary.

Provide a summary.

---

# Prompt Template

## Context

Project information

Relevant files

Relevant modules

Business objective

## Objective

What success looks like.

## Constraints

Architecture

Design

Performance

Accessibility

Responsiveness

## Deliverables

Analysis

Plan

Implementation

Review

Summary

---

# UI Redesign Prompt

Analyze the current interface.

Identify visual hierarchy issues.

Identify UX issues.

Identify enterprise design inconsistencies.

Reference the project Design Constitution.

Create a redesign strategy.

Implement only after analysis.

Preserve responsiveness.

Preserve accessibility.

Preserve architecture.

Avoid introducing unnecessary components.

---

# New Feature Prompt

Understand the feature requirements.

Inspect similar modules.

Reuse existing components.

Create only the missing functionality.

Do not duplicate architecture.

Document all new components.

---

# Refactoring Prompt

Refactor only.

Do not change functionality.

Improve

Readability

Maintainability

Performance

Naming

Architecture

Remove duplication.

Reduce complexity.

---

# Component Prompt

Search for an existing reusable component.

If found

Extend it.

If not

Create one following COMPONENT_LIBRARY.md.

Document

Props

Variants

Usage

Accessibility

---

# UX Review Prompt

Review the implementation.

Ignore code quality.

Focus only on UX.

Evaluate

Navigation

Hierarchy

Cognitive load

Workflow

Forms

Tables

Accessibility

Recommendations only.

Do not modify code.

---

# Design Review Prompt

Review the interface as a Principal Product Designer.

Ignore implementation.

Evaluate

Hierarchy

Spacing

Typography

Consistency

Whitespace

Trust

Enterprise quality

Visual noise

Provide recommendations.

---

# Engineering Review Prompt

Review as a Staff Frontend Engineer.

Evaluate

Architecture

Code quality

Maintainability

Performance

Reusability

State management

Imports

Types

Refactoring opportunities

---

# Accessibility Review Prompt

Review only accessibility.

Evaluate

Contrast

Keyboard

ARIA

Focus

Screen reader support

Semantic HTML

Touch targets

Provide fixes.

---

# Performance Prompt

Review

Bundle size

Rendering

Memoization

Image loading

Code splitting

Dependency usage

Do not redesign UI.

---

# Final QA Prompt

Review the completed implementation.

Assume this is the final PR before production.

Search for

Design issues

Architecture issues

Performance issues

Accessibility issues

Responsiveness issues

Maintainability issues

Anything that feels AI-generated.

Fix all remaining issues.

---

# Self Critique Prompt

Pretend another engineer submitted this code.

Find every weakness.

Do not defend previous decisions.

List

Problems

Severity

Suggested fixes

---

# Multi-Agent Workflow

Agent 1

Analysis

↓

Agent 2

Implementation

↓

Agent 3

Refactoring

↓

Agent 4

Design Review

↓

Agent 5

Code Review

↓

Agent 6

Final QA

Never combine all responsibilities into one step when working on large features.

---

# Prompt Anti-Patterns

Avoid

"Make it better."

"Modernize."

"Improve UX."

"Make it cleaner."

"Make it premium."

These are subjective.

Replace them with measurable objectives.

---

# Good Prompt Characteristics

Specific

Measurable

Architecturally aware

Business aware

Design aware

Technically constrained

Reviewable

---

# AI Communication Rules

The AI should

Explain assumptions.

State risks.

Ask questions if uncertain.

Reuse existing work.

Avoid unnecessary rewrites.

Document major decisions.

Never silently change architecture.

---

# Required Output Format

Every implementation should end with

Summary

Files Changed

Components Added

Components Reused

Architecture Impact

UX Improvements

Accessibility Improvements

Performance Impact

Known Limitations

Future Improvements

---

# Golden Rule

Treat AI like a senior engineer joining an existing product team.

Provide context.

Define objectives.

Establish constraints.

Require review.

Never expect quality from a one-line prompt.