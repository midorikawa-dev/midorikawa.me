+++
title = "Appendix B. The Length of Memory"
date = 2026-06-21
description = "Holding cooperation is not only about remembering. It is also about how much you forget."

[extra]
lang = "en"
alternate_url = "/research/a2-memory-length/"
+++

In Appendix A, the individual changed its action weights through experience. Helped, it drew closer; betrayed, it pulled away. But that experience fades quickly. What changes with how much of it remains?

It turned out, against expectation, not to be a matter of remembering longer. If memory<sup class="term-note">＊</sup> is too short, relationships never build up; if it is too long, relationships harden and cannot be repaired. Cooperation lasts most in between. You need both remembering and forgetting. Here I vary the length of memory.

## Remembering, forgetting

I give the individual a memory of each other individual. A memory of being helped raises trust<sup class="term-note">＊</sup> a little; a memory of being betrayed lowers it. And as time passes, the memory fades, bit by bit. I change one thing only: how long the experience remains.

```julia
# Drop old events. Only the memories that remain move trust toward the other.
filter!(e -> e.age < memory_span, memory)
if helped_me(other)
    trust[other] += 0.04
elseif betrayed_me(other)
    trust[other] -= 0.08
end
```

How long it remains changes the shape of cooperation. Neither forever, nor gone at once.

## Too short, too long

With short memory, cooperation has trouble getting off the ground. Help someone, and there is no guarantee of being helped back next time. A betrayer, too, is soon treated as before. Relationships do not build up, and the share of cooperating individuals wavered.

With medium memory, cooperation was most stable. Those who helped are trusted, those who betrayed are avoided. But because memory fades, relationships are not fully fixed.

With memory too long, betrayal was well suppressed. But repair<sup class="term-note">＊</sup> rarely happens. An individual once remembered badly is avoided for a long time, even when the situation has changed. The colony is stable, but it hardens.

## Cooperation lies between remembering and forgetting

Memory supports cooperation. But it is not enough simply to store it. Which experiences, and how long to keep them. Too short, and nothing builds up; too long, and nothing can change.

In this model, holding cooperation took not only not forgetting but also forgetting. Remembering suppresses betrayal; forgetting repairs the relationship. Between the two lies the band where cooperation lasts. The memory here is no more than a single value for each other individual. It does not read the meaning of events, and there is no apology or explanation. Even so, changing only the length of memory moved the stability of cooperation.

Both experience and memory work between one individual and another. But who you meet is decided by the shape of the colony. The vessel itself, the space, I take up in Appendix C.

## Notes

1. The length of memory: How long an experience keeps influencing behavior. The shorter it is, the sooner you forget; the longer, the longer you keep remembering past partners.
2. Trust: An internal per-partner value that changes whether you draw closer, help, or avoid. It rises when you are helped and falls when you are betrayed.
3. Direct reciprocity and repair: Mutual help with the same partner continuing through memory. As with Axelrod's tit-for-tat, remembering suppresses betrayal. At the same time, as memory fades, room remains for a soured relationship to be repaired.
