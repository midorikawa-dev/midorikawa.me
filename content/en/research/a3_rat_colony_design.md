+++
title = "Appendix C. The Design of the Rat Colony"
date = 2026-06-20
description = "Who you meet is decided not by the individual but by the space of the box."

[extra]
lang = "en"
alternate_url = "/research/a3-rat-colony-design/"
+++

In Appendix A and B, the individual changed its behavior from experience and kept it in memory. Both work in the space between one rat and another. But who you meet is not something the individual decides. The shape of the colony, that is, the space, decides it.

The space is not a backdrop. With the same individual, change the shape of the box<sup class="term-note">＊</sup> and the shape of the society changes. The rats you meet easily, and the ones you rarely meet. That divide steers learning, trust, and betrayal alike. Here I assemble the vessel of the rat colony itself.

## The box is not a backdrop

The box here is not a reproduction of the Skinner box<sup class="term-note">＊</sup>. It is the space for seeing where an individual meets, where it avoids, where it learns. Wide, and they scatter; narrow, and they collide. If the corridor is thin, movement jams; if the nests are split apart, small clusters form. The box is an environment and at the same time a condition that narrows whom you meet.

The colony is not completed all at once. The individual moves, meets, helps or avoids or betrays, the result stays in memory, and the next action shifts a little. That repetition is at the center.

```julia
struct Colony
    space::BoxSpace        # the box made of nests, corridors, and the center
    rats::Vector{Rat}
end

function step!(colony::Colony)
    for rat in colony.rats
        choose_action!(rat, colony.space)   # the shape of the box decides whom you meet
        update_memory!(rat)                 # the result of the meeting changes the next action
    end
end
```

## The space decides whom you meet

Change the shape of the box and, with the same individual, the behavior changed. In a thin corridor, contact rises, and both cooperation and betrayal rise. When the nests are split apart, relationships stay local. You meet the same rat again and again, so trust and memory take hold. When the center is crowded, you cannot choose your partner. Whom you meet does not settle, and relationships do not accumulate.

The space was not appearance. The space was making the learning conditions of the colony.

## The role is inside the shape of the box

What I am building in the rat colony is not just a gathering of individuals. It is a field where individual, space, memory, and behavior update one another.

A social role is not handed out first as a name. You are in the same place, you meet the same rat, you help again and again, you are avoided again and again. From that repetition, something like a role comes into view<sup class="term-note">＊</sup>. The role is not only inside the individual; it is in the shape of the box and in the history of meetings. There is no body, no smell, no sound, no development, no fatigue of a real rat in here. Even so, I can move space and the way of meeting as variables. That is where the use of this model lies.

The phenomena of the main thread, that is, collapse, love, the voice, the record, companions, and reputation, run on top of these inner workings (experience, memory, space). What happens on the surface, and what drives it from behind. The rat colony is made of both.

## Notes

1. Box: The space where individuals move, meet, and make contact. It is made of nests (places easy to return to), corridors (thin paths that narrow movement), and the center (the place where rats gather and contact rises).
2. Skinner box: An experimental apparatus for observing animal behavior. The box here is not a reproduction of it, but an abstract space for organizing interaction.
3. Self-organization: That even without giving roles from above, a structure like rank or role arises from the repetition of meetings. The same line as the emergence seen in 00 and 01.
