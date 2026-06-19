+++
title = "07. The Length of Memory"
date = 2026-06-18
draft = true
description = "Memory, trust, betrayal, and the stability of cooperation in an artificial rat colony"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/07-memory-length/"
+++

## Overview

The previous note treated individuals whose behavior changes through experience.

They are helped. They are betrayed. They are able to learn.

Those experiences slightly change later actions.

But how long does an experience remain?

This note treats the length of memory.

If memory is short, individuals forget quickly.

If memory is long, they keep the past for longer.

Which condition stabilizes cooperation?

## Question

Does cooperation require memory?

In the previous model, experience changed behavior weights.

But if experience disappears immediately, the change does not remain.

An individual forgets who helped.

It also forgets who betrayed.

Then every encounter is almost like a first encounter.

But very long memory also creates a problem.

An individual may avoid a partner that defected once for too long.

Past failure can remain even after the situation has changed.

Relations become difficult to repair.

Memory is not simply better when it is longer.

## Short Memory

First, consider short memory.

An individual keeps only recent experience.

If it is helped, it becomes slightly more likely to approach.

If it is betrayed, it becomes slightly more likely to avoid.

But the change fades quickly.

In this condition, cooperation is hard to build.

An individual that helped once is not necessarily remembered later.

A cheater is also quickly treated as ordinary again.

Relations do not accumulate.

For cooperation to remain in a colony, at least some past has to remain.

## Long Memory

Now consider long memory.

Individuals remember partners for longer.

Who helped?

Who betrayed?

Who made learning possible?

In this condition, cooperation is easier to stabilize.

Helpers become trusted.

Cheaters are avoided.

But long memory also has a side effect.

One betrayal can remain for too long.

Even when the situation changes, the partner is difficult to forgive.

If memory is too strong, relations become fixed.

Cooperation is protected, but repair becomes harder.

## Change

Only the duration of experience changes.

Each individual keeps memory for each partner.

A memory of being helped increases trust.

A memory of being betrayed decreases trust.

As time passes, memory weakens.

The flow is simple.

```text
experience -> memory remains -> trust changes -> next action changes
```

At the level of the condition, it looks like this.

```rust
memory.retain(|event| event.age < memory_span);

if other.helped_me {
    trust[other] += 0.04;
}

if other.betrayed_me {
    trust[other] -= 0.08;
}
```

The important point is that experience does not last forever, and it does not vanish immediately.

How long it remains changes the form of cooperation.

## Result

With short memory, cooperation was unstable.

Helping could occur, but it did not remain as a relation.

Individuals had difficulty choosing partners, and cheating was harder to suppress.

As a result, the fraction of cooperators fluctuated more.

With medium memory, cooperation was most stable.

Helpers became trusted.

Cheaters were avoided.

But because memory faded over time, relations did not become fully fixed.

With very long memory, cheating was suppressed.

But repair became difficult.

An individual with a bad memory attached to it could be avoided for a long time.

The colony became stable, but rigid.

## Interpretation

Memory supports cooperation.

But memory is not only storage.

It is a question of which experiences remain and for how long.

If memory is too short, relations do not accumulate.

If memory is too long, relations do not change easily.

In this model, maintaining cooperation required not only remembering, but also forgetting.

Forgetting allows repair.

Remembering suppresses betrayal.

Cooperation remains between those two pressures.

## Limitations

Memory in this model is simple.

An individual only keeps trust values for partners.

It does not interpret the meaning of events.

There is no apology, ritual, or explanation.

Real memory is much more complex.

Still, changing only the length of memory changed the stability of cooperation.

This suggests that social competence depends not only on experience, but on how experience remains.

## Next Question

So far, the sequence has treated collapse, care, companions, reputation, experience, and memory.

The next step is to organize how the artificial rat colony itself is built.

What is an individual?

What is a box?

What do nests, corridors, and central areas represent?

Why do social roles emerge from space?

The next note will treat the design of the artificial rat colony.

## Notes

1. Memory: In this note, memory means past experience that an individual keeps for each partner.
2. Trust: In this note, trust means an internal value that changes whether an individual approaches, helps, or avoids another individual.
3. Length of memory: The duration for which an experience continues to affect behavior.
4. Repair: The process by which a damaged relation can return through time or new experience.
1. memory: Past experience kept by an individual for each partner.
2. trust: An internal value that changes whether an individual approaches, helps, or avoids a partner.
3. memory span: The duration for which experience continues to affect behavior.
4. repair: The process by which a damaged relation becomes usable again through time or new experience.
