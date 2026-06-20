+++
title = "06. Records and Ritual"
date = 2026-06-19
description = "If knowledge is placed outside the teachers, does culture survive even when the teachers are gone?"

[extra]
lang = "en"
alternate_url = "/research/06-cultural-archive/"
+++

## Overview

What 05 showed is that knowledge dies together with the adults who hold it. When the teachers are gone, the most complex culture goes first, lost without being rebuilt.

If so, there is a move available. Place knowledge outside the teachers. Not only inside someone's head, but written down somewhere on the outside. Then, even when the individuals who remembered it are gone, the knowledge might remain. In this article I test that. Let me say it first: records alone keep only half. But when records are kept by everyone repeating them, the whole culture survived even through collapse.

## Getting Knowledge Out of the Head

Until now, knowledge lived only inside individuals. An adult remembers it, and the young learn beside them. When teachers decrease, knowledge decreases. That is what 05 showed.

To that I added an external record<sup class="term-note">＊</sup>. An adult who knows a piece of knowledge can write it into a record. Once written, the record works in place of a living teacher. It takes over part of the number of teachers needed to learn. Even when the flesh-and-blood teachers are gone, a record can still meet the required count.

But a record fades if left alone. With no readers and no writers, it is gradually lost. So I added ritual<sup class="term-note">＊</sup>. When everyone repeats the same thing, the record is kept even without specialists.

```python
# The "number of teachers" needed to learn is met by both living adults and the record.
demonstrators = living_teachers(item) + record.strength(item)
item.alive = demonstrators >= item.teachers_needed

record.strength[item] -= decay        # a record fades if left alone
if ritual.repeats(item):
    record.strength[item] = FULL      # ritual = everyone repeating keeps the record full
```

## Records Alone Keep Half

Inside the collapsing apparatus, I compared three. A colony that passes things on by voice alone, a colony with a fragile record, and a colony that keeps its record through ritual.

The voice-only colony is the same as in 05. As teachers decrease, culture falls to 3.1 of 10. Add a fragile record and it recovers to 5.0. The record fills half the hole left by the vanished teachers. But because the record itself fades, it stops at half.

The colony that kept its record through ritual: 10 of 10. Even through collapse, the whole culture remained.

<figure>
  <img src="/images/research/rat/06/cultural_archive.png" alt="Voice only 3.1, fragile record 5.0, record plus ritual 10.0; the recorded items stay full even as teachers collapse">
  <figcaption>A comparison inside the collapsing apparatus. Voice only is 3.1, a fragile record is 5.0, record plus ritual is 10.0. On the right, even as the teachers (orange) collapse and oscillate, the items held in the record (green) stay full.</figcaption>
</figure>

The reason shows up in the right-hand graph. The number of living teachers still collapses and oscillates as before. Yet the items held in the record stay full. A record is a teacher that does not tire and does not die.

## Culture Outlives the Individuals That Made It

What happened here is a small but large turn. Knowledge was cut loose from the lifespan of the individuals who remember it.

By voice, knowledge dies with the individual. But put it into a record and keep it by everyone repeating it, and the knowledge outlives those individuals. Even when the teachers are replaced wholesale, the culture does not break. This is a wall against the collapse seen from 02 through 05, built from the side of culture. Writing things down, and everyone repeating them — these two protect the colony from the rupture between generations.

## Limits

Let me be clear. The record and ritual here are fairly abstract mechanisms. Real rats do not have writing. Still, there is a seed. The scent marking from 01 was a kind of primitive record, placing information outside the individual. Even so, accumulating external records and ritual are where this model steps beyond actual rats. As usual, read it as a thought experiment with a minimal individual wearing a rat's skin.

## Next

A record can carry not only knowledge but also stories. Sharing the same record, everyone repeating the same thing — that might change who is counted as one of us.

In 03, helping non-kin prevented collapse. But why help? What turns a stranger into one of us? Next, I take up the boundary of companions.

## Notes

1. Record (externalized transmission): Placing knowledge outside an individual's memory. Even when the individual who wrote it is gone, the record takes over part of the number of teachers and supports learning.
2. Ritual: A mechanism that keeps a record or knowledge by a group repeating the same thing, even without specialists. Here it is treated as a force that cancels out the fading of records.
