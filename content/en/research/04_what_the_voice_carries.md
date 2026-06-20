+++
title = "04. What the Voice Carries"
date = 2026-06-17
description = "A rat's voice is not language. What it carries is mood and situation."

[extra]
lang = "en"
alternate_url = "/research/04-what-the-voice-carries/"
+++

In 03, the thing that worked best was teaching. But when I say teaching, I was quietly assuming something. To teach, you need a means of conveying. For a rat, that means is the voice.

So what does that voice carry? Let me say it up front: not language. A rat's voice carries mood and situation, not sentences or commands. Here I build the rat's voice as close to the real thing as I can, and look at what it conveys and what it does not.

## Bringing the voice closer to the real thing

Until now, the voice inside the colony was just a symbol: a single mark that meant danger. But a real rat's voice has more structure. So I rebuilt it to match the features described in the literature.

A rat's voice is ultrasound<sup class="term-note">＊</sup>, almost inaudible to the human ear. It splits into two broad bands. The lower one, around 22kHz<sup class="term-note">＊</sup>, is a long, flat call, made in pain or danger. The higher one, around 50kHz, is a short call whose pitch moves around, made when a rat is with others or playing. The first is an "I don't like this" call, the second an "I like this" call.

<figure>
  <img src="/images/research/rat/04/vocalization.png" alt="The two bands at 22kHz and 50kHz, the syllable types, their lengths, and the statistics of their ordering">
  <figcaption>The vocal repertoire. The low 22kHz alarm, and around ten syllable types in the high 50kHz range. Aversive calls are long, pleasant calls are short. The ordering of syllables is biased, not random.</figcaption>
</figure>

The higher calls have finer shapes: flat, upward, downward, arched, trilled, around ten syllable types. And they do not come out in any order. The syllable that follows a given one is biased. There is something like a loose grammar. When I traced the statistics in the literature, my model showed the same features. The calls split cleanly into two bands, aversive calls are long (a median of about 900 milliseconds), pleasant calls are short (about 40 milliseconds), and the ordering is more ordered than random (the spread of transitions is 2.45, against 3.20 from shuffling the order).

## The voice carries mood

What matters is what the voice does not carry. It is not language. It does not carry a contentful sentence like "there is a snake to the right." What it carries is the sender's state: afraid, or calm. The one who hears reads that mood and reacts. Hear 22kHz and flee; hear 50kHz and approach. It does not read content; it senses the other's state.

```python
def speak(self):
    # The voice comes from internal state (affect), not a proposition.
    band = "22kHz" if self.valence < 0 else "50kHz"
    return Call(band=band, syllable=self.pick_syllable())

def hear(self, call):
    # The hearer reacts to the other's state, not to the content.
    self.flee() if call.band == "22kHz" else self.approach()
```

Compared to human language, this may look thin. Even so, it can do a great deal. Danger spreads through the colony in an instant, and calm sets the mood of a place.

<figure>
  <img src="/images/research/rat/04/vocalization.gif" alt="From social 50kHz calls, to a 22kHz alarm when a predator appears, and back to social calls">
  <figcaption>The voice switches with the situation. The social 50kHz when others are near, the 22kHz alarm when a predator comes, and then back to social calls.</figcaption>
</figure>

This does not reproduce a real rat's vocalizations as they are. I only shaped the model to fit the statistical features in the literature; I am not synthesizing actual calls. And what I modeled is the rat's mood, not its thought. What you can read from the voice is a state, not what is in the head. This distinction will matter later. The voice carries affect and context. Meaning and culture are built on top of it.

The voice became the medium of culture: the voice that teaches, that warns, that brings the colony into step. So I can ask how durable what rides on that medium is. When the ones who teach are gone, what happens to the knowledge the voice was carrying? Next, I look at what is really lost when the colony collapses.

## Notes

1. Ultrasonic vocalization (USV): High-frequency calls made by rats, almost inaudible to humans. They become audible when recorded and pitched down.
2. 22kHz / 50kHz bands: 22kHz is long and flat, made in aversion or alarm; 50kHz is short with moving pitch, made in social or play contexts. Based on the synthesis by Brudzynski and Panksepp.
