+++
title = "09. What Is Being Built?"
date = 2026-06-18
description = "Treating the artificial rat colony as a model for changing conditions, not as a reproduction of an experiment"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/09-what-is-being-built/"
+++

## Overview

So far, the artificial rat colony has been used to think about collapse, care, companions, reputation, experience, memory, and space.

This final note organizes what is being built.

It is not a reproduction of a rat experiment.

It is not a direct copy of a real colony.

What is being built here is a model whose conditions can be changed.

Which condition allows cooperation to remain?

Which condition makes the colony collapse?

The model is a tool for observing those questions through code.

## Question

What is this sequence of notes trying to show?

A colony can collapse even when resources are sufficient.

Changing the reach of care changes the form of cooperation.

Changing the boundary of companions changes the range of helping.

Being watched suppresses betrayal.

Experience changes individual behavior.

The length of memory changes the balance between cooperation and repair.

Space changes patterns of encounter.

These are not separate stories.

They affect one another inside the same colony.

## Not Reproduction

Real rats have bodies.

They have smell.

They have sound.

They develop.

They become tired.

The artificial rats in this note do not include most of that.

Therefore, this model cannot directly explain real rats.

What is being observed is not reality itself, but conditions under which relations collapse or remain.

It is not reproduction. It is organization.

## As Model

A model makes reality smaller.

By making it smaller, it becomes easier to see what was changed.

Change resources.

Change the reach of care.

Change boundaries.

Change reputation.

Change memory.

Change the box.

Each time, the behavior of the colony changes.

The structure can be as small as this.

```rust
let question = Question::new("when does cooperation remain?");
let colony = Colony::new(space, rats);
let result = simulate(colony, question);
```

The important point is not having the answer from the beginning.

It is being able to observe what changes when conditions are changed.

## As Artificial Life

This attempt is also close to artificial life.

But the goal is not to completely build a living thing.

Place simple individuals.

Give them an environment.

Update their actions.

Let experience remain.

Then observe whether colony-like behavior appears through repetition.

The goal is not to decide whether it is alive.

The goal is to see what conditions can give rise to something that looks like life or society.

## As Tool

This model is not a conclusion.

It is a tool.

By writing code, relations that remain vague in language can be moved.

What is care?

What is a companion?

What is trust?

What is collapse?

These cannot be fully defined at once.

But they can be placed as variables.

They can be placed, moved, broken, repaired, and observed again.

The artificial rat colony is being built as a minimal device for that work.

## Summary

This sequence of notes was not about rats themselves.

It was about the conditions of a colony.

Individuals increase.

Roles are lost.

Care reaches someone.

The boundary of companions changes.

Individuals are watched.

They experience.

They remember.

They forget.

They meet in space.

Through those combinations, a colony remains or collapses.

The artificial rat colony is a small observation device for that change.

## Next Question

From here, the work splits into two directions.

One is making the model more precise.

The other is organizing the observed results in language.

Voice, signals, smell, and bodily detail are not treated in this sequence yet.

They should be handled separately in the next stage.

How should equations, code, images, and logs be connected?

What should be published as notes, and what should be separated as implementation logs?

The next task is to decide that format.

## Notes

1. Reproduction: A direct copy of an experiment or phenomenon. In this note, the artificial rat colony is treated as an abstraction for studying conditions, not as reproduction.
2. Model: A reduced structure that extracts part of reality and makes it possible to change variables.
3. Artificial life: A field that studies life-like behavior through artificial environments or computation.
4. Tool: Used here as a small device for thinking.
