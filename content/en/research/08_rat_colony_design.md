+++
title = "08. The Design of the Artificial Rat Colony"
date = 2026-06-18
draft = true
description = "Organizing the artificial rat colony as box, individuals, space, and action updates"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/08-rat-colony-design/"
+++

## Overview

The previous notes treated collapse, care, companions, reputation, experience, and memory.

But none of these exist by themselves.

An individual is somewhere.

It approaches someone.

It avoids someone.

It learns near someone.

In other words, this model has space.

This note organizes the artificial rat colony as a box, individuals, and repeated action updates.

## Question

What is being built in the artificial rat colony?

It is not only a set of individuals.

Individuals move inside space.

They return to nests.

They pass through corridors.

They meet other individuals in central areas.

This arrangement creates partners that are easy to meet and partners that are hard to meet.

That becomes the condition for learning, trust, betrayal, and cooperation.

## Box

The box is not only a background.

The box here is not a reproduction of a Skinner box.

It is a space for observing where individuals meet, avoid, and learn.

The shape of the box changes how individuals meet.

In a wide space, individuals disperse more easily.

In a narrow space, individuals collide more often.

If corridors are thin, movement becomes congested.

If nests are separated, the colony can form local groups.

The shape of space affects the shape of society.

In this model, the box is both an environment and a condition that constrains interaction.

## Individual

An individual does not only have a fixed personality.

It has a position.

It has memory.

It has trust values.

It chooses whether to approach, avoid, or help.

Those choices change slightly through past experience.

If the individual is made too complex, it becomes difficult to see which condition matters.

Here, an individual is treated as something with a position in space and internal values for partners.

## Update

The colony is not completed at once.

It repeats small updates.

An individual moves.

It encounters a partner.

Helping, avoiding, or betrayal may occur.

The result remains in memory.

The next action changes slightly.

The center is this repetition.

```text
space -> encounter -> action -> experience -> memory -> next action
```

The structure is small.

```rust
struct Colony {
    space: BoxSpace,
    rats: Vec<Rat>,
}

fn step(colony: &mut Colony) {
    for rat in colony.rats.iter_mut() {
        rat.choose_action(&colony.space);
        rat.update_memory();
    }
}
```

The important point is that society is not determined only inside the individual.

The shape of the box changes encounters.

Encounters change experience.

Experience changes later action.

## Result

When the shape of the box changed, behavior changed even with the same individuals.

In narrow corridors, contact increased.

When contact increased, both cooperation and betrayal increased.

When nests were separated, relations remained more locally.

The same partners met repeatedly, so trust and memory could work more easily.

When the central area became crowded, individuals had more difficulty choosing partners.

Because encounters were unstable, relations were harder to accumulate.

Space was not only visual structure.

Space created the learning condition of the colony.

## Interpretation

What is being built is not only a collection of individuals.

It is a field in which individuals, space, memory, and action update each other.

Social roles are not given as names from the beginning.

An individual stays in the same place many times.

It meets the same partner many times.

It helps many times.

It is avoided many times.

Through that repetition, something like a role becomes visible.

In this sense, a role is not only inside an individual.

It is also in the shape of the box and the history of encounters.

## Limitations

This design is simple.

It does not include the real body, smell, sound, development, or fatigue of rats.

The box is not a direct copy of a real environment.

What is being used here is a minimal structure for observing the conditions under which social behavior emerges.

The model does not explain reality completely.

But it allows individual traits, space, and patterns of encounter to be treated as variables.

That is where the model is useful.

## Next Question

The inside of the artificial rat colony has now been organized.

The next step is to summarize what this sequence of notes is trying to build.

Is it a reproduction of an animal experiment?

Is it a social model?

Is it artificial life?

Or is it a tool for thinking about life and society through code?

The next note will treat what is being built.

## Notes

1. Box: In this note, the environment in which individuals move, meet, and interact.
2. Nest: A place that individuals tend to return to, or a place where local grouping can occur.
3. Corridor: A narrow space that constrains movement and contact.
4. Central area: A place where multiple individuals tend to gather and contact increases.
5. Update: One time step in which movement, contact, action, and memory change.
6. Skinner box: An experimental apparatus for observing animal behavior. The box in this note is not a reproduction of it, but an abstract space for organizing interaction.
