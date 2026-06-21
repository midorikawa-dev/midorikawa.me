+++
title = "00. Making One Rat"
date = 2026-06-13
description = "To study collapse when resources are still available, start by making one rat"

[extra]
lang = "en"
alternate_url = "/research/00-make-one/"
+++

Food and water are plentiful. No predators. And still a colony of rats breaks. That was Calhoun's Universe 25<sup class="term-note">＊</sup>. I want to check why, in my own code.

But I won't build the collapse directly. Write collapse into the code and it is no longer an observation; it is an ending decided in advance. So I start far upstream. The smallest apparatus is a single rat.

I put one rat in a box. It knows neither where the food is nor what the lever does. All it can do is try. It moves, presses a lever, takes the result. The result only nudges what it picks next.

```julia
action = choose_action(rat, world)
outcome = apply(world, action)
learn!(rat, outcome)
```

I never give it the answer. I just run this short loop, the base of everything I build later. After a while, the rat learned: when hungry, go to the lever, press it, eat. Its daily balance moved from nearly starving to positive.

<figure>
  <img src="/images/research/rat/00/rat_day.gif" alt="One rat living through a day inside the box">
  <figcaption>One day in the box. When hungry, the rat goes to the lever, presses it, and walks to the food port to eat.</figcaption>
</figure>

Now I change one condition. I make hunger an internal state and pull the lever apart from the food. The apparatus gets one step more complex. I run it again, and watch.

For a while it worked. On day 800, the score suddenly dropped to zero.

I suspected exploration noise. No. Stop the learning, only evaluate, and it still failed at the same spot. What had broken was the way it chose actions.

I move my view from the learner to the input. The rat reads only the direction of the smell, not its strength. So food right next to it and food far away become the same input whenever the direction matches.

Here is what happens. One input points at many places at once. When the best action for that input flips even once, every place sharing that input breaks at the same time. That is why the drop was sudden, and total.

I fix one thing in the apparatus: I add smell strength to the input. Real rats, too, smell more strongly the closer they get. I changed nothing in the learner. The collapse was gone.

<figure>
  <img src="/images/research/rat/00/collapse_fix.png" alt="Comparison between direction only and direction plus strength">
  <figcaption>Direction only (before) and direction plus strength (after). The deep collapse is gone, and the oscillation is cut roughly in half.</figcaption>
</figure>

Fix the input before you fix the model. Are things that should be distinct ending up as the same value? I check this every time I add a new sense.

The next apparatus holds one more rat. A colony is built on top of this one.

## Notes

1. Universe 25: A closed-environment mouse experiment by John B. Calhoun. Even though food and water were available, reproduction and social behavior broke down under crowding, and the colony failed to continue.
