+++
title = "01. Making a Colony"
date = 2026-06-17
description = "Turn one rat into many, and put contact, rank, herding, territory, and reproduction into the same update loop"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/01-make-a-colony/"
+++

## Overview

Making more individuals does not automatically make a colony. If several agents are only placed in the same box, they are still just several one-rat systems. A colony begins when individuals become part of each other's input. One rat's position enters another rat's observation. Wins and losses change future win rates. Smell changes where individuals move. Rank changes the chance of reproduction.

This article does not add collapse yet. First I want a colony that can stay alive under conditions where food, water, and reproductive opportunities are not intentionally blocked. If the colony breaks from the start, the later cause of collapse cannot be separated.

## Other Individuals Become Input

The starting point is the same loop as before.

```python
action = rat.choose_action(world.observe(rat))
outcome = world.apply(rat, action)
rat.learn(outcome)
```

With multiple rats, other individuals enter the loop.

```python
for rat in rats:
    action = rat.choose_action(world.observe(rat))
    world.apply(rat, action)

for a, b in world.encounters():
    outcome_a, outcome_b = contest(a, b)
    a.learn(outcome_a)
    b.learn(outcome_b)
```

With one rat, only the world returned results. In a colony, other individuals also return results. They approach, avoid, push back, win, and lose. Another rat's action becomes part of the next input. At this point, each individual starts adapting not only to the environment, but also to other individuals.

## Rank Appears Without Being Assigned

The first interaction I added was contact and contest. Each individual has confidence. The initial values are almost the same. When two rats meet at the food area, a contest happens. Winning raises confidence a little. Losing lowers it a little. I use this winner-loser effect<sup class="term-note">＊</sup> as the rule that changes rank. Rank is not assigned in advance.

```python
win_rate = sigmoid(a.confidence - b.confidence)
winner, loser = contest(a, b, win_rate)

winner.confidence += delta
loser.confidence  -= delta
```

This rule alone separates ranks. Small differences are amplified through contests. A rat that wins becomes more likely to win again. A rat that loses becomes more likely to lose again. From contact at the food area, a linear rank order appears. Once rank exists, access to resources also changes. High-ranking rats enter the food area more easily. Low-ranking rats wait longer. A social difference returns as an internal state: hunger.

<figure>
  <img src="/images/research/rat/01/society_embodied.gif" alt="AI rat colony where rank separates through encounters at the food area">
  <figcaption>Encounters at the food area. Rank separates from the history of wins and losses, and higher-ranking individuals gain easier access to food.</figcaption>
</figure>

## Herding Comes From Danger

Next I added a predator. I still did not write "form a group" into the code. The predator targets isolated individuals. When a rat senses a threat, it moves toward nearby rats. If it gets too close, it avoids them.

```python
if predator.visible_to(rat):
    rat.target = nearest_group(rat, rats)
else:
    rat.target = food_or_rest(rat)
```

When the predator appears, distances between individuals shrink. When it leaves, they spread out again to forage. The center of the group is not specified. The group is the result of each individual trying to reduce its own risk under a condition where isolation is dangerous.

<figure>
  <img src="/images/research/rat/01/herd_embodied.gif" alt="AI rats gathering when a predator approaches">
  <figcaption>When the predator appears, the rats gather. When it leaves, they spread out. Herding comes from behavior that reduces the risk of isolation.</figcaption>
</figure>

## Territory Comes From Smell

Rank and herding do not yet fix where individuals live. To handle territory<sup class="term-note">＊</sup>, I added scent marking. Each rat leaves smell where it passes. The smell spreads and fades over time. A rat avoids places with strong smell from others and returns to places where its own smell remains. No compartments are assigned.

```python
world.scent[rat.id].add(rat.position)

own_scent   = world.scent[rat.id].at(rat.position)
other_scent = world.other_scent(rat).at(rat.position)

rat.move_toward(own_scent - other_scent)
```

From this rule, space separates. The boundary is not given as a line. By leaving smell and avoiding the smell of others, the reachable range of each individual separates as a result.

<figure>
  <img src="/images/research/rat/01/territory.gif" alt="Territories separating through scent marking">
  <figcaption>Territory from scent marking. Even without assigned compartments, each rat begins returning to its own range.</figcaption>
</figure>

## Connecting Rank to Reproduction

Finally, I connected rank to reproduction. To see whether a colony continues into the next generation, survival is not enough. Which individuals leave offspring? What do the offspring inherit? Does the colony keep its properties across generations? Here, each rat has a competitive trait. Higher-ranking individuals get more reproductive opportunities, and children inherit the parent's competitive trait with small changes.

```python
parents = select_by_rank(rats)

for parent in parents:
    child = parent.reproduce(mutation=True)
    next_generation.append(child)
```

Now rank is not only a temporary contest result. It becomes a variable that affects the next generation. When high-ranking individuals leave more offspring, the average competitive trait changes across generations. Social structure becomes a condition for evolution.

<figure>
  <img src="/images/research/rat/01/reproduction.png" alt="Rank-biased reproduction and changes in competitive traits">
  <figcaption>Rank connected to reproduction. When higher-ranking individuals leave more offspring, the distribution of competitive traits changes across generations.</figcaption>
</figure>

## Next

At this stage, the system is a colony whose individuals become input for one another. Contact changes rank, predators trigger approach, smell separates space, and rank affects reproductive opportunity.

Next I will look for the conditions under which this colony breaks. Food and water remain available; the question is which constraint stops the life cycle.

## Notes

1. Winner-loser effect: A winner becomes more likely to win the next contest, and a loser becomes more likely to lose. Here it is used to produce rank from the history of encounters, instead of assigning rank as a fixed value.
2. Risk of isolation: A condition where the predator targets individuals at the edge or away from others. Moving toward nearby companions lowers the risk per individual.
3. Territory: A range of space occupied by an individual and defended against others. Here, territory emerges from scent marking and avoidance rather than from predefined compartments.
