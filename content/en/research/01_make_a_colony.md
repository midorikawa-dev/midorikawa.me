+++
title = "01. Making a Colony"
date = 2026-06-14
description = "Turn one rat into many, and put contact, rank, herding, territory, and reproduction into the same update loop"

[extra]
lang = "en"
alternate_url = "/research/01-make-a-colony/"
+++

More rats do not make a colony. Put many in the same box and you still have several one-rat systems. A colony begins when each rat becomes part of another's input. One rat's position enters another's view. A win changes the next win rate. A smell changes where someone goes. Rank changes who gets to breed.

I don't reproduce collapse here; I build a colony that persists.

And none of the structure is designed. I set only local rules, and watch whether rank, herding, and territory come out on their own.

The starting point is the single rat from before. The difference: results no longer come only from the world, but from other rats too.

```python
for rat in rats:
    rat.act(world.observe(rat))

for a, b in world.encounters():
    a.learn(contest(a, b))
    b.learn(contest(b, a))
```

Approach, avoid, push back, win, lose. Another rat's move becomes my next input. From here, a rat adapts not only to the world but to its neighbors.

First I added encounters and contests. Each rat has a confidence, all nearly equal at the start. Meet at the food area and a scuffle happens: win and confidence rises a little, lose and it drops<sup class="term-note">＊</sup>. I never assign who is on top.

```python
win_rate = sigmoid(a.confidence - b.confidence)
winner, loser = contest(a, b, win_rate)
winner.confidence += delta
loser.confidence  -= delta
```

That alone produced rank. Small differences get amplified through contests. A winner wins more, a loser loses more, until a straight order lines up. Once rank exists, feeding changes with it: the top get in easily, the bottom wait. A social position comes back as a bodily state, hunger.

<figure>
  <img src="/images/research/rat/01/society_embodied.gif" alt="AI rat colony where rank separates through encounters at the food area">
  <figcaption>Encounters at the food area. Rank lines up from wins and losses, and higher-ranking rats get easier access to food.</figcaption>
</figure>

Next I added a predator. Again I never wrote "form a group." The predator picks off whoever is alone. A rat that feels danger moves toward nearby rats, and backs off if it gets too close. That's all. The predator comes, distances shrink; it leaves, they scatter to forage. I never set a center. The group is what's left when each rat lowers its own risk in a world where being alone is dangerous.

<figure>
  <img src="/images/research/rat/01/herd_embodied.gif" alt="AI rats gathering when a predator approaches">
  <figcaption>When the predator appears, the rats gather; when it leaves, they scatter. Herding comes from lowering the risk of being alone.</figcaption>
</figure>

Rank and herding still don't fix who lives where. So I added scent marking<sup class="term-note">＊</sup>. A rat leaves smell where it passes; the smell spreads and fades. It avoids places thick with others' smell and returns to its own. No compartments are given.

```python
world.scent[rat.id].add(rat.position)

own   = world.scent[rat.id].at(rat.position)
other = world.other_scent(rat).at(rat.position)

rat.move_toward(own - other)
```

From this, space split. The boundary is not a drawn line. Leave smell, avoid others' smell, and each rat's usable range separates on its own.

<figure>
  <img src="/images/research/rat/01/territory.gif" alt="Territories separating through scent marking">
  <figcaption>Territory from scent marking. Without assigned compartments, each rat returns to its own range.</figcaption>
</figure>

Last, I tied rank to reproduction. To see whether a colony carries into the next generation, staying alive isn't enough — who leaves offspring, and what the offspring inherit. Each rat carries a competitive trait; higher rank means more offspring, and a child inherits the parent's trait with small changes.

```python
parents = select_by_rank(rats)

for parent in parents:
    next_generation.append(parent.reproduce(mutation=True))
```

Now rank is not just a momentary result. It is a variable that changes the next generation. When the top leave more offspring, the average competitive trait drifts across generations. Social structure becomes a condition for evolution.

<figure>
  <img src="/images/research/rat/01/reproduction.png" alt="Rank-biased reproduction and changes in competitive traits">
  <figcaption>Rank tied to reproduction. When higher-ranking rats leave more offspring, the distribution of competitive traits shifts across generations.</figcaption>
</figure>

None of it was designed. With only local rules, rank, herding, territory, and evolution came out of the colony on their own.

Next, I look for the conditions under which this colony breaks — with food and water still available.

## Notes

1. Winner-loser effect: A winner is more likely to win next time, and a loser to lose. Used here to grow rank from the history of encounters instead of assigning it.
2. Scent marking: Leaving body scent where you pass and avoiding others' scent, so ranges separate. Territory appears without any compartments being assigned.
