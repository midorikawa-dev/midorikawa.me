+++
title = "03. Can Love Prevent Collapse?"
date = 2026-06-16
description = "Can collapse be prevented by costly helping behavior toward non-kin?"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/03-love-against-collapse/"
+++

## Overview

In 02, the colony collapsed even though resources were available. The first thing to break was not the number of individuals, but the transmission of social ability. That makes the next question fairly direct: what can reconnect that transmission?

Here I test love<sup class="term-note">＊</sup>. Not as a feeling, but as costly helping behavior toward non-kin. I add social buffering<sup class="term-note">＊</sup>, teaching, cooperative care, and adoption, and then check whether they change the critical condition for collapse. Helping non-kin did change the conditions under which the colony survived. The strongest effect came from teaching.

## Defining Love as Behavior

"Can love prevent collapse?" is too large as it stands. The word love absorbs emotion, ethics, religion, family, and devotion. So I define it narrowly here: love is costly helping behavior toward a non-kin individual.

Protecting oneself is not counted as love. Protecting one's own offspring is placed in the baseline. Parental investment in offspring can be explained within inclusive fitness. The part I want to test is outside that range: helping an individual who is neither oneself nor one's own child, even when it costs time or reproductive opportunity. Can that prevent colony collapse?

## Self-Interest Does Not Restore Transmission

First I set a self-interested condition. Individuals protect themselves, raise their own offspring, and prioritize their own reproduction. This does not mean the condition is cruel. For many organisms, it is a natural baseline.

Even in this condition, individuals have a life cycle. They mature, take territory, court, give birth, raise offspring, and young rats learn from adults. But when social roles become jammed, the same thing as in 02 happens. Competent adults decrease, young rats stop learning, and those young rats cannot teach the next generation. Protecting only oneself and one's own offspring does not restore transmission across the colony.

## Four Helping Behaviors

I added four behaviors.

Social buffering means staying near isolated or highly stressed individuals and reducing damage from chronic stress. Teaching means a competent adult raises a young individual's social ability. Cooperative care means sharing care for another individual's offspring and compensating for low parenting ability. Adoption means taking in offspring that lost protection and keeping them from falling out of development.

Each behavior has a cost for the helper. It uses time and slightly reduces the helper's own reproductive opportunity. It is not always good for the individual. The question is whether it can still be good for the colony.

## The Only Change Is Who Gets Help

The closed environment, food and water, and physical apparatus stay the same. The only thing I change is who receives help. In the self-interested condition, an individual helps only itself and its own offspring. In the kin-altruism<sup class="term-note">＊</sup> condition, it also helps kin. In the love condition, it also helps non-kin.

```python
def will_help(self, other):
    return other.is_my_child or other.is_kin or self.love_reaches_non_kin
```

If the range of help expands, young rats should have more chances to learn, next-generation ability should remain, and the colony should become harder to collapse. That is the difference I check. If help toward non-kin works, the same apparatus should become less likely to go extinct, and the social-role capacity needed for survival should become smaller.

## Love Lowers the Critical Capacity

In this model, the love condition was harder to collapse. The self-interested condition needed about 32 nest boxes to avoid collapse. The kin-only condition stayed near the same critical capacity<sup class="term-note">＊</sup>. But when help reached non-kin, the critical capacity dropped to about 16 boxes. The same closed environment could continue with fewer social roles.

Under the stricter 16-box condition, the difference is clear. The self-interested condition often went extinct. The kin-only condition was in the middle. The love condition reduced extinction further.

<figure>
  <img src="/images/research/rat/03/love.png" alt="Collapse-rate comparison between self-interest, kin-only help, and love conditions">
  <figcaption>Self-interest, kin-only help, and love. When help reaches non-kin, the apparatus capacity needed to avoid collapse becomes smaller.</figcaption>
</figure>

Running the same small apparatus side by side makes the difference easier to see. In the self-interested condition, population rises and then the life cycle jams. In the love condition, transmission remains and the colony continues.

<figure>
  <img src="/images/research/rat/03/love.gif" alt="Simulation comparing self-interest and love conditions in an AI rat colony">
  <figcaption>The same physical apparatus under two conditions. The self-interested colony collapses. The love condition survives.</figcaption>
</figure>

## Teaching Worked Best

I also tested the four behaviors separately. Cooperative care did not help much. Adoption had a middle effect. Social buffering reduced extinction substantially. The strongest effect came from teaching. A competent adult passes social ability to a young individual. That behavior alone suppressed collapse more than the condition that included all four behaviors.

This is a little surprising. It is easy to expect all four together to be strongest. But in a narrow apparatus, social buffering can keep individuals alive longer and maintain crowding. Helping is not always simple addition.

Teaching is different because it touches the center of the collapse. In 02, what broke was not the number of individuals, but transmission. So behavior that passes social ability to the next generation reconnects the broken path directly. In this model, the most effective form of love was teaching the next generation.

## This Is Not a Moral Claim

This is not a moral claim. It is not saying that a colony is saved because love exists. The behavior I call love has a cost. It can reduce the helper's own reproduction and consume time. From the individual's point of view, it can be disadvantageous.

But in a closed colony, another individual's failure comes back as one's own environment. Young rats fail to learn, adults become less competent, teachers decrease, and the next generation learns even less. Once that loop begins, protecting only oneself can, over time, destroy the transmission of the colony one belongs to. Helping non-kin cuts part of that loop. Teaching, especially, opens the path that carries social ability to the next generation.

In this model, love is not the name of a feeling. It is behavior that preserves transmission.

## Limits

This is not a direct explanation of real mice or human society. Love is abstracted into four behaviors, kinship into a simple relation, and cost into reduced reproductive opportunity. Extinction rates and critical capacities are values inside a finite simulation, not predictions about the real world.

What I show is one hypothesis: in a closed colony, costly help toward non-kin can preserve the transmission of social ability and change the critical condition for collapse. This model makes that hypothesis movable.

## Next

The strongest form of love here was teaching. But teaching needs a medium.

Next I will handle voice. Mouse vocalization is not a command language; it carries emotion and context. I want to see what can and cannot be passed across generations.

## Notes

1. Love: Here, costly social-protection behavior toward non-kin. It does not mean the whole range of emotion or ethics.
2. Social buffering: A reduction of stress response through the presence or contact of another individual. Here it is modeled as behavior that reduces damage from chronic stress.
3. Kin altruism: Helping behavior toward kin. It relates to Hamilton's theory of kin selection.
4. Critical capacity: The minimum capacity for social roles needed for the colony to avoid collapse. The values here are model values, not estimates for reality.
