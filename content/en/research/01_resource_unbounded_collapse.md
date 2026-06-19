+++
title = "01. Collapse Without Resource Shortage"
date = 2026-06-18
description = "Social-role saturation and life-cycle breakdown in an artificial rat colony"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/01-resource-unbounded-collapse/"
+++

## Overview

I used an artificial rat colony to study collapse without resource shortage.

Here, collapse does not simply mean that food or water runs out and the population declines. The resources are still there. Food is available. Water is available. Even so, reproduction, parenting, and social learning begin to fail, and the colony no longer carries itself into the next generation.

The reference point is Calhoun's Universe 25. This note does not try to reproduce that experiment directly. Instead, it asks whether social roles and learning pathways, rather than resources alone, can become conditions for collapse.

## Question

Why would a colony collapse when resources are sufficient?

Population collapse is usually explained through shortage. Food runs out. Water runs out. Space runs out. Predators or disease reduce the population.

In Universe 25, however, food and water were available, predators were absent, and the population could not disperse. The colony grew, stagnated, and eventually collapsed.

I want to treat this not as a moral lesson or metaphor, but as an executable model.

The question is simple.

Can a colony collapse when resources are sufficient, simply because social roles become jammed?

## First Model

In the first model, food and water were unlimited. Individuals increased, density rose, births fell, and the colony collapsed.

But that model had a weakness.

Some post-collapse states were classified by working backward from the outcome. Individuals under high density stress were treated as non-reproductive. Maternal collapse and beautiful-ones-like states were attached through thresholds.

That can work as a diagram of the phenomenon. It is weaker as a test of emergence.

If collapse is written into the code, collapse will appear.

What I needed to test was whether a similar structure would still appear after removing the collapse label, letting it arise from the life process of individuals.

## Life-Cycle Model

I then gave each individual a reproductive and social life cycle.

Sexual maturation. Territory acquisition. Courtship. Mating. Birth. Parenting. Offspring learning social competence from adults.

I also gave the model failure paths.

An individual may fail to acquire territory. It may fail at courtship. It may become isolated. Chronic stress may reduce reproductive ability. Offspring may fail to learn social competence when competent adults are not nearby.

The important point is that this life cycle does not collapse by itself.

When social roles are abundant, the population rises, stabilizes, and social competence is maintained across generations. In other words, the model is not broken from the start.

Only after confirming that healthy condition did I make social roles finite.

## Intervention

The intervention is small.

Food and water remain unlimited. What changes is the capacity of social roles required for territory, courtship, parenting, and social learning.

When social roles are sufficient, the life cycle closes.

When social roles are insufficient, transitions in the life cycle begin to jam.

The experiment asks whether that difference is enough to determine collapse.

At its core, the relation is just this.

```python
crowding = population / social_roles
learning  = max(0.0, 1.0 - crowding)
next_competence = learning * competent_adult_ratio
```

If the population grows while the number of social roles stays fixed, crowding increases. As crowding increases, offspring have fewer opportunities to learn from competent adults. If those opportunities decrease, the next generation's social competence decreases as well.

That simple relation returns across generations.

## Result

When social roles were made finite, the colony collapsed.

More individuals failed to acquire territory. Courtship and parenting became unstable. Competent adults decreased. Offspring failed to learn social competence. The next generation of adults became less competent still.

This loop progressed while the population was still large.

From the outside, the colony still looked present. Inside, however, the functions needed for reproduction and learning were being lost.

Individuals accumulated in an absorbing state called WITHDRAWN. This resembles Calhoun's beautiful ones, but it was not attached as an outcome label. It appeared from the accumulation of failures in territory, courtship, social learning, and stress.

<figure>
  <img src="/images/research/rat/01/behavioral_sink.gif" alt="Collapse process in an artificial rat colony with saturated social roles">
  <figcaption>Condition with saturated social roles. While population remains visible, the life cycle jams and non-reproductive states accumulate.</figcaption>
</figure>

In the comparison condition, colonies with abundant social roles survived. Colonies with finite social roles collapsed even though food and water were unlimited.

In this model, social-role saturation functioned as a condition for collapse independent of resource shortage.

## The Food-Restriction Paradox

When food was restricted, collapse was suppressed.

This is counterintuitive. Less food should make survival harder.

But food restriction keeps the population lower. Growth stops before the colony greatly exceeds the capacity of its social roles. As a result, the colony is less likely to reach the density at which the life cycle breaks across the board.

Unlimited food is therefore not simply a better condition.

It removes density-lowering forces such as starvation, predation, and dispersal, exposing a social limit that was otherwise hidden.

In this sense, abundance can be protective, but it can also make collapse possible.

## From Apparatus

At this stage, the model was still somewhat abstract.

The number of social roles was being given as a parameter. In the actual Universe 25 apparatus, role capacity comes from the geometry of the environment.

A closed enclosure. Defensible nests along the perimeter. An open central floor. A boundary that prevents dispersal.

I built a simplified version of that structure. The capacity of social roles was determined by which individuals could occupy and defend which nests. The individual life-cycle rules were left unchanged.

Individuals unable to secure nests accumulated in the center. The space was not completely full. But socially usable places were insufficient.

<figure>
  <img src="/images/research/rat/01/social_niche.gif" alt="Artificial rat colony accumulating in the center of a physical apparatus">
  <figcaption>Physical-apparatus condition. Individuals unable to secure nests accumulate in the center, making the shortage of socially usable places visible in space.</figcaption>
</figure>

When I varied the number of nest boxes, apparatus sizes that tended to collapse separated from apparatus sizes that tended to persist.

In this model, collapse became likely below roughly 32 nest boxes, while 96 and above remained stable.

This value is not a direct estimate for reality. It is a critical capacity inside the model.

The implication is still clear.

Carrying capacity is not determined only by food. It also depends on the capacity of social roles: who can reproduce where, and from whom the young can learn.

## Interpretation

What collapsed first in this model was not headcount.

What collapsed was transmission.

The population remains for a while. But competent adults decrease. Offspring fail to learn. Those offspring cannot become the next generation of teachers.

Once this loop begins, recovery is difficult even after density falls. By the time density is low again, the teachers are already gone.

The colony's collapse is not just population decline.

It begins when what should be passed to the next generation is lost.

## Limitations

This model does not reproduce the full behavior of real mice or rats. Movement, sensation, learning, and reproduction are all abstracted.

It also does not claim quantitative agreement with Calhoun's experimental data. The interpretation of Universe 25 itself remains debated.

This note treats one hypothesis.

In a closed system where resource constraints are removed, saturation of social roles can break developmental social learning and the reproductive life cycle.

The model makes that hypothesis executable.

## Next Question

If the core of collapse is a break in transmission, the next question becomes simple.

What reconnects that broken transmission?

Is parental investment enough? Is kin-directed altruism enough? Can costly behavior toward unrelated offspring prevent collapse?

The next note defines love not as an emotion, but as behavior that supports the colony: social buffering, mentorship, alloparenting, and adoption. The question is whether those behaviors change the critical conditions of the behavioral sink.

## Notes

1. Universe 25: John B. Calhoun's experiment on mouse population collapse in a resource-rich closed environment.
2. beautiful ones: Calhoun's term for individuals reported to avoid fighting and reproduction, spending much of their behavior on self-maintenance such as grooming.
3. carrying capacity: The upper limit of population size or activity that an environment can maintain. It is often discussed in terms of food or space; here, the capacity of social roles is also treated as a limiting factor.
