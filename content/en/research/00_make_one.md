+++
title = "00. Making One Rat"
date = 2026-06-19
description = "A colony can collapse even when resources are available. To move that question in code, first make one rat"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/00-make-one/"
+++

## Overview

In Calhoun's Universe 25, food and water were available. There were no predators. Still, the colony collapsed.

I wanted to move this question with AI Rat.

Change the resources. Change the shape of the box. Change how the individual learns. I wanted to see under which conditions the colony breaks.

But a collapsing colony cannot be built first. If collapse is written directly into the code, it becomes an outcome label, not an observed phenomenon.

So the work begins with one rat.

## First Individual

The first individual only tried actions inside a box. Press a lever. Walk. Get food. Or nothing happens. The next action changes slightly from that result.

The correct answer is not given. The individual has to find, through exchange with the environment, how to reach food.

```python
action = rat.choose_action(world)
outcome = world.apply(action)
rat.learn(outcome)
```

That is the whole structure.

But if this small loop does not work, adding more things later does not help. Senses, needs, voice, and colony behavior all sit on top of it.

After hunger became an internal state, and the lever and food were placed apart, a daily loop began to work. When hungry, the rat moved to the lever, pressed it, walked to the food tray, ate, and became hungry again. The daily balance changed from near-starvation to surplus.

At least inside this small box, it could live by itself.

<figure>
  <img src="/images/research/rat/00/rat_day.gif" alt="One rat living through a day inside a box">
  <figcaption>One rat living through a day. When hungry, it moves to the lever, presses it, walks to the food tray, and eats.</figcaption>
</figure>

## Collapse Around Day 800

I thought it was working.

But looking closely at the learning curve, there was an unnatural drop. Performance had been improving, then fell to zero around day 800.

At first I suspected exploration noise. That was wrong. Even when learning was stopped and the policy was evaluated, it failed at the same point. It was not exploration. The policy itself had broken.

The cause was not the brain. It was observation.

The individual observed only the direction of smell and discarded intensity. A far location and a near location could collapse into the same observation. One observation covered many different places.

If the best action for that observation flipped once, every place sharing that observation broke at the same time.

The fix was simple. Keep olfaction, but add smell intensity to the observation. In an actual rat, smell intensity also changes as the animal approaches the source. Concentration encodes distance. The brain and the learning rule were not changed at all.

<figure>
  <img src="/images/en/research/rat/00/collapse_fix.png" alt="Comparison between direction only and direction plus intensity">
  <figcaption>Direction only (before) and direction plus intensity (after). The deep collapse disappeared, and oscillation was reduced by half.</figcaption>
</figure>

The collapse was not a brain bug.

It was poor sensation.

Complete observation beats a clever brain.

When observation loses part of the world, value becomes unstable and policy breaks. Before adding smarter learning, the world has to be shown clearly enough. Every time a new sense is added, the same question returns: are different things being collapsed into the same observation?

## Next

What I had here was one individual that reacts to the world and changes through results.

It was still thin.

It did not yet sense much, want much, or have companions.

The next step is to add more internal structure to this individual.

## Notes

1. Universe 25: A closed-environment mouse experiment by John B. Calhoun. It is known for a colony that failed to continue under crowding even though food and water were available.
