+++
title = "05. What Collapses?"
date = 2026-06-18
description = "When collapse comes, the first thing lost is not the number of individuals but the knowledge."

[extra]
lang = "en"
alternate_url = "/research/05-what-collapses/"
+++

In 04 I said the voice is the carrier of culture: the voice that teaches, that warns, that brings the colony into step. What happens to that culture when the colony breaks?

The answer first: it does not come back. More precisely, the number of bodies returns, but the knowledge does not. When collapse comes, the first thing lost is not the number of individuals. It is the knowledge.

## Knowledge needs a number of teachers

The "vocabulary" of the voice is not something a rat is born with. It is culture, inherited as the young learn from adults. And the more complex the knowledge, the more users it takes to keep it alive.

This is known in human culture too. The more complex a tool or skill becomes, the more people who can demonstrate and teach it you need to pass it on. When there are too few teachers, the most complex things go first, lost without being rebuilt<sup class="term-note">＊</sup>.

Here I add no new apparatus. I add a measurement. Each cultural item carries a number of teachers needed to keep it. Simple items survive with only a few; complex items cannot survive without many.

```julia
function maintain(item, adults)
    # If too few teachers know the item, no one can learn it, and it is simply lost (never rebuilt).
    if count_who_know(item, adults) < item.teachers_needed
        item.alive = false
    end
    return item.alive
end
```

## Bodies return, knowledge does not

Now I observe the collapse from 02 again, through the eyes of knowledge. As room runs short, the teaching side drops sharply. The number of bodies lingers for a while, and when the crowding eases it even recovers in waves. But the teachers cannot keep up.

Then the most complex cultural items go first: they fall below the number of teachers needed, and disappear. Once an item is gone, it does not return. What no one knows, no one can learn.

<figure>
  <img src="/images/research/rat/05/knowledge_extinction.png" alt="At collapse, bodies return in waves while culture drops in steps and does not return">
  <figcaption>At collapse. Bodies (gray) return in waves, but culture (red) drops in steps and does not return. Teachers (orange) cannot keep up either. On the right, as a share of the peak: bodies 45%, teachers 20%, knowledge 24%.</figcaption>
</figure>

The numbers make it clear. A colony with enough room kept all 10 of 10 cultural items. A colony that collapsed kept only 2.4, even when it survived. Against the peak, bodies returned to 45%, but teachers to 20% and knowledge to 24%. Bodies recover more easily; knowledge dies first.

## Bodies remain, but the colony hollows out

A colony "remaining" and a colony "continuing" are not the same thing.

Count from the outside and the rats are still there. But inside, what can be passed to the next generation is shrinking. Teachers decrease, knowledge decreases, and the adults who hold it decrease further. Only bodies remain, and culture drains away. Collapse looks full for a while, even as it empties out.

<figure>
  <img src="/images/research/rat/05/knowledge_extinction.gif" alt="The culture of the voice turns gray from the most complex items first, and the song grows quiet">
  <figcaption>The culture of the voice turns gray from the most complex items first. The bodies are still there, but the song grows quiet.</figcaption>
</figure>

The "culture" here is not a claim that real rats build up anything this complex. A culture that accumulates complexity is where this model steps one pace beyond actual rats. Read it as a thought experiment with a minimal intelligent individual wearing a rat's skin. Even so, something is visible. The recovery of bodies and the loss of knowledge run at different speeds. The count can return while the knowledge does not.

If knowledge dies together with its living teachers, I can ask: can knowledge be placed outside the teachers? Can it be kept, written down somewhere or repeated by everyone, so that it survives even when the individuals who remembered it are gone? The next apparatus takes up records and ritual.

## Notes

1. Cultural complexity and teachers: The more complex a skill or body of knowledge, the more users (demonstrators) it takes to maintain. When the number falls below a threshold, it is lost without being rebuilt. In anthropology this is argued by Henrich and others, and is known from cases such as the simplification of tool technology in Tasmania.
