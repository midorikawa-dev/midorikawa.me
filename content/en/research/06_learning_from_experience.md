+++
title = "06. Individuals That Change Through Experience"
date = 2026-06-18
draft = true
description = "Treating social competence as updated behavior weights rather than fixed traits"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "en"
alternate_url = "/research/06-learning-from-experience/"
+++

## Overview

The previous note organized the models so far as one arc.

What collapsed was not population size alone, but transmission.

What, then, is being transmitted?

So far, I have called it social competence.

But if social competence is placed into the model as a fixed value, the model remains weak.

Competent individuals are competent from the start. Less competent individuals are less competent from the start.

This note treats a condition where individuals change behavior through experience.

Social competence is treated not as a fixed value, but as a set of weights that can be updated.

## Question

Can individuals change through experience?

Does an individual that was helped become more likely to approach others later?

Does an individual that was betrayed keep more distance?

Does an offspring raised near competent adults become more likely to act in similar ways?

Earlier models treated these changes rather simply.

Each individual had social competence. If it was high, courtship, parenting, helping, and learning were more likely to succeed.

But that makes it hard to see where competence comes from.

Instead of treating competence as fixed, it has to be treated as something updated by experience.

## Competence as a Fixed Value

A fixed competence value is easy to handle.

Each individual has a social competence score.

Individuals with a high score are more likely to succeed at courtship, parenting, helping, and learning.

Individuals with a low score are more likely to fail.

Collapse can still be observed this way.

When competent adults decrease, offspring lose chances to learn.

When those offspring become adults, the next generation becomes less competent.

But this representation makes it hard to see which experiences change competence.

What an individual has experienced does not return strongly enough as a change in behavior.

Being helped, being betrayed, and being able to learn easily become only history.

They do not easily become forces that change action.

## Updated Weights

So I treat social competence not as one value, but as behavior weights.

For example:

```text
weight to approach
weight to avoid
weight to help
weight to wait
weight to learn
weight to cheat
```

An individual observes the situation.

Who is nearby? Is the other individual kin? Does it share a tag? Has it helped before? Has it betrayed before?

Then the individual chooses an action according to the weights.

When an experience occurs, the weights change slightly.

If the individual is helped, the weights to approach and help can increase.

If the individual is betrayed, the weight to avoid that partner can increase.

If the individual learns near a competent adult, the weight to learn can remain.

The individual does not change all at once.

It accumulates small updates.

## Change

Only one part changes.

Social competence is stored not as a fixed value, but as behavior weights updated by experience.

The flow is simple.

```text
experience -> weight update -> next action -> next experience
```

For example, experience changes weights like this.

```rust
if helped {
    weights.approach += 0.03;
    weights.help += 0.02;
}

if betrayed {
    weights.avoid += 0.05;
}

if learned_from_adult {
    weights.learn += 0.03;
}
```

The important part is that experience is not kept only as a description. It returns as a value that changes the next action.

With this change, social competence is no longer a property sealed inside the individual.

It becomes a property that changes through relations.

## Result

When updates from experience are added, differences between colonies become easier to see.

In a stable colony, experiences of being helped and being able to learn remain available.

Those experiences make the next actions slightly more cooperative.

As cooperative actions increase, learning opportunities remain.

This loop supports the colony.

In a colony near collapse, the opposite loop appears.

Individuals are betrayed. They avoid others. There are fewer partners to learn from. Helping weights do not remain.

As a result, even if population remains, the content of relations becomes thin.

Social competence was not lost from the beginning.

The colony lost the opportunities to update it.

## What Becomes Visible

This change slightly shifts the meaning of collapse.

Before, I described the process as competent adults decreasing and offspring losing chances to learn.

Now there is another layer in between.

Offspring build behavior weights through experience.

So being unable to approach competent adults does not only mean failing to receive information.

It means failing to update weights for approaching, waiting, helping, and learning.

That difference matters.

Social competence remains not as information, but as a tendency of action.

Who was nearby?

Who helped?

Who betrayed?

What was tried and succeeded?

Those experiences change the probabilities of later actions.

## Interpretation

This does not create highly intelligent individuals.

Individuals are not doing large-scale reasoning.

The model treats small updates.

Strengthen a good experience slightly.

Avoid a bad experience slightly.

Remain near an individual from whom learning was possible.

Even that can change the behavior of the colony.

Social competence is not something placed inside the individual from the start.

It is formed through environment and relation.

With this view, collapse becomes even more clearly a problem of transmission.

Transmission is not only words or information.

It is also the process by which experience changes the weights of future action.

## Limitations

Learning in this model is still simple.

Rewards and penalties are crude.

Memory is short.

The individual does not understand the other. It only moves weights in response to experience.

Still, this shows more than a model with fixed values alone.

It makes it easier to see which relations preserve social competence and which relations let it disappear.

For now, this is still small.

But for observing collapse, this smallness can be enough.

## Next Question

If behavior changes through experience, the next object is memory.

How much past does an individual carry?

How long does it avoid a partner that betrayed it once?

How long does it remember a partner that helped?

A colony with short memory and a colony with long memory should form different kinds of cooperation.

The next note will treat the length of memory.

## Notes

1. behavior weight: An internal value that makes an action more likely to be selected. It is not a fixed personality trait; it changes through experience.
2. update: A small change to behavior weights after experience. Here it means simple reinforcement or suppression, not large-scale reasoning.
3. social competence: The ability to sustain reproduction, parenting, helping, and learning through relations with others. In this note, it is treated as a combination of behavior weights.
4. transmission: Not only receiving information from adults, but also acquiring tendencies of action through experience.
