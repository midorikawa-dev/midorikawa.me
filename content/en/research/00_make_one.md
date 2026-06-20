+++
title = "00. Making One Rat"
date = 2026-06-13
description = "To study collapse when resources are still available, start by making one rat"

[extra]
lang = "en"
alternate_url = "/research/00-make-one/"
+++

Plenty of food and water. No predators. You just can't leave. Even so, the colony collapses — that is what happened to Calhoun's Universe 25<sup class="term-note">＊</sup>.

Resources were enough, so why? I want to check it in code. Code that presupposes collapse gives no observation — only an ending decided in advance. So I start upstream.

First I build one rat that knows nothing. It moves, presses a lever, takes the result. I never give it the answer. The result only nudges what it picks next.

```python
action = rat.choose_action(world)
outcome = world.apply(action)
rat.learn(outcome)
```

This short cycle is the base of everything I build later. Senses, needs, voice, the colony — all of it sits on top.

Soon the rat learned: when hungry, go to the lever, press it, eat. Its daily balance moved from nearly starving to positive. At least inside this small box, it can keep itself alive.

<figure>
  <img src="/images/research/rat/00/rat_day.gif" alt="One rat living through a day inside the box">
  <figcaption>One day in the box. When hungry, the rat goes to the lever, presses it, and walks to the food port to eat.</figcaption>
</figure>

It was working, I thought.

**On day 800, the score suddenly dropped to zero.**

I suspected exploration noise, but no. Stop the learning, only evaluate, and it still failed at the same spot. What had broken was the way it chose actions.

The cause was not the learner. It was the input. The rat read only the direction of the smell, not its strength. So food right next to it and food far away became the same input whenever the direction matched.

One input points at many places at once. When the best action for that input flips even once, every place sharing that input breaks at the same time. That is why the drop was sudden, and total.

The fix was one line: add smell strength to the input. Real rats, too, smell more strongly the closer they get.

<figure>
  <img src="/images/research/rat/00/collapse_fix.png" alt="Comparison between direction only and direction plus strength">
  <figcaption>Direction only (before) and direction plus strength (after). The deep collapse is gone, and the oscillation is cut roughly in half.</figcaption>
</figure>

Fix the input before you fix the model. Are things that should be distinct ending up as the same value? I check this every time I add a new sense. It became a rule.

Next, I grow this one rat into a colony.

## Notes

1. Universe 25: A closed-environment mouse experiment by John B. Calhoun. Even though food and water were available, reproduction and social behavior broke down under crowding, and the colony failed to continue.
