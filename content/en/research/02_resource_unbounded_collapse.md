+++
title = "02. Collapse Without Resource Shortage"
date = 2026-06-15
description = "Keep food and water available, and make only the capacity for social roles finite"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/02-resource-unbounded-collapse/"
+++

## Overview

There is food. There is water. There are no predators. Nobody can leave. A colony under those conditions seems as if it should keep growing. But it does not. It breaks. And the limiting factor was not food or physical space. It was the capacity for social roles: who can reproduce where, and who can learn from whom.

In 00 I made one rat. In 01 I turned it into a colony. Now I can finally ask under what condition that colony breaks. The background is Calhoun's Universe 25<sup class="term-note">＊</sup>, but this is not a full reproduction. I narrow the question to one condition: is collapse caused by resource shortage, or by the capacity for social roles?

## Collapse Must Not Be Written In

The easiest bad solution is to write collapse directly into the code. If density rises, make rats non-reproductive. Pretend maternal behavior broke. Create beautiful ones<sup class="term-note">＊</sup> with a threshold. Then the colony collapses. Of course it does; collapse was already inserted.

That does not tell us whether collapse happened or whether I only attached a label. What I needed was a model where no state called collapse exists in the code, and a similar condition appears from ordinary failures in the life cycle.

## Build a Healthy Colony First

So I gave the rats a life cycle. They mature, take territory, court, give birth, raise offspring, and young rats learn social ability from adults. There are also ways to fail: no territory, isolation, chronic stress reducing fertility, or no competent adult nearby for learning.

The important part is that this life cycle does not break by itself. When enough roles exist, the colony grows, stabilizes, offspring learn, and almost no non-reproductive individuals appear.

No mechanism for collapse has been added yet.

## Change Only One Thing

Food and water remain unlimited. The only thing I change is the capacity needed for territory, courtship, parenting, and social learning. The core relationship can be written like this.

```python
crowding = population / social_role_capacity
learning_rate = max(0.0, 1.0 - crowding)

next_competence = learning_rate * competent_adult_ratio
```

When capacity is not enough, the share of young rats that can learn from competent adults goes down. Young rats that cannot learn do not become competent adults. Then the next generation has even fewer adults to learn from. The decline comes back across generations.

## Space Is Still Open, But the Colony Breaks

When the capacity for roles is restricted, the colony collapses. From the outside, many individuals remain. Physical space is not full. But inside the system, more rats fail to take territory, parenting becomes unstable, competent adults decrease, and young rats stop learning.

<figure>
  <img src="/images/research/rat/02/behavioral_sink.gif" alt="Collapse process in an AI rat colony with finite social-role capacity">
  <figcaption>A condition with finite role capacity. While many individuals remain, the life cycle jams and non-reproductive individuals accumulate.</figcaption>
</figure>

No one wrote "create beautiful ones" into the code. Still, withdrawn individuals that neither fight nor reproduce appear from the accumulation of failures. That is not a planted label. It is an emergent result.

The comparison is clear. A colony with enough roles continues. A colony with restricted roles collapses even with unlimited food. The condition for collapse is not resource shortage. It is shortage of role capacity.

## Less Food Can Stop the Collapse

Then something strange happens. Limiting food can stop the collapse. That is counterintuitive. Less food should make life harder.

But with less food, population growth hits a ceiling earlier, before it overshoots the capacity for roles. Abundance does not remove every constraint. It changes which constraint remains last. In this model, the last constraint was not food. It was social role capacity.

## Deriving Capacity From the Apparatus

So far, capacity has been given as a number. That is still abstract. In Universe 25, capacity comes from the apparatus: a closed enclosure, nests around the edge, an open central floor, and a boundary that cannot be crossed.

So I stopped giving capacity by hand and let it be determined by which nests could be taken and defended. I did not change the rats. I changed only the shape of the world. As a result, rats that could not take nests spilled into the center. Space was still available. But space that could be used for reproduction and parenting was not.

<figure>
  <img src="/images/research/rat/02/social_niche.gif" alt="AI rats gathering in the center under an apparatus-like environment">
  <figcaption>An apparatus-like condition. Rats that cannot take nests gather in the center, and the shortage of socially usable places becomes visible in space.</figcaption>
</figure>

Changing the number of nest boxes produced a boundary between conditions that collapsed and conditions that continued. This boundary belongs to this model, but the relationship is clear. Carrying capacity<sup class="term-note">＊</sup> is not decided by food alone. It also depends on who can reproduce where, and who can learn society from whom.

## What Collapsed Was Transmission

In this model, the first thing to collapse was not population count. It was the transmission of social ability.

The number of individuals remains for a while. But competent adults decrease, young rats stop learning, and those young rats cannot become the adults who teach the next generation. Once this loop begins, the colony cannot easily recover even if density later falls. By then, the adults who can teach are already gone.

Colony collapse is not only a decline in population. It is the breakage of the path that carries ability to the next generation.

## Limits

This is not a complete reproduction of Universe 25. The apparatus and the behavior of mice or rats are heavily abstracted. The interpretation of Universe 25 itself is also debated.

What I show here is one hypothesis: in a closed system where resource constraints are removed, lack of capacity for social roles can break social learning during development and the reproductive life cycle. This model makes that hypothesis movable.

## Next

If the colony breaks because transmission is cut, the next question is simple. What can reconnect that break? Parental investment, kin altruism, or behavior that spends cost even on non-kin?

Next I will handle love, not as a feeling, but as costly helping behavior.

## Notes

1. Universe 25: A closed-environment mouse experiment by John B. Calhoun. Even though food and water were available, reproduction and social behavior broke down under crowding, and the colony failed to continue.
2. Beautiful ones: Calhoun's term for individuals that did not engage in fighting or reproduction and were biased toward self-maintenance behaviors such as grooming.
3. Carrying capacity: The upper limit of individuals or activity an environment can maintain. It is usually discussed in terms of food or space. Here, capacity for social roles is also treated as a limiting factor.
