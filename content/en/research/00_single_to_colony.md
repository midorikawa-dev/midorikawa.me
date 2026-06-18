+++
title = "00. From One Rat to a Colony"
date = 2026-06-19
description = "How a learning individual gains sensation, needs, voice, territory, and becomes part of a colony"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/00-single-to-colony/"
+++

## Overview

I wanted to reconstruct different rat experiments as AI Rat models.

The first one that caught my attention was Calhoun's Universe 25.

Food was available. Water was available. There were no predators. Still, the colony collapsed.

That was an interesting question.

But if you start by building "a collapsing colony," it usually goes wrong.

If collapse is implemented directly, collapse becomes only an outcome label.

What was needed first was something smaller.

There is one individual.

It acts.

The world responds.

The individual changes a little.

Once that loop works, sensation can be added. Needs can be added. Other individuals can be added.

Only after that is there a colony.

First, this note organizes what had to exist before collapse.

It follows a learning individual until it becomes an individual inside a colony.

## First Individual

The first thing built was not a clever rat.

It was an individual that tried actions inside a box.

Press.

Move.

Receive reward.

Fail.

Then change the next action slightly.

<figure>
  <img src="/images/research/rat/00/rat_day.gif" alt="A single individual learning by acting inside a box">
  <figcaption>The first individual. The world is still small: action, outcome, update, next action.</figcaption>
</figure>

The important point was not to give the correct answer in advance.

The individual changes through its exchange with the environment.

There is a world, an action, an outcome, and an update.

Reduced to its smallest form, the loop looks like this.

```rust
let action = rat.choose_action(&world);
let outcome = world.apply(action);

rat.learn(outcome);
```

This small loop became the base of the later colony.

## Adding Senses

Action and reward alone were still too thin.

Approach something.

Avoid something.

Remember danger.

Search for food.

For that, the world cannot be only coordinates.

It needs smell, taste, pain, fear, and touch.

In taste aversion, one bad bodily experience can make the individual avoid the same taste or smell.

<figure>
  <img src="/images/research/rat/00/cta_embodied.gif" alt="A single individual learning taste aversion">
  <figcaption>Taste aversion. The individual learns not only from reward, but also from harmful bodily experience.</figcaption>
</figure>

When senses are added, the input also expands.

```rust
let input = SensoryInput {
    smell: world.smell_at(rat.position),
    taste: rat.current_taste(),
    fear: rat.fear_level(),
    touch: rat.whisker_contact(&world),
};

rat.update_from(input);
```

At this point, the individual was no longer just a point.

It became something that senses a world.

## Adding Needs

Sensation was still not enough.

The individual needed internal state.

Hunger.

Thirst.

Body temperature.

A tendency to return to a safe place.

Even in the same environment, action changes depending on whether the individual is hungry or satisfied.

<figure>
  <img src="/images/research/rat/00/homeostasis_embodied.gif" alt="A single individual balancing multiple needs while moving through resources">
  <figcaption>Homeostasis. Behavior is shaped not only by the outside world, but also by internal lack.</figcaption>
</figure>

Behavior changes not only from outside stimuli, but also from internal lack.

```rust
let drive = rat.needs.hunger
    + rat.needs.thirst
    + rat.needs.safety;

rat.action_bias = drive;
```

Here, the individual was no longer moved only from outside.

Internal lack pushes behavior.

Move toward food.

Move toward water.

Return to a safer place.

Without this internal state, later parenting, courtship, and territory would remain thin.

## Adding Other Individuals

An individual that can move is not yet a colony.

There must be multiple individuals.

They gather in the same place.

They avoid one another.

They follow.

They compete.

Rank appears.

When predators exist, grouping becomes safer.

<figure>
  <img src="/images/research/rat/01/herd_embodied.gif" alt="Multiple individuals forming a group in a predator environment">
  <figcaption>The colony begins. Individuals change behavior according to the positions of others.</figcaption>
</figure>

Once there is a colony, the next action is not determined only by the individual's own state.

Relations with nearby partners also change behavior.

```rust
for other in colony.nearby(rat.position) {
    rat.update_relation(other);
}
```

Relations appear here for the first time.

Partners to approach.

Partners to avoid.

Partners to follow.

Partners to compete with.

A colony cannot be built only inside an individual.

It appears when multiple individuals are placed in the same environment and meet repeatedly.

## Adding Voice

Direct contact was not enough for a colony.

Danger had to reach partners at a distance.

So a voice was added.

This voice is not complex language yet.

An individual calls when danger appears.

Others hear the call and flee.

Meaning is not given as a dictionary.

It forms through situation and consequence.

<figure>
  <img src="/images/research/rat/01/warning_call.gif" alt="A warning call causing a group to flee from danger">
  <figcaption>Warning call. Voice carries state outside the individual and changes the behavior of the group.</figcaption>
</figure>

Voice sends an individual's state outward.

```rust
if rat.sees_predator() {
    colony.broadcast(Call::Warning, rat.position);
}
```

Voice later connects to culture and records.

But here, it is only the first form.

A voice that carries danger.

A voice that changes another individual's action.

A voice that synchronizes a group.

Even this is enough to move the world beyond the inside of one individual.

## Territory And Reproduction

The last requirement was territory and reproduction.

A group alone does not continue into the next generation.

Who stays where?

Who can hold a place?

Who mates, raises, and learns?

Without these conditions, later collapse cannot be treated.

<figure>
  <img src="/images/research/rat/01/territory.gif" alt="Territories separating through scent marking">
  <figcaption>Territory. Space is not background. It shapes encounter, competition, and reproduction.</figcaption>
</figure>

Territory changes how individuals meet.

```rust
if rat.can_mark(space.cell) {
    space.cell.owner = Some(rat.id);
}
```

Now the box was no longer only a container.

Where are the nests?

Where do individuals pass?

Where do they meet?

Where does congestion occur?

The shape of space affects the shape of the colony.

## Next

At this point, one individual can be placed inside a colony.

It learns.

It senses.

It has needs.

It meets others.

It uses voice.

It holds territory.

It reproduces.

The next question is this.

Can this colony collapse even when resources are sufficient?

The next note treats collapse without resource shortage.

## Notes

1. Sensation: Inputs that change behavior, such as smell, taste, fear, and touch.
2. Rank: A dominant or subordinate relation that appears through repeated competition.
3. Voice: A signal that carries danger or state to other individuals and changes their behavior.
4. Territory: A place that an individual can occupy, or a spatial condition that changes contact and reproduction.
5. Universe 25: A closed-environment mouse experiment by John B. Calhoun. It is known for a colony that failed to continue under crowding even though food and water were available.
