+++
title = "00. Making One Rat"
date = 2026-06-16
description = "To study collapse when resources are still available, start by making one rat"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/00-make-one/"
+++

## Overview

In Calhoun's Universe 25<sup class="term-note">＊</sup>, food and water were available. There were no predators. Still, the colony collapsed. That is the part I wanted to test in code: if resources are not the explanation, where does the colony break? I want to change the resources, the shape of the box, and the learning setup, and look for the boundary where collapse begins.

But I cannot start by writing a collapsing colony. If collapse is put directly into the code, it is no longer an observed result. The ending has already been decided. So I started much earlier. I started with one rat.

## The First Rat

The first agent only tried actions inside a box. It could press a lever, move, get food, or get nothing. The result slightly changed how it chose the next action. I did not give it the correct answer. It had to find, through repeated action and result, which behavior led to food.

```python
action = rat.choose_action(world)
outcome = world.apply(action)
rat.learn(outcome)
```

This loop of input, action, result, and update becomes the base of everything else. Senses, needs, voice, and the colony all sit on top of this update loop.

When hunger became an internal state, and the lever was separated from the food port, a feeding routine appeared. The rat got hungry, went to the lever, pressed it, walked to the food port, ate, and became hungry again. The daily balance moved from almost starving to positive. At least inside this small box, it could finish a day without dying.

<figure>
  <img src="/images/research/rat/00/rat_day.gif" alt="One rat living through a day inside the box">
  <figcaption>One day in the box. When hungry, the rat goes to the lever, presses it, walks to the food port, and eats.</figcaption>
</figure>

## The Collapse at Day 800

Feeding seemed stable. Then the learning curve had a strange hole. The score had been rising, but around day 800 it suddenly fell to zero.

At first I suspected exploration noise. That was not it. Even when learning was stopped and the policy was only evaluated, it failed in the same place. The problem was not exploration. The way actions were chosen had broken.

The cause was not the learner. It was the observation. The rat observed only the direction of the smell and threw away its strength. So locations far from the food source and locations near it were treated as the same observation. One observation covered many different places. If the action tied to that observation changed once, action choice broke at all of those places at the same time. That is why the drop was sudden and global.

The fix was small. I kept olfaction itself and added smell strength to the observation. Real rats also experience stronger smell as they approach the source. I did not change the learner or the learning rule.

<figure>
  <img src="/images/research/rat/00/collapse_fix.png" alt="Comparison between direction only and direction plus strength">
  <figcaption>Direction only (before) and direction plus strength (after). The deep collapse disappears, and the oscillation is cut roughly in half.</figcaption>
</figure>

The collapse was not a bug in the learner. The observation did not represent the difference in distance to food. When an observation cannot express a necessary difference, values become unstable and action choice breaks. Before adding a more complex learning rule, first put the necessary differences into the observation. Every time I add a new sense, I check whether states that need to be separated have been merged into the same observation.

## Next

What exists here is one rat that chooses actions from observations and updates that choice from results. It is still minimal. Its only sense is food smell, its only internal state is hunger, and it has no companions.

Next, I will make more than one rat and add interactions between individuals.

## Notes

1. Universe 25: A closed-environment mouse experiment by John B. Calhoun. Even though food and water were available, reproduction and social behavior broke down under crowding, and the colony failed to continue.
