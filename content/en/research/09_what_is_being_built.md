+++
title = "09. What Is Being Built?"
date = 2026-06-22
description = "What I am building is not a reproduction of rats. It is a small observation device that moves the conditions for whether a colony collapses or holds."

[extra]
lang = "en"
alternate_url = "/research/09-what-is-being-built/"
+++

From 00 to 08, I started with one rat, built a colony, broke it, and tied it back together. At the end, I want to set out what I have been building.

What I am building is not a reproduction of rats. It is a small observation device that moves the conditions one at a time and watches whether the colony collapses or holds. Each time I added an apparatus, the edge of collapse moved, and I read how it moved. Not reproduction, but ordering.

## As a single arc

It looks like scattered experiments, but they are connected.

In 00 and 01, I made one rat and added only local rules. Rank, colony, territory, and breeding came out from the colony's side without being designed. A structure I did not design stands up: emergence<sup class="term-note">＊</sup>.

In 02, I broke that colony. Even when food is enough, it collapses once the society's capacity for social roles runs out. The first thing to break is not the number of individuals but what gets passed to the next generation. In 03, when help reached even those with no connection, and teaching in particular, collapse drew further off.

From 04 to 06, I followed that "thing being passed." What is passed rides on the voice (04), dies together with the teacher who knows it (05), and outlives the teacher once it becomes records and ritual (06). In 07, when the same tag was shared, mutual help reached beyond kinship. In 08, when individuals were watched, free riding was held down, and cooperation remained.

Inside this arc, I also moved the ability that changes with experience, the length of memory, and the design of space. But that strays a little from the main thread; it is the back side of the model. So I kept it separate from the main text. I kept them in an appendix.

None of these are separate stories. Within the same colony, the force that breaks and the force that connects act on each other.

## Moving things, as a method

A model<sup class="term-note">＊</sup> makes reality small. Made small, what I changed becomes visible.

I do not write collapse into the device directly. Write "no young when crowded," and that is not an observation but a decided ending. So I write collapse nowhere, move one condition, and watch whether it appears on its own. Change the resources. Change the range of love. Change the tag. Change the records. Change the way they are watched. Each time, the colony's behavior changes.

```julia
# Don't write the answer. Move one condition and watch whether the colony collapses or holds.
colony = Colony(space, rats)
for condition in [:capacity, :love, :tag, :record, :watching]
    result = simulate(colony; vary = condition)
    observe(result)
end
```

What matters is not holding the answer from the start. It is being able to see, with the eyes, what changes when a condition is moved.

## Not reproduction, but ordering

Real rats have bodies, smells, voices, development, and fatigue. The rats here have little of that. So this model cannot explain real rats directly. What I am watching is not reality itself but the conditions under which relations collapse or remain.

This attempt is also close to artificial life<sup class="term-note">＊</sup>. But the goal is not to build a whole living thing. I place a simple individual, give it an environment, update its behavior, and let experience accumulate. From that repetition, I watch whether colony-like behavior comes out. I do not want to judge whether it is alive. I want to see from what conditions the things that look like life and society stand up.

What is love. What is a companion. What is trust. What is collapse. I cannot define these at once. But I can place them as variables. I can place them, move them, break them, repair them, and look again. As the smallest device for that, I am building a colony of rats.

From here, it splits in two: making the model more accurate, and turning what was seen into words. Body, smell, sound, development. There are still many details I have not put in. Even so, whether the colony remains or collapses, and what works at that edge, can already be moved and seen. The colony of rats is a small observation device for that.

## Notes

1. Emergence: When the whole structure that was not designed (rank, colony, territory, and so on) stands up from simple local rules.
2. Model: Something that takes out only part of reality and makes it movable as variables. Unlike reproduction, it is a tool for seeing the correspondence between the conditions changed and the results.
3. Artificial life: The field that studies life-like behavior within artificial environments or computation. The name was set up by Langton and others, and it includes even "life as it could be."
