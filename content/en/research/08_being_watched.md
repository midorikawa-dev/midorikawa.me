+++
title = "08. Being Watched"
date = 2026-06-21
description = "What holds free-riding in check is neither punishment nor law, but the sense of being watched."

[extra]
lang = "en"
alternate_url = "/research/08-being-watched/"
+++

In 07, when an individual also helped those who shared the same tag, cooperation spread beyond kin and collapse was held off. But as cooperation spreads, a gap opens. The individual that gets helped but does not help in turn.

When such free-riding<sup class="term-note">＊</sup> increases, only the helping side pays the cost, and cooperation breaks from the inside. What holds it in check? The answer first: being watched. If cheating is found out, cheating no longer pays. The share of cooperators held at 47% with no monitoring, 63% with only nearby eyes, and 70% when watched everywhere. Here I add "being watched."

## Mixing in the non-helpers

I place two kinds in the colony. The cooperator helps the other when conditions are met, paying with time or with chances to leave offspring. The non-helper receives help but never pays from its own side.

Look at the individual alone, and not helping is better. It pays no cost and takes only the benefit. But as non-helpers increase, cooperators decrease. Then the young have fewer chances to learn, transmission thins, and the colony moves toward collapse again. What 03 through 07 held off from the outside comes loose from the inside.

## If it is found out, it does not pay

So I vary how often cheating is found out. The apparatus, the shared tags, and the helping all stay the same. The only thing I move is detectability. If cheating is found out, reputation<sup class="term-note">＊</sup> falls. When it falls, the individual gets no help, and finds it harder to leave offspring.

No monitoring. Cheating is never found out. The non-helper keeps receiving without paying.

Monitoring by nearby individuals. If a cooperator is in the same place, cheating is found out. But if no one is nearby, it is missed.

Watched everywhere. Regardless of who is nearby, cheating is found out with high probability. This last one I call here the "god"<sup class="term-note">＊</sup>. Not an object of belief. The function of watching everywhere.

```julia
# If cheating is found out, reputation is lost. The more detectable, the less it pays.
seen    = is_seen(cheater, watching)        # watching: none / nearby / everywhere
penalty = seen ? reputation_loss : 0.0
cheating_gain = received_help - penalty
```

I add one more condition, where evaluation also remains after death. If reputation lasts only while the individual lives, an old one is most likely to cheat at the end. Its time is short, and losing reputation does not hurt. If evaluation remains after death too, even that individual becomes less likely to cheat to the very end.

## When watched everywhere, cooperation remains

With no monitoring, cheating spread. The share of cooperators fell, and free-riding filled the colony. Nearby monitoring worked to a degree. But as the colony grew and individuals spread out, fewer were nearby to watch, and cheating was missed. Nearby eyes are only local. A large colony opens an anonymous gap.

The watched-everywhere condition fills that weakness. Regardless of who is nearby, cheating is found out. The share of cooperators was 47% with no monitoring, 63% with nearby monitoring, and 70% when watched everywhere. And when I added the condition where evaluation remains after death, the extinction rate fell the most.

<figure>
  <img src="/images/research/rat/08/religion.png" alt="No monitoring 47%, nearby monitoring 63%, watched everywhere 70%. Afterlife evaluation lowers the extinction rate further">
  <figcaption>A comparison across 16 nests. The share of cooperators was 47% with no monitoring, 63% with nearby monitoring, and 70% when watched everywhere. When the condition where evaluation remains after death is added, the extinction rate fell the most.</figcaption>
</figure>

Place the same colonies side by side, and the difference is clear. In a world with no monitoring, cheating spreads, cooperation drops, and the colony grows unstable. In a world watched everywhere, cheating is found out and does not pay, and cooperators remain.

<figure>
  <img src="/images/research/rat/08/religion.gif" alt="With no monitoring cheating spreads; in the watched-everywhere condition cooperation is maintained">
  <figcaption>A comparison in the same colony. With no monitoring, cheating spreads; when watched everywhere, cooperation is kept.</figcaption>
</figure>

## Being watched is a condition of cooperation

What is visible here is neither the rightness of religion nor whether a god exists. What is visible is the mechanism that holds cooperation. Someone is watching. Cheat, and it is found out. Reputation falls. Help stops coming. The evaluation remains even after death. That alone holds in check the cheating done for a short gain.

When cheating falls, cooperators remain. The chances for the young to learn remain. Transmission continues. Being watched was not an ornament of morality but a working condition for holding cooperation.

The "god" here is not real faith or doctrine. It is only a name that gathers the functions of monitoring, punishment, reputation, and afterlife evaluation into one. Even so, something is visible. When an anonymous gap opens in a large colony, the sense of "being watched everywhere" keeps cooperation tied together.

So far I have looked at the conditions that prevent collapse one by one. Collapse that is not from a shortage of resources, love, voice, knowledge, records, companions, and now reputation. From rules added one at a time, the ways a colony breaks and the ways to prevent it have come into view. Next, I gather and lay out what I have been building with this whole sequence of apparatuses.

## Notes

1. Free-riding: Receiving help from other individuals while paying none of the cost of helping in turn. In the short term it pays, but as it increases it breaks cooperation from the inside.
2. Reputation (indirect reciprocity): An individual whose cheating becomes known is helped less and is at a disadvantage in reproduction. This is close to Nowak and Sigmund's idea of indirect reciprocity, in which reputation supports cooperation even between strangers.
3. The "god" (supernatural monitoring): A social function in which one is watched everywhere, punished for cheating, and evaluated even after death. Not the content or substance of faith. As an apparatus for holding cooperation in large groups, it corresponds to the hypothesis of watching gods (Big Gods) argued by Norenzayan, Johnson, and others.
