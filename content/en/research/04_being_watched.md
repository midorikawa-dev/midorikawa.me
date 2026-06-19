+++
title = "04. Being Watched"
date = 2026-06-18
draft = true
description = "Free-riding, reputation, and the maintenance of cooperation in an artificial rat colony"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/04-being-watched/"
+++

## Overview

In the previous note, shared tags turned non-kin into companions and widened cooperation beyond kin.

But that still leaves another problem.

Some individuals may receive help without helping others.

Helpers pay a cost. Free-riders avoid that cost and still receive the benefit. If such individuals spread, cooperation breaks from the inside.

This note treats being watched, reputation, and evaluation after death.

The word god appears here, but not as a claim about an entity or a belief. It is used as a social function: being watched everywhere, being caught when cheating, and having one's reputation continue after death.

## Question

How is cooperation maintained?

In the previous models, help could reach non-kin. Transmission of social competence became easier to preserve, and the colony became less likely to collapse.

But cooperation has a free-rider problem.

An individual receives help, but does not help others. It avoids the cost of helping. In the short term, that individual can do better.

If such individuals spread, only the helpers pay the cost, and cooperation cannot be maintained.

What suppresses free-riding?

Here, I use monitoring and reputation.

If an individual is watched, cheating can be detected. If it is detected, the individual receives less help and suffers a reproductive penalty.

Then cheating no longer pays.

## Free-Riders

I added cooperating individuals and free-riding individuals to the model.

A cooperator helps others when the conditions match. It pays time and reproductive opportunity as a cost.

A free-rider receives help, but does not give help.

From the viewpoint of one individual, this can be advantageous.

It gets the benefit of help without paying the cost.

The question is whether that behavior damages the colony as a whole.

If cooperators decrease, offspring have fewer opportunities to learn. The transmission of social competence weakens. The colony moves closer to collapse again.

## Being Watched

I then changed how likely cheating was to be detected.

No monitoring.

Cheating is never detected. Free-riders keep receiving help while paying no cost.

Local monitoring.

If cooperators are nearby, cheating is more likely to be detected. But if no one is nearby, it can go unseen.

Being watched everywhere.

Cheating is detected with high probability regardless of who is nearby.

This last condition is called god in the model. It does not mean a deity as an entity. It means the function of an observer who can see everywhere.

## Intervention

The intervention is small.

The physical apparatus is the same. The shared tags are the same. The helping behaviors are the same. What changes is how likely cheating is to be detected.

The relation can be read like this.

```text
gain from cheating = benefit received - penalty if caught

the easier cheating is to detect, the less it pays

cheating decreases
-> cooperation remains
-> offspring keep chances to learn
-> collapse becomes less likely
```

At the level of the condition, it looks like this.

```rust
let penalty = if cheating_is_seen {
    reputation_loss
} else {
    0.0
};

let cheating_gain = received_help - penalty;
```

I also added a condition where reputation continues after death.

If reputation matters only while alive, old individuals may defect near the end of life. They have little future to lose.

If reputation continues after death, even old individuals have less reason to defect.

## Result

Without monitoring, free-riders spread.

The fraction of cooperators decreased, and free-riding entered the colony.

Local monitoring helped to some extent. The cooperator fraction increased. But as the colony grew and individuals spread across space, fewer cooperators were nearby to watch. Cheating became easier to miss.

Under the always-watched condition, cooperation was maintained more strongly.

In this model, the cooperator fraction was roughly 0.47 with no monitoring, 0.63 with local monitoring, and 0.70 when cheating could be detected everywhere.

When evaluation after death was added, extinction fell the most.

<figure>
  <img src="/images/research/rat/04/religion.png" alt="Comparison of no monitoring, local monitoring, always-watched condition, and afterlife reputation in an artificial rat colony">
  <figcaption>Comparison under the 16-box condition. Being watched everywhere maintained cooperation, and adding afterlife reputation reduced extinction further.</figcaption>
</figure>

The difference is easier to see when the same colony is run side by side.

Without monitoring, free-riders spread. Cooperation decreases, and the colony becomes unstable.

When cheating is likely to be detected everywhere, free-riders are punished and cooperators persist.

<figure>
  <img src="/images/research/rat/04/religion.gif" alt="Simulation comparing no monitoring and an always-watched condition in an artificial rat colony">
  <figcaption>Same colony. Without monitoring, free-riders spread. Under the always-watched condition, cooperation is maintained.</figcaption>
</figure>

## Why Local Monitoring Is Not Enough

Local monitoring works in small groups.

If someone is nearby, cheating can be seen. If it is seen, the cheater is penalized. So cheating becomes less attractive.

But large groups change the situation.

Individuals spread across space. A cooperator is not always nearby. In places where no one is watching, cheating can escape detection.

Human monitoring is local.

Large groups create anonymity.

The always-watched condition compensates for that weakness. Cheating can be detected regardless of who is nearby.

In this sense, god in the model is not a belief object. It is a function for preserving reputation in a large group.

## Interpretation

This is not a claim about whether religion is true.

It does not model whether a god exists.

It models a mechanism that maintains cooperation.

Someone is watching. Cheating can be detected. Reputation falls. Help is withdrawn. Evaluation continues after death.

When such a mechanism exists, short-term free-riding is suppressed.

If cooperation remains, the transmission of social competence remains. Offspring keep chances to learn. The colony becomes less likely to collapse.

In this model, being watched was not moral decoration.

It was an executable condition for maintaining cooperation.

## Limitations

This model does not reproduce real religion or belief.

God here is a combination of monitoring, punishment, reputation, and afterlife evaluation. It does not model doctrine, ritual, community, or religious experience.

Cooperation and cheating are also simplified. Real cooperation is more ambiguous and context-dependent.

This note treats one hypothesis.

In large groups, being watched and having a reputation can suppress free-riding and change the stability of cooperation.

The model makes that hypothesis executable.

## Next Question

So far, this sequence has treated collapse without resource shortage, love, the boundary of companions, and the maintenance of cooperation through reputation.

The next step is to organize these models as one arc.

Why does the colony collapse? What reconnects transmission? Who counts as a companion? How is cooperation maintained?

The next note will summarize the sequence and clarify what these artificial rat colonies are being used to observe.

## Notes

1. free-riding: Receiving help from others without paying the cost of helping.
2. reputation: In this note, reputation means that a detected cheater receives less help and suffers a reproductive penalty.
3. afterlife reputation: A condition where evaluation continues after death. Here, it suppresses end-of-life defection by old individuals.
4. god: In this note, god means a social function that combines being watched everywhere, punishment, reputation, and evaluation after death. It does not model an entity or belief content.
