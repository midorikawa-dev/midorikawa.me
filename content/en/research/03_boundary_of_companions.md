+++
title = "03. The Boundary of Companions"
date = 2026-06-18
draft = true
description = "Non-kin cooperation and shared tags in an artificial rat colony"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/03-boundary-of-companions/"
+++

## Overview

In the previous note, costly help toward non-kin reduced collapse in the colony.

But that is still not enough.

Why would a costly behavior be directed toward a non-kin individual? Why would an individual include someone outside its family among those it helps?

This note treats the boundary of companions.

What turns a non-kin individual into one of us? Can sharing a name, a tag, a memory, or a story expand the range of who receives help?

I added shared tags to the artificial rat colony and asked whether cooperation beyond kin can reduce collapse.

## Question

Why help non-kin?

Helping kin is relatively easy to explain. Helping one's offspring or close kin can preserve genetic information close to one's own.

But in larger colonies and societies, cooperation is not always limited to kin.

Being in the same group. Carrying the same tag. Responding to the same signal. Sharing a name or memory.

Can something like that turn a non-kin individual into a companion?

This is not a model of real religion, nations, or culture as they actually exist. It is a smaller model.

When two individuals share the same tag, they can help each other.

Is that simple rule enough to widen cooperation beyond kin?

## Shared Tags

In the model, each individual carries one shared tag.

The tag could stand for a color, a name, a signal, or a story. Here it is treated as an abstract category attached to each individual.

The founders all begin with different tags.

In other words, they start as strangers.

The helping rule is simple.

Help kin.

Or help someone who has the same tag.

Do not help others.

The important point is that the tag does not have natural meaning by itself. Red is not better. Blue is not more correct.

But an individual with the same tag is treated as a companion.

Meaning appears because it is shared.

## How Tags Spread

I tested two ways for tags to spread.

One is inheritance from the parent.

Offspring receive the mother's tag. In that case, the tag becomes close to a kin marker. Helping still tends to follow family lines.

The other is spread through the colony.

Offspring receive the tag that is currently common in the colony. Even if it is different from the mother's tag, the offspring adopts it if the colony shares it.

In that case, a tag can spread beyond kin.

As a simple relation, the model can be read like this.

```text
who gets help = kin + individuals with the same tag

the same tag spreads
-> more individuals are treated as companions
-> help reaches non-kin
-> transmission is easier to preserve
```

At the level of the condition, it looks like this.

```rust
let same_group = is_kin(other) || self.tag == other.tag;

if same_group {
    help(other);
}
```

The question is whether this relation actually changes the risk of collapse.

## Result

In this model, colonies with shared tags became less likely to collapse.

In the harsh 16-box apparatus, the transactional condition went extinct at a high rate. The kin-only condition reduced extinction, but not enough.

When individuals helped others with the same tag, extinction fell further.

In this model, extinction was roughly 79% in the transactional condition, 50% in the kin-only condition, and 29% when a shared tag spread through the colony.

This suppressed collapse about as well as, or better than, the unconditional-love condition from the previous note.

<figure>
  <img src="/images/research/rat/03/shared_myth.png" alt="Comparison of collapse risk in transactional, kin-only, and shared-tag conditions">
  <figcaption>Comparison under the 16-box condition. When a shared tag spreads through the colony, cooperation reaches beyond kin and collapse risk falls.</figcaption>
</figure>

The tags also converged over time.

The founders begin with different tags. As time passes, offspring adopt the tag that is common in the colony. The number of distinct tags decreases. Eventually, many individuals carry the same tag.

At that point, non-kin individuals can be treated as companions.

<figure>
  <img src="/images/research/rat/03/shared_myth.gif" alt="Simulation of an artificial rat colony where different tags converge into one shared tag">
  <figcaption>Each color represents the tag an individual carries. Different tags at the start converge into a shared tag, and non-kin cooperation expands.</figcaption>
</figure>

## Sharing Matters

The important part was not simply having a tag.

The tag had to be shared.

If offspring only inherit the mother's tag, the tag remains close to kinship. Helping stays near the family boundary.

If the tag spreads through the colony, non-kin individuals can come to carry the same tag.

Then the range of helping changes.

They are not helped because they are family.

They are helped because they are treated as being on the same side.

That difference changed the collapse rate of the colony.

## Interpretation

The tag in this model is not a direct model of real culture, religion, or nationhood.

But as a minimal model, it points to one structure.

The boundary of companions is not determined only by kinship.

A shared name, tag, memory, or story can become a reason to help someone who is not kin.

Not because they literally share blood.

Because the rule that treats them as being on the same side is shared by the colony.

In this model, that rule widened non-kin cooperation, preserved the transmission of social competence, and reduced collapse.

## Limitations

This model does not reproduce the cognition of real mice or rats.

Giving individuals a tag and letting them choose whom to help from that tag is a strong abstraction. It is closer to a minimal cognitive agent wearing the shape of a rat.

The way tags spread is also simplified. Real culture, religion, nationhood, language, and ritual are far more complex.

This note treats one hypothesis.

A shared tag that turns non-kin into companions can widen non-kin cooperation and change the collapse conditions of a closed colony.

The model makes that hypothesis executable.

## Next Question

Even if shared tags widen the boundary of companions, another problem remains.

When cooperation spreads, free-riders can also appear.

An individual may receive help without helping others. It may use the shared tag without paying the cost.

How, then, is cooperation maintained?

The next note treats being watched, being recorded, and being evaluated after death. It asks whether long-term reputation, rather than short-term gain alone, changes the stability of cooperation.

## Notes

1. shared tag: In this note, a shared tag is an abstract category carried by an individual. It is a minimal representation of a color, name, signal, or story.
2. kin altruism: Helping kin. This is related to Hamilton's theory of kin selection.
3. horizontal transmission: Transmission that spreads through the group rather than only from parent to offspring. Here, offspring receive the majority tag in the colony.
4. unconditional love: The broad helping condition from the previous note, where help can extend to non-kin in general. It is used here as a comparison for tag-based helping.
