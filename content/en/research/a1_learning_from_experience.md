+++
title = "Appendix A. Individuals That Change Through Experience"
date = 2026-06-22
description = "Social ability is not a fixed value you are born with. It is a weight that changes through experience."

[extra]
lang = "en"
alternate_url = "/research/a1-learning-from-experience/"
+++

From here, the appendix. Stepping a little aside from the main thread (00–09), I turn the model's internals.

In the main thread, I always located the key that holds a colony together in social ability<sup class="term-note">＊</sup>. The power to help, to teach, to raise the young. But I kept that power as a fixed value throughout. A capable individual was capable from the start.

Where does that power come from? From experience. Being helped, being betrayed, being able to learn. Each of these shifts, a little at a time, how easily the next action is chosen. Ability is not a value you are born with. It is something updated within relationships. Add this, and collapse comes into view one level deeper, as a problem of transmission.

## Taking ability off the fixed value

Until now, each individual held social ability as a single number. High, and courtship, child-rearing, and learning all went well; low, and they failed. Collapse is visible even this way. When capable adults grow few, the young cannot learn, and the next generation's ability falls. But you cannot see which experience changes that ability. The experience of being helped and the experience of being betrayed both end as mere history.

So I make ability not a single value but a bundle of weights<sup class="term-note">＊</sup>. Approach, avoid, help, wait, learn, betray. Each is held as a value for how easily it is chosen. An individual reads the situation. Who is nearby, whether they are kin, whether they share the same tag, whether they helped in the past. On that basis, it moves according to its weights. Each time an experience happens, the weights shift a little. I call this an update<sup class="term-note">＊</sup>.

```julia
# After each experience, nudge how easily an action is chosen (the weights) just a little.
if helped
    weights.approach += 0.03
    weights.help     += 0.02
end
if betrayed
    weights.avoid += 0.05
end
if learned_from_adult
    weights.learn += 0.03
end
```

It does not change in one step. Small updates accumulate.

## Experience chooses the next action

Once I add updates, the difference between colonies came out clearly. In a stable colony, the experience of being helped and the experience of being able to learn remain, and they make the next action a little more cooperative. As cooperation grows, the chance to learn remains again. It is a cycle that turns toward holding the colony together.

In a colony on the edge of breaking, the reverse turns. Betrayed, avoiding, fewer partners to learn from, and the weight to help does not remain. The number of individuals is still there, yet the content of the relationships thins out. Social ability was not lost from the start. It was losing the chance to be updated.

## Ability is made within relationships

The view shifts one level. Before it was "when capable adults grow few, the young cannot learn." Now another level enters between. For the young not to be able to approach adults means not only that they cannot receive knowledge, but that they cannot update the weights of approach, wait, help, and learn.

Social ability remains not as information but as weights that make the next action easier to choose. Who you were with, who helped you, what you tried that worked. That shifts the next probability, a little at a time. I am not building a clever individual. I strengthen a good experience a little and avoid a bad experience a little. That alone changes how the colony behaves.

If experience changes behavior, the next question is how much that experience remains. Remember too much, or forget too much, and cooperation changes. I take that up in Appendix B.

## Notes

1. Social ability: The power to engage with other individuals and make reproduction, child-rearing, aid, and learning possible. Here I treat it not as a fixed value but as a combination of several weights.
2. Weight: An internal value that expresses how easily a given action is chosen. It is not fixed as a personality but changes a little at a time through experience.
3. Update (strengthening and suppression): Shifting a weight a little after an experience. Not a large inference, but a simple mechanism close to reinforcement learning (the framework of Sutton and Barto and others), which strengthens good outcomes and avoids bad ones.
