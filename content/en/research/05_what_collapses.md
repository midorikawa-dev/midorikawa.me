+++
title = "05. What Collapses?"
date = 2026-06-18
description = "Resources, transmission, care, companions, and reputation in an artificial rat colony"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/05-what-collapses/"
+++

## Overview

So far, the artificial rat colony has been used to examine four conditions.

Collapse even when resources are available.

Care that suppresses collapse.

A boundary that turns non-kin into companions.

A reputation system that suppresses free-riding and maintains cooperation.

This note does not add a new mechanism.

It organizes the previous results as one arc.

The main point is that collapse was not only a decrease in population size.

What collapsed was transmission.

## Question

What keeps a colony together?

Food and water make survival possible.

But they were not enough to maintain the colony.

Reproduction, parenting, learning, mate choice, helping, and avoiding betrayal do not happen inside one body alone.

They happen through relations between individuals.

So population size alone is not enough to understand collapse.

Who can learn from whom?

Who helps whom?

Who counts as a companion?

Where does cheating stop?

Those are the questions the model has to expose.

## Not Resources, But Transmission

The first model showed collapse without resource shortage.

Even with unlimited food and water, the colony collapsed.

The cause was not starvation.

Social roles became scarce.

Individuals could not secure territory. Courtship became unstable. Parenting became unstable. Offspring lost chances to learn from competent adults.

At that stage, individuals did not disappear immediately.

The colony remained for a while.

But what could be passed to the next generation became thinner.

In short:

```text
social roles become scarce
-> offspring have fewer chances to learn
-> the next generation loses social competence
-> the colony moves toward collapse
```

At that point, collapse is no longer just a question of number.

It becomes a question of transmission.

## Care Reconnects

The next model treated care.

Care here is not a description of emotion.

It is a behavior that responds to the state of another individual.

Helping an injured individual. Staying near a weakened individual. Supporting parenting. Supporting social learning.

When care was added, the colony became less likely to collapse.

But the important point was not simply that individuals lived longer.

Learning opportunities remained.

Competent adults remained.

Offspring could learn nearby.

Social competence could pass to the next generation.

Care did not only increase survival.

It reconnected transmission.

## The Boundary of Companions

But if care stays limited to kin, its reach is narrow.

So I added shared tags.

Individuals with the same tag were treated as companions.

This is not a model of real religion, nations, or culture as they actually exist.

It is a smaller rule.

But the effect was visible.

Help reached non-kin.

There were more individuals to learn from.

Social competence became easier to preserve across the colony.

The point is that the boundary of companions is not determined only by biological kinship.

When who counts as a companion changes, the reach of care also changes.

## Being Watched

But when cooperation expands, free-riders appear.

Some individuals receive help without helping others.

In the short term, that can pay.

So expanding cooperation is not enough.

There also has to be a condition that maintains cooperation.

That is why reputation and monitoring were added.

If an individual is watched, cheating can be detected.

If cheating is detected, the individual receives less help.

If evaluation continues after death, even end-of-life defection becomes less attractive.

Under those conditions, cooperators remained more strongly.

When cooperation remains, offspring keep chances to learn.

Again, the central object is transmission.

## One Arc

These four notes are not separate stories.

They look at the same problem from different sides.

The relation can be summarized like this.

```text
resources alone do not maintain a colony

social roles are necessary

when social roles become scarce, transmission breaks

care reconnects weakened transmission

the boundary of companions widens the reach of care

reputation suppresses free-riding that would break cooperation
```

As code, the arc is roughly this.

```rust
let transmission =
    social_roles.available()
    + care.reconnects_learning()
    + boundary.expands_help()
    + reputation.suppresses_free_riding();

colony.stability = transmission;
```

From this angle, colony stability is not decided only by the strength of individuals.

It is decided by relations between individuals.

## What the Model Observes

The goal is not to reproduce real rats exactly.

It is also not to shrink human society into a toy copy.

The goal is to observe the conditions of collapse and maintenance.

Which conditions allow learning to persist across generations?

Which missing conditions hollow out a colony even while individuals remain?

Which rules widen care and cooperation?

Which rules suppress behaviors that break cooperation?

Writing the model in code separates the conditions.

Separated conditions can be compared.

Comparison makes the object of collapse slightly clearer.

## What Is Still Missing

The model is still simple.

Emotion is simplified. Learning is simplified. Social relations are simplified.

It does not reproduce real love, culture, religion, institutions, family, or states.

But simple models can make certain things visible.

Conditions can be moved one by one.

Differences in result can be observed.

It becomes possible to separate which conditions support transmission and which conditions accelerate collapse.

For now, that is enough.

Before building a large explanation, I want to run small conditions and see what changes.

That is what this series is for.

## Next Question

So far, collapse has been treated as a problem of transmission.

The next step is to make the individuals a little stronger.

At the moment, individuals do not learn very much.

They also have limited ability to change strategy with experience.

The next note will treat conditions where individuals change behavior through experience.

Is social competence a fixed property?

Or does it change through environment and relation?

## Notes

1. transmission: Here, the process by which offspring learn social competence from competent adults and carry it into the next generation.
2. social role: A position or opportunity that allows the life cycle of the colony to function, such as territory, courtship, parenting, or social learning.
3. care: In this series, care is treated as behavior that responds to the state of another individual, not as a description of inner emotion.
4. reputation: The effect by which a detected cheater receives less help and suffers a reproductive penalty.
