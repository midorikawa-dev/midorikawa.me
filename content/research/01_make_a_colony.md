+++
title = "01. 群れにする"
date = 2026-06-19
description = "一匹を複数にし、接触、順位、群れ、縄張り、繁殖を同じ更新ループに入れる"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "jp"
+++

## 概要

前回は、一匹を作った。

観測から行動を選び、結果に応じて行動の選び方を更新する個体である。

ただし、一匹を増やすだけでは群れにならない。個体が同じ箱に並んでいるだけなら、それは複数の一匹である。群れにするには、個体同士が互いの入力になる必要がある。

ある個体の位置が、別の個体の観測に入る。ある個体の勝敗が、次の接触での勝率を変える。ある個体の匂いが、別の個体の移動先を変える。ある個体の順位が、繁殖できる確率を変える。

ここでは、崩壊はまだ扱わない。

まず確認するのは、資源や繁殖機会を故意に詰まらせない条件では維持できる群れである。最初から壊れる群れでは、次に起きる崩壊の原因を分けられない。

## 複数の一匹

出発点は、前回の一匹と同じである。

```python
action = rat.choose_action(world.observe(rat))
outcome = world.apply(rat, action)
rat.learn(outcome)
```

複数にすると、ここに他個体が入る。

```python
for rat in rats:
    action = rat.choose_action(world.observe(rat))
    world.apply(rat, action)

for a, b in world.encounters():
    outcome_a, outcome_b = contest(a, b)
    a.learn(outcome_a)
    b.learn(outcome_b)
```

変更点は、結果を返す対象が増えることである。

一匹のとき、結果を返すのは世界だけだった。群れでは、他個体も結果を返す。近づく。避ける。押し返す。勝つ。負ける。相手の行動が、自分の次の入力になる。

この時点で、個体は環境だけでなく、他個体にも適応し始める。

## 順位

最初に足した相互作用は、接触と勝敗だった。

各個体に、自信度を持たせる。初期値はほぼ同じである。二匹が餌場で出会うと、勝負が起きる。勝つと自信度が少し上がる。負けると少し下がる。この勝者敗者効果<sup class="term-note">＊</sup>を、順位が変わる規則として使う。

誰が上位かは、あらかじめ決めない。

```python
win_rate = sigmoid(a.confidence - b.confidence)
winner, loser = contest(a, b, win_rate)

winner.confidence += delta
loser.confidence  -= delta
```

この規則だけで、順位が分かれた。

小さな差が、勝敗によって増幅される。勝った個体は次も勝ちやすくなる。負けた個体は次も負けやすくなる。結果として、餌場での接触から直線的な順位ができる。

順位ができると、資源の取り方も変わる。上位個体は餌場に入りやすい。下位個体は待つ時間が増える。社会的な差が、空腹という内部状態に戻ってくる。

<figure>
  <img src="/images/research/rat/01/society_embodied.gif" alt="餌場での接触から順位が分かれるAIラット群">
  <figcaption>餌場で接触する群れ。勝敗の履歴から順位が分かれ、上位個体ほど餌場に入りやすくなる。</figcaption>
</figure>

## 群れる

次に、捕食者を入れた。

ここでも「群れろ」とは書かない。捕食者は孤立した個体を狙う。個体は脅威を感じたとき、近くの個体へ寄る。ただし、近づきすぎると避ける。

```python
if predator.visible_to(rat):
    rat.target = nearest_group(rat, rats)
else:
    rat.target = food_or_rest(rat)
```

この条件では、捕食者が来ると個体間距離が縮む。捕食者が去ると、採餌のためにまた散る。

群れの中心は指定していない。孤立した個体の危険が高い条件で、各個体が自分の危険を下げようとした結果である。

<figure>
  <img src="/images/research/rat/01/herd_embodied.gif" alt="捕食者の接近で集まるAIラット群">
  <figcaption>捕食者が来ると密集し、去ると散る。群れは、孤立した個体の危険を下げる行動から生じる。</figcaption>
</figure>

## 縄張り

順位と群れだけでは、個体が使う場所はまだ固定されない。

個体がどこにいるか、どこを避けるか、どこに戻るかが必要になる。そこで、縄張り<sup class="term-note">＊</sup>を扱うために、匂いによるマーキングを足した。

各個体は移動した場所に匂いを残す。匂いは広がり、時間とともに薄くなる。個体は他個体の匂いが強い場所を避け、自分の匂いが残る場所へ戻る。

区画は与えない。

```python
world.scent[rat.id].add(rat.position)

own_scent   = world.scent[rat.id].at(rat.position)
other_scent = world.other_scent(rat).at(rat.position)

rat.move_toward(own_scent - other_scent)
```

この規則から、空間が分かれた。

境界は最初から線として与えたものではない。個体が匂いを残し、他個体の匂いを避けることで、移動できる範囲が分かれていく。

<figure>
  <img src="/images/research/rat/01/territory.gif" alt="匂いのマーキングから分かれる縄張り">
  <figcaption>匂いのマーキングによる縄張り。区画を与えなくても、各個体が自分の範囲へ戻るようになる。</figcaption>
</figure>

## 繁殖

最後に、順位を繁殖へ接続した。

群れが次の世代へ続くかを調べるには、個体が生きているだけでは足りない。誰が子を残すか、子が何を受け継ぐか、世代が変わっても群れの性質が保たれるかを見る必要がある。

ここでは、競争形質を持たせた。順位が高い個体ほど繁殖機会を得やすくし、子は親の競争形質を少し変化させて受け継ぐ。

```python
parents = select_by_rank(rats)

for parent in parents:
    child = parent.reproduce(mutation=True)
    next_generation.append(child)
```

これで、順位は一時的な勝敗ではなく、次世代の構成に影響する変数になった。

上位個体が多く子を残す条件では、競争形質の平均が世代を超えて変わる。社会構造が、進化の条件になる。

<figure>
  <img src="/images/research/rat/01/reproduction.png" alt="順位による繁殖の偏りと競争形質の変化">
  <figcaption>順位と繁殖を接続した条件。上位個体が多く子を残すと、競争形質の分布が世代を超えて変わる。</figcaption>
</figure>

## 次へ

ここでできたのは、複数個体が同じ環境で干渉する群れである。

個体は接触で順位を変える。捕食者が来ると近くの個体へ寄る。匂いによって空間を分ける。順位は繁殖機会に影響する。

まだ崩壊は入れていない。

次に調べるのは、資源が足りていても、この群れが壊れる条件である。

## 補足

1. 勝者敗者効果: 勝った個体が次の勝負で勝ちやすくなり、負けた個体が次の勝負で負けやすくなる効果。ここでは順位を固定値として与えず、接触の履歴から順位を作るために使った。
2. 孤立個体の危険: 捕食者が群れの周縁や孤立個体を狙う条件。個体が近くの仲間へ寄るだけで、一個体あたりの危険が下がる。
3. 縄張り: 個体が空間を占有し、他個体の侵入を避ける範囲。ここでは匂いのマーキングと回避によって、区画が後から分かれるようにした。
