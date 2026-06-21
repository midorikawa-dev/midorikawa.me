+++
title = "02. Collapse Without Resource Shortage"
date = 2026-06-15
description = "Keep food and water available, and tighten only the capacity for social roles"

[extra]
lang = "en"
alternate_url = "/research/02-resource-unbounded-collapse/"
+++

There is food. There is water. No predators. No way out. By all rights it should keep growing. Yet Calhoun's Universe 25<sup class="term-note">＊</sup> colony broke before it ever filled up.

What set the ceiling? Not food, not water, not space. Who can raise young where, and who can learn from whom: the colony's capacity for social roles.

In 00 I made one rat. In 01 I made a colony. Now I look for where it breaks. One question. Is collapse set by resources, or by capacity?

I never write collapse into the apparatus. Say "stop breeding when crowded" and the colony collapses, but that is not an observation; it is an ending decided in advance. So I write no collapse anywhere, and watch whether it appears on its own from ordinary failures of daily life.

First I build a colony that doesn't break. Each rat has a life cycle: grow up, take territory, give birth, raise young, learn from adults. And ways to stumble: no territory, getting isolated, fertility worn down by stress, no adult nearby to learn from. With enough capacity, the colony grows, settles, and the young learn. No collapse mechanism yet.

The only thing I change in the apparatus is the capacity. Food and water stay unlimited; I tighten only the room that territory, parenting, and learning need.

```julia
crowding = population / social_role_capacity
learning_rate = max(0.0, 1.0 - crowding)

next_competence = learning_rate * competent_adult_ratio
```

If the colony grows while capacity stays fixed, there is less to go around. Without room, a young rat can't learn beside a capable adult. A rat that didn't learn stays poor at it, and that poorness passes to the next generation.

Tighten the capacity, and the colony collapsed. From outside, plenty of rats remain; the space is open. But inside, rats fail to take territory, parenting turns unstable, capable adults thin out, and the young stop learning.

<figure>
  <img src="/images/research/rat/02/behavioral_sink.gif" alt="Collapse process in a rat colony with finite capacity for social roles">
  <figcaption>A condition with finite capacity. While many individuals remain, the life cycle jams and non-reproductive individuals accumulate.</figcaption>
</figure>

Nobody wrote "make rats that neither fight nor breed." Yet those rats appeared on their own, out of accumulated failure. Close to what Calhoun called beautiful ones<sup class="term-note">＊</sup>. Enough capacity and the colony survived; tightened capacity and it collapsed, even on unlimited food. The condition for collapse was not a resource shortage. It was capacity.

Now I change one more condition: I cut the food. The collapse stopped.

It's counterintuitive. But with less food, the population caps earlier, before it overshoots the capacity. Abundance doesn't remove constraints; it only changes which one is left standing last. The last one was not food. It was capacity.

Next I change the apparatus itself. Instead of giving capacity as a number, I let it come from the nest layout: a closed pen, nests around the edge, an open floor in the middle. I change nothing about the rats, only the shape of the world. Run it, and rats that couldn't take a nest spilled into the middle. The space was open. The space for raising young was not.

<figure>
  <img src="/images/research/rat/02/social_niche.gif" alt="rats gathering in the center under an apparatus-like environment">
  <figcaption>An apparatus-like condition. Rats that cannot take nests gather in the center, and the shortage of socially usable places becomes visible in space.</figcaption>
</figure>

Vary the number of nests and a boundary appears between sizes that collapse and sizes that survive. Carrying capacity<sup class="term-note">＊</sup> is not set by food alone. It also turns on who can raise young where, and who can learn from whom.

The first thing that broke was not the number of rats. It was the passing-on to the next generation. Numbers linger a while. But those who could teach thin out, the young stop learning, and they can't become the ones who teach next. Once that loop turns, easing the crowding no longer helps. The ones who could teach are already gone.

Collapse was not numbers falling. It was the thread to the next generation snapping.

This is not a reproduction of Universe 25. The apparatus and the behavior are heavily abstracted. What I show is one hypothesis: in a closed colony with resources removed, a shortage of capacity can stop the loop of learning and reproduction. The model only makes that movable.

If what breaks is the passing-on, the question is set. What reconnects it? Investing in your own offspring? Helping blood kin? Or paying a cost even for young that aren't yours? The next apparatus takes that up as love. Not as a feeling, but as costly helping.

## Notes

1. Universe 25: A closed-environment mouse experiment by John B. Calhoun. Even though food and water were available, reproduction and social behavior broke down under crowding, and the colony failed to continue.
2. Beautiful ones: Calhoun's term for individuals that did not engage in fighting or reproduction and were biased toward self-maintenance behaviors such as grooming.
3. Carrying capacity: The upper limit of individuals or activity an environment can maintain. It is usually discussed in terms of food or space. Here, capacity for social roles is also treated as a limiting factor.
