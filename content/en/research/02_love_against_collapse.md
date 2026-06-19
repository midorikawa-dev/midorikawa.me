+++
title = "02. Can Love Prevent Collapse?"
date = 2026-06-18
draft = true
description = "Non-kin helping and the transmission of social competence in an artificial rat colony"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/02-love-against-collapse/"
+++

## Overview

In the previous note, a colony collapsed even though resources were sufficient.

Food was available. Water was available. Predators were absent. Even so, social roles became jammed, offspring could no longer learn from competent adults, and the colony failed to continue into the next generation.

The next question follows from that.

If the core of collapse is a break in the transmission of social competence, what reconnects it?

This note treats love as one candidate. But love here does not mean an emotion. It means a costly helping behavior directed toward non-kin.

I added social buffering, mentorship, alloparenting, and adoption to the artificial rat colony, then asked whether those behaviors change the critical conditions of the behavioral sink.

## Question

Can love prevent collapse?

As stated, the question is too large. The word love can include human emotion, ethics, religion, family, sexuality, devotion, and many other things.

So I define it more narrowly here.

Love means paying a cost to help a non-kin individual.

Protecting oneself is not called love in this model. Protecting one's own offspring is also placed in the baseline. Parental investment can be explained within inclusive fitness.

The question lies outside that boundary.

Can an individual help someone who is neither itself nor its own offspring, losing time or reproductive opportunity in the process, and can that behavior prevent the collapse of the colony?

## Transactional World

First, I set up a transactional world.

Individuals protect themselves. They raise their own offspring. They prioritize their own reproductive opportunities. This does not mean the world is cruel. It is a natural baseline for many organisms.

Individuals still have the same life cycle.

Sexual maturation. Territory acquisition. Courtship. Mating. Birth. Parenting. Offspring learning social competence from adults.

But when social roles become jammed, the same problem from the previous note returns.

Competent adults decrease. Offspring fail to learn. Those offspring cannot become the next generation of teachers.

Once this loop begins, protecting only oneself and one's own offspring does not restore transmission across the colony.

## Love Behaviors

I then added four behaviors.

Social buffering.

An individual stays near an isolated or highly stressed individual, reducing the damage caused by chronic stress.

Mentorship.

A competent adult raises the social competence of a younger individual.

Alloparenting.

An individual helps care for another individual's offspring, compensating for weak parenting.

Adoption.

An individual takes in an orphan or a young individual that has lost protection, keeping it from falling out of the developmental pathway.

All of these behaviors carry a cost for the helper. They take time, and they slightly reduce the helper's own reproductive opportunity.

So they are not always beneficial for the individual.

Can they still benefit the colony?

## Intervention

The intervention is simple.

The sealed environment is the same. Food and water are the same. The physical apparatus is the same. The only thing that changes is who gets helped.

In the transactional world, individuals protect only themselves and their own offspring.

In the kin-only world, individuals also help kin.

In the love condition, individuals also help non-kin.

As a simple relation, the experiment can be read like this.

```text
the range of helping expands
-> offspring get more chances to learn
-> next generation competence remains
-> collapse becomes less likely

required social roles = the places and relationships needed for the colony to keep running
```

At the level of the condition, it looks like this.

```rust
let should_help =
    is_own_child(other)
    || is_kin(other)
    || love_reaches_non_kin;

if should_help {
    help(other);
}
```

If love works, the colony should be less likely to go extinct under the same apparatus. It should also need fewer social roles to keep running without collapse.

That difference is what this note observes.

## Result

In this model, the love condition made collapse less likely.

In the transactional world, the colony needed roughly 32 nest boxes to avoid collapse. The kin-only world remained near the same critical capacity.

In the condition where individuals also helped non-kin, the critical capacity fell to around 16 nest boxes.

Under the same sealed environment, the colony could persist with fewer social roles.

In the harsh 16-box condition, the transactional world went extinct at a high rate. The kin-only world was intermediate. The love condition reduced extinction further.

<figure>
  <img src="/images/research/rat/02/love.png" alt="Comparison of collapse risk in transactional, kin-only, and love conditions">
  <figcaption>Comparison of transactional, kin-only, and love conditions. When helping extends to non-kin, the colony can persist with fewer social roles.</figcaption>
</figure>

Running the same small apparatus side by side makes the difference easier to see.

In the transactional world, the population rises, the life cycle jams, and the colony collapses. In the love condition, transmission is maintained and the colony persists under the same environment.

<figure>
  <img src="/images/research/rat/02/love.gif" alt="Simulation comparing a transactional world and a love condition in an artificial rat colony">
  <figcaption>Same physical apparatus. The transactional world collapses, while the love condition persists.</figcaption>
</figure>

## Which Love Worked

I also tested the four behaviors one by one.

Alloparenting did not help very strongly. Adoption was intermediate. Social buffering reduced extinction substantially.

The strongest behavior was mentorship.

A competent adult passes social competence to a younger individual. That behavior alone suppressed collapse more than adding all four behaviors together.

This is a little surprising.

It seems natural to expect that all four behaviors together would be strongest. But in a small apparatus, social buffering can keep individuals alive longer and thereby maintain crowding. Helping is not always a simple addition.

Mentorship touches the center of the collapse directly.

As the previous note argued, the core of collapse was not headcount but broken transmission. If so, a behavior that passes social competence to the next generation directly repairs that break.

In this model, the most effective form of love was teaching the next generation.

## Interpretation

This is not a neat moral story.

It is not saying that love saves the world.

In fact, the point is almost the reverse.

The behaviors called love here have costs. They reduce the helper's own reproduction a little. They take time. From the viewpoint of one individual, they can be disadvantageous.

But in a closed colony, the failure of other individuals returns as one's own environment.

Offspring fail to learn. Adults become less competent. Teachers disappear. The next generation learns even less.

Once that loop begins, protecting only oneself can eventually destroy the world one lives in.

Helping non-kin cuts part of that loop.

Mentorship, in particular, reopens the pathway through which social competence passes to the next generation.

In this model, love is not the name of an emotion. It is behavior that preserves transmission.

## Limitations

This result is not a direct explanation of real mice or human society.

The model abstracts love into four behaviors. Kinship is simplified. Cost is represented as a reduction in reproductive opportunity.

The extinction rates and critical capacities are values inside a finite simulation. They are not predictions for reality.

This note treats one hypothesis.

In a closed colony, costly help toward non-kin can preserve the transmission of social competence and change the critical conditions of collapse.

The model makes that hypothesis executable.

## Next Question

Why would an individual help non-kin in the first place?

Even if love prevents collapse, that does not yet explain how such behavior remains in the colony.

How does a behavior that can be costly to the individual persist? Why would an individual treat someone outside its family as being on the same side?

The next question is not only the helping behavior itself, but the boundary of who receives help.

What turns a non-kin individual into one of us?

The next note treats the boundary of companionship. It asks whether sharing a name, a sign, a memory, or a story can expand the range of who receives help.

## Notes

1. love: In this note, love means costly social-protection behavior directed toward non-kin. It does not mean the full range of emotion or ethics.
2. kin altruism: Helping kin. This is related to Hamilton's theory of kin selection.
3. social buffering: The reduction of stress responses through the presence or contact of another individual. Here, it is modeled as behavior that reduces chronic stress damage.
4. critical capacity: The minimum capacity of social roles needed for the colony to avoid collapse. The values here are internal to the model, not estimates for reality.
