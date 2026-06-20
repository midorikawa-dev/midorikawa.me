+++
title = "03. Can Love Prevent Collapse?"
date = 2026-06-16
description = "Can collapse be prevented by costly helping behavior toward non-kin?"

[extra]
lang = "en"
alternate_url = "/research/03-love-against-collapse/"
+++

In 02, the colony broke even with resources to spare, and the first thing to go was not the number of individuals but the passing-on to the next generation. What reconnects it?

The next apparatus tests love<sup class="term-note">＊</sup>. Not a feeling, but costly helping toward non-kin: staying near, teaching, sharing care, taking in orphans. I add these to the apparatus and watch whether the condition for collapse changes. It did. The strongest effect came from teaching.

## Defining love as behavior

"Can love prevent collapse?" is too large as it stands. The word absorbs emotion, ethics, religion, family. So I define it narrowly: love is costly helping toward a non-kin individual.

Protecting yourself is not counted as love. Protecting your own offspring is left in the baseline; parental investment is already explained by the gains of kinship<sup class="term-note">＊</sup>. What I want to test is outside that: helping someone who is neither you nor your own child, at the cost of time or a chance to reproduce. Does that prevent collapse?

First, a self-interested apparatus. Each rat protects itself, raises its own young, prioritizes its own reproduction. Not a cruel world; for many animals it is the natural baseline. Run it, and the same thing as in 02 happens. As room runs short, capable adults thin out, the young stop learning, and a rat that didn't learn can't teach the next generation. Protecting only yourself and your own young does not restore the colony's transmission.

## Four ways of helping

I add four behaviors to the apparatus. Buffering means staying near isolated or highly stressed rats and easing the damage. Teaching means a capable adult raises a young rat's ability. Cooperative care means sharing the care of another's young. Adoption means taking in young that lost their protector, so they don't fall out of development.

Each has a cost for the helper: time, and a slightly lower chance to reproduce. For the individual, it isn't always a gain. The question is whether it is a gain for the colony.

## The only change is who gets help

Same environment, same food and water, same apparatus. The only change is who receives help. Self-interest: only yourself and your own young. Kin altruism<sup class="term-note">＊</sup>: blood kin too. Love: non-kin too.

```python
def will_help(self, other):
    return other.is_my_child or other.is_kin or self.love_reaches_non_kin
```

Widen the range of help and the young get more chances to learn, and ability carries to the next generation. That difference is what I measure.

## Love prevented collapse

Run it, and the love condition broke less easily. To avoid collapse, the self-interested apparatus needed about 32 nest boxes. Kin-only was about the same. When help reached non-kin, it dropped to about 16. The same closed environment held together with fewer boxes.

<figure>
  <img src="/images/research/rat/03/love.png" alt="Collapse-rate comparison between self-interest, kin-only help, and love conditions">
  <figcaption>Self-interest, kin-only help, and love. When help reaches non-kin, the apparatus needed to avoid collapse becomes smaller.</figcaption>
</figure>

Run the same small apparatus side by side and the difference shows. The self-interested one rises, then jams. The love one keeps its transmission, and the colony stays.

<figure>
  <img src="/images/research/rat/03/love.gif" alt="Simulation comparing self-interest and love conditions in a rat colony">
  <figcaption>The same apparatus under two conditions. The self-interested one collapses. The love one survives.</figcaption>
</figure>

## Teaching worked best

Next I add the four one at a time. Cooperative care did little; adoption was middling; buffering cut extinction substantially. Teaching worked best. That one behavior alone suppressed collapse more than all four together.

That was not what I expected. You would think all four would be strongest. But in a narrow apparatus, buffering keeps rats alive longer and can hold the crowding in place. Helping is not always simple addition.

Teaching is different because it touches the center of the collapse. In 02, what broke was not numbers but the passing-on. A behavior that hands ability to the next generation reconnects the broken path directly. The most effective form of love was teaching the next generation.

## Not a moral claim

What this shows is not a moral. It is not that a colony is saved because love exists. The behavior I call love carries a cost: less reproduction for the helper, less time. For the individual, it can be a loss.

But in a closed colony, another's failure comes back as your own environment. The young fail to learn, adults grow less reliable, teachers thin out, and the next generation learns even less. Once that loop turns, protecting only yourself destroys, over time, the transmission of the colony you live in. Helping non-kin cuts part of the loop. Teaching, especially, reopens the path that carries ability to the next generation. Here, love is not the name of a feeling. It is behavior that keeps transmission alive.

This is not a direct account of real rats or human society. Love is reduced to four behaviors, kinship to a simple relation, cost to a lower chance of reproducing. The extinction rates and box counts are values inside a finite simulation, not predictions. What I show is one hypothesis: in a closed colony, costly help toward non-kin can preserve transmission and move the boundary of collapse.

The strongest form of love here was teaching. But teaching needs a medium. The next apparatus takes up voice. A rat's voice is not a command language; it carries mood and context. I want to see what crosses the generations, and what does not.

## Notes

1. Love: Here, costly helping toward non-kin. Not the whole of emotion or ethics.
2. The gains of kinship: Helping blood kin makes genes like yours more likely to persist (Hamilton's kin selection).
3. Kin (the help-kin-only condition): Helping blood relatives such as parents, offspring, and siblings, but no one beyond them.
