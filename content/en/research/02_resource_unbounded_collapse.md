+++
title = "02. Collapse Without Resource Shortage"
date = 2026-06-15
description = "Keep food and water available, and tighten only the capacity for social roles"

[extra]
lang = "en"
alternate_url = "/research/02-resource-unbounded-collapse/"
+++

There was food. There was water. No predators. No way out. By all rights it should have kept growing. Yet Calhoun's Universe 25<sup class="term-note">＊</sup> colony broke before it ever filled up.

What set the ceiling? Not food, not water, not space. Something quieter: who can raise young where, and who can learn from whom. Call it the colony's capacity for social roles.

In 00 I made one rat. In 01 I made a colony. Now I can finally look for where it breaks. Universe 25 is the backdrop, not something I reproduce. I narrow it to one question. Is collapse set by resources, or by capacity?

Writing collapse into the code is cheating. Make rats stop breeding when crowded, make mothers abandon care, spawn rats that neither fight nor breed past some density. Do that and the colony collapses. Of course it does; I inserted it. But then I can't tell whether collapse happened or whether I just pinned a label on it. I want the opposite: no state called "collapse" anywhere in the code, and watch whether it appears on its own from ordinary failures of daily life.

So first I build a colony that doesn't break. Each rat has a life cycle: mature, take territory, court, give birth, raise young, learn from adults. And ways to fail: no territory, getting isolated, fertility worn down by stress, no nearby adult to learn from. With enough capacity, this colony grows, settles, and the young learn. No collapse mechanism anywhere yet.

The only thing I change is the capacity. Food and water stay unlimited; I tighten only the capacity that territory, parenting, and learning need. The core is simple.

```python
crowding = population / social_role_capacity
learning_rate = max(0.0, 1.0 - crowding)

next_competence = learning_rate * competent_adult_ratio
```

If the colony grows while capacity stays fixed, there is less to go around per rat. Without room, a young rat can't learn beside a capable adult. A rat that didn't learn stays poor at it as an adult. So the next generation learns even less. The loss compounds across generations.

Tighten the capacity, and the colony collapsed. From outside, plenty of rats remain; the space isn't even full. But inside, more rats fail to take territory, parenting turns unstable, capable adults thin out, and the young stop learning.

<figure>
  <img src="/images/research/rat/02/behavioral_sink.gif" alt="Collapse process in an AI rat colony with finite capacity for social roles">
  <figcaption>A condition with finite capacity. While many individuals remain, the life cycle jams and non-reproductive individuals accumulate.</figcaption>
</figure>

Here's the interesting part. Nobody wrote "make rats that neither fight nor breed." Yet those rats appeared on their own, out of accumulated failure. Not a planted label, but something that emerged. Close to what Calhoun called beautiful ones<sup class="term-note">＊</sup>. A colony with enough capacity survived; a colony with tightened capacity collapsed even on unlimited food. The condition for collapse wasn't a resource shortage. It was a shortage of capacity.

And cutting the food stopped the collapse.

It's counterintuitive. Less food should make life harder. But with less food, the population caps earlier, before it overshoots the capacity. Abundance doesn't remove every constraint; it only changes which one is left standing last. Here, the last one wasn't food. It was capacity.

Until now I set the capacity by hand. That's still abstract. In Universe 25, capacity comes from the apparatus: a closed pen, nests around the edge, an open floor in the middle, a boundary you can't cross. So I stopped handing out capacity and let it be decided by which nests a rat could take and hold. I changed nothing about the rats, only the shape of the world. Rats that couldn't take a nest spilled into the middle. The space was open. The space usable for raising young was not.

<figure>
  <img src="/images/research/rat/02/social_niche.gif" alt="AI rats gathering in the center under an apparatus-like environment">
  <figcaption>An apparatus-like condition. Rats that cannot take nests gather in the center, and the shortage of socially usable places becomes visible in space.</figcaption>
</figure>

Vary the number of nests and a boundary appears between sizes that collapse and sizes that survive. That number lives inside the model, not a prediction about the world. Still, the point is clear. Carrying capacity<sup class="term-note">＊</sup> is not set by food alone. It also turns on who can raise young where, and who can learn from whom.

The first thing that broke in this model was not the number of rats. It was the passing-on to the next generation. Numbers linger a while. But capable adults thin out, the young stop learning, and a rat that didn't learn can't become the adult who teaches the next one. Once that loop turns, easing the crowding no longer helps: by then the ones who could teach are gone. The colony's collapse wasn't simply numbers falling. It was the thread to the next generation snapping.

To be clear: this is not a faithful reproduction of Universe 25. The apparatus and the behavior are heavily abstracted, and the interpretation itself is debated. What I show is one hypothesis. In a closed colony with resources removed, a shortage of capacity for social roles can stop the developmental loop of learning and reproduction. The model only makes that hypothesis movable.

If what breaks is the passing-on, the question is set. What reconnects it? Investing in your own offspring? Helping blood kin? Or paying a cost even for young that aren't yours? Next, I take that up as love. Not as a feeling, but as costly helping.

## Notes

1. Universe 25: A closed-environment mouse experiment by John B. Calhoun. Even though food and water were available, reproduction and social behavior broke down under crowding, and the colony failed to continue.
2. Beautiful ones: Calhoun's term for individuals that did not engage in fighting or reproduction and were biased toward self-maintenance behaviors such as grooming.
3. Carrying capacity: The upper limit of individuals or activity an environment can maintain. It is usually discussed in terms of food or space. Here, capacity for social roles is also treated as a limiting factor.
