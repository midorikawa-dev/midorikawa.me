+++
title = "07. The Boundary of Companions"
date = 2026-06-20
description = "What turns a stranger with no shared blood into a companion is not blood but a shared tag."

[extra]
lang = "en"
alternate_url = "/research/07-boundary-of-companions/"
+++

In 06 I found that if knowledge is put into records and repeated by everyone, culture outlives its teachers. Those records carry not only knowledge but stories. The ones who share the same story may become companions.

In 03, helping rats with no shared blood prevented collapse. But why help? What lets in someone who is not even family as one to be helped? The answer is not blood. Sharing the same tag turns a stranger into a companion. Colonies of pure self-interest went extinct nearly eight in ten of the time, and even colonies that helped only kin lost half. But once they also helped those with the same tag, extinction fell below three in ten. Here I hand out a "tag" to each individual.

## Helping those who share the same tag

Until now, the only reason to help was a shared bloodline. Help your own young or close kin, and something near to yourself is more likely to remain<sup class="term-note">＊</sup>. It is explainable. But in a large colony, those around you are not necessarily kin.

So I give each individual one "tag"<sup class="term-note">＊</sup>. A color, a name, a signal, any of these. Here I strip out the content and treat it as a category the individual carries. At first everyone has a different tag. That is, at the start they are strangers to one another.

Whom to help is decided like this. If kin, help. Or if they carry the same tag, help. Otherwise, do not help. The tag itself has no meaning to begin with. Red is not superior, blue is not correct. They share the same tag, that is all. The meaning is born from being shared.

```julia
function help_or_not(self, other)
    # Help only kin or those with the same tag. The tag has no content. Only whether it is shared matters.
    if is_kin(self, other) || self.tag == other.tag
        help(other)
    end
end
```

I prepared two ways for the tag to spread. One is inherited from the parent. The young carry the mother's tag as it is. In this case the tag comes close to a mark of kinship, and whom they help ends up following the family line. The other spreads within the colony<sup class="term-note">＊</sup>. The young receive whichever tag is most common in the colony at the time. Even if it differs from the parent's, if those around them carry it, they take it on. In this case the tag can spread beyond kin.

## When the tags align, the collapse stops

In the harsh apparatus of 16 nests, I compare three. Colonies of pure self-interest, colonies that help only kin, colonies that also help the same tag.

Colonies of pure self-interest went extinct nearly eight in ten of the time (79%). Even colonies that help only kin lost half (50%). Colonies that also helped those with the same tag saw extinction fall below three in ten (29%). They held collapse down as much as, or more than, the colonies in 03 that helped without choosing whom. Just by reaching beyond family, the closed apparatus holds out with fewer ways of breaking.

<figure>
  <img src="/images/research/rat/07/shared_myth.png" alt="Self-interest 79%, kin only 50%, shared tag 29%. A comparison of collapse rates">
  <figcaption>A comparison at 16 nests. Self-interest alone 79%, kin only 50%, colonies sharing the same tag 29% extinct. When the tag spreads through the colony, helping arises beyond kin, and collapse drops.</figcaption>
</figure>

What worked was not carrying a tag but the tags coming into alignment. The scattered tags of the start, as the young receive the majority one, shrink in variety, and before long many individuals share the same tag. At that moment, individuals who are not kin are also treated as the same companions.

<figure>
  <img src="/images/research/rat/07/shared_myth.gif" alt="A colony with scattered tags converges toward a single tag">
  <figcaption>An individual's color is the tag it carries. The scattered tags of the start come close to one within the colony. Those who are not kin end up on the same side too.</figcaption>
</figure>

## Companions are not decided by blood

What this shows is that what counts as a companion is not decided by blood alone.

If the tag is only inherited from the parent, it comes close to a mark of kinship, and the range of helping closes around family. But when the tag spreads through the colony, those who are not kin carry the same tag too. Then the reason to help changes. They help not because of family, but because they are treated as the same side. This difference changed the colony's collapse rate.

The same tag is not helped because they in fact share the same blood. It is helped because the rule that treats them as the same side is shared within the colony. The boundary of companions is drawn not along the bloodline but along the shared rule.

The "tag" here is not real culture or religion or the state itself. The setup, where an individual carries a tag and uses it to choose whom to help, is heavily abstracted. Even so, something is visible. The line of companions is not inborn; it can be redrawn through sharing.

But when companions widen, another gap opens. The individual who is helped yet does not help. Who uses only the same tag and pays no cost. What holds down such free riding? The next apparatus takes up being seen, being kept in the record, and the reputation that remains after death.

## Notes

1. Kin altruism: Behavior that helps individuals related by blood. The idea is that if close kin remain, genetic information near one's own is more likely to remain too, following Hamilton's kin selection.
2. Shared tag (tag-based cooperation): A mechanism for helping those who carry the same tag (color, name, signal, and so on). The tag itself has no value; the range of companions is decided by its being shared. Riolo, Cohen, and Axelrod showed that cooperation among non-kin can spread on tags alone.
3. Horizontal transmission: A way of spreading sideways within the colony, not only the vertical inheritance from parent to child. Here it is expressed by the young receiving the colony's majority tag.
