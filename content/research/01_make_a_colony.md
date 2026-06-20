+++
title = "01. 群れにする"
date = 2026-06-14
description = "一匹を複数にし、接触、順位、群れ、縄張り、繁殖を同じ更新ループに入れる"

[extra]
lang = "jp"
alternate_url = "/en/research/01-make-a-colony/"
+++

一匹を増やしても、群れにはならない。同じ箱に何匹入れても、それは「複数の一匹」だ。群れになるのは、互いが互いの入力になったときだ。ある個体の位置が、別の個体の見るものに入る。勝ち負けが、次の勝ちやすさを変える。匂いが、進む先を変える。順位が、子を残せるかを変える。

ここでは崩壊の再現は行わず、存続する群れを構築する。

そして、群れの構造はどれも、こちらが設計しない。局所のルールだけ置いて、順位も、群れも、縄張りも、勝手に出てくるかを見る。

出発点は、前の一匹と同じだ。違うのは、結果を世界だけでなく、他の個体にも返すことだ。

```python
for rat in rats:
    rat.act(world.observe(rat))

for a, b in world.encounters():
    a.learn(contest(a, b))
    b.learn(contest(b, a))
```

近づく、避ける、押し返す、勝つ、負ける。相手の動きが、自分の次の入力になる。ここから一匹は、世界だけでなく仲間にも合わせて動きはじめる。

まず、出会いと勝ち負けを足した。各個体に「自信」を持たせる。最初はほぼ横並びだ。餌場で出くわすと小競り合いになり、勝てば自信が少し上がり、負ければ少し下がる<sup class="term-note">＊</sup>。誰が上かは、こちらで決めない。

```python
win_rate = sigmoid(a.confidence - b.confidence)
winner, loser = contest(a, b, win_rate)
winner.confidence += delta
loser.confidence  -= delta
```

これだけで、順位ができた。小さな差が勝ち負けで増幅され、勝った個体はますます勝ち、負けた個体はますます負ける。やがて、まっすぐな順位が並ぶ。順位ができると、餌の取り方も変わる。上位は餌場に入りやすく、下位は待たされる。社会の上下が、空腹という体の状態で返ってくる。

<figure>
  <img src="/images/research/rat/01/society_embodied.gif" alt="餌場での接触から順位が分かれるAIラット群">
  <figcaption>餌場で出会う群れ。勝ち負けの積み重ねから順位が並び、上位ほど餌場に入りやすくなる。</figcaption>
</figure>

次に、捕食者を入れた。ここでも「群れろ」とは書かない。捕食者は、はぐれた個体を狙う。個体は、危ないと感じたら近くの仲間に寄り、近づきすぎたら避ける。それだけだ。すると、捕食者が来ると距離が縮み、去ると散る。群れの中心も決めていない。はぐれると危ない状況で、めいめいが自分の危険を下げた結果、群れになった。

<figure>
  <img src="/images/research/rat/01/herd_embodied.gif" alt="捕食者の接近で集まるAIラット群">
  <figcaption>捕食者が来ると密集し、去ると散る。群れは、はぐれる危険を下げる行動から生まれる。</figcaption>
</figure>

順位と群れだけでは、どの個体がどの場所を使うかは決まらない。そこで、匂いのマーキング<sup class="term-note">＊</sup>を足した。各個体は通った場所に匂いを残す。匂いは広がり、薄れる。他の匂いが濃い場所を避け、自分の匂いが残る場所に戻る。区画は与えない。

```python
world.scent[rat.id].add(rat.position)

own   = world.scent[rat.id].at(rat.position)
other = world.other_scent(rat).at(rat.position)

rat.move_toward(own - other)
```

この規則から、空間が分かれた。境界は、線として引いたものではない。匂いを残し、他を避けるだけで、使える範囲が必然的に分かれる。

<figure>
  <img src="/images/research/rat/01/territory.gif" alt="匂いのマーキングから分かれる縄張り">
  <figcaption>匂いのマーキングによる縄張り。区画を与えなくても、各個体が自分の範囲へ戻る。</figcaption>
</figure>

最後に、順位を繁殖につないだ。群れが次の世代へ続くかを見るには、生きているだけでは足りない。誰が子を残し、子が何を受け継ぐか。各個体に「競争の強さ」を持たせ、順位が高いほど子を残しやすくし、子は親の形質を少し変えて受け継ぐ。

```python
parents = select_by_rank(rats)

for parent in parents:
    next_generation.append(parent.reproduce(mutation=True))
```

これで順位は、その場の勝ち負けではなく、次の世代の中身を変える変数になった。上位がたくさん子を残す条件では、競争の強さの平均が世代を超えて動く。社会の構造が、進化の条件になる。

<figure>
  <img src="/images/research/rat/01/reproduction.png" alt="順位による繁殖の偏りと競争形質の変化">
  <figcaption>順位と繁殖をつないだ条件。上位がたくさん子を残すと、競争の強さの分布が世代を超えて変わる。</figcaption>
</figure>

どれも、こちらが設計したものではない。局所のルールを置いたことにより、順位・群れ・縄張り・進化が、群れの側から出てきた。

次は、餌も水も足りたまま、この群れが壊れる条件を探す。

## 補足

1. 勝者敗者効果: 勝った個体は次も勝ちやすく、負けた個体は次も負けやすくなる効果。ここでは順位を最初から与えず、出会いの積み重ねから作るのに使った。
2. 匂いのマーキング: 個体が通った場所に体臭を残し、他者の匂いを避けて棲み分けること。区画を与えなくても、縄張りが後から分かれる。
