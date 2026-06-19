+++
title = "01. 群れにする"
date = 2026-06-17
description = "一匹を複数にし、接触、順位、群れ、縄張り、繁殖を同じ更新ループに入れる"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "jp"
alternate_url = "/en/research/01-make-a-colony/"
+++

## 概要

一匹を増やすだけでは、群れにならない。同じ箱に個体が並んでいるだけなら、それは複数の一匹だ。群れになるのは、個体どうしが互いの入力になったときである。ある個体の位置が別の個体の観測に入り、勝敗が次の勝率を変え、匂いが移動先を変え、順位が繁殖の確率を変える。

ここでは、崩壊する条件はまだ扱わない。先に確かめるのは、資源や繁殖機会を故意に詰まらせない条件で維持できる群れである。最初から壊れる群れでは、次に来る崩壊の原因を切り分けられない。

## 他個体が、入力になる

出発点は、前回の一匹と同じだ。

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

一匹のとき、結果を返すのは世界だけだった。群れでは、他個体も結果を返す。近づく、避ける、押し返す、勝つ、負ける。相手の行動が、自分の次の入力になる。ここで個体は、環境だけでなく他個体にも適応し始める。

## 順位は、設計せず出てくる

最初に足した相互作用は、接触と勝敗だ。各個体に自信度を持たせる。初期値はほぼ同じ。二匹が餌場で出会うと勝負が起き、勝てば自信度が少し上がり、負ければ少し下がる。この勝者敗者効果<sup class="term-note">＊</sup>を、順位が変わる規則として使う。誰が上位かは、あらかじめ決めない。

```python
win_rate = sigmoid(a.confidence - b.confidence)
winner, loser = contest(a, b, win_rate)

winner.confidence += delta
loser.confidence  -= delta
```

この規則だけで、順位が分かれた。小さな差が勝敗で増幅され、勝った個体は次も勝ちやすく、負けた個体は次も負けやすくなる。餌場の接触から、直線的な順位ができる。順位ができると、資源の取り方も変わる。上位は餌場に入りやすく、下位は待つ時間が増える。社会的な差が、空腹という内部状態に返ってくる。

<figure>
  <img src="/images/research/rat/01/society_embodied.gif" alt="餌場での接触から順位が分かれるAIラット群">
  <figcaption>餌場で接触する群れ。勝敗の履歴から順位が分かれ、上位個体ほど餌場に入りやすくなる。</figcaption>
</figure>

## 群れは、危険から生まれる

次に、捕食者を入れた。ここでも「群れろ」とは書かない。捕食者は孤立した個体を狙う。個体は脅威を感じると近くの個体へ寄り、近づきすぎると避ける。

```python
if predator.visible_to(rat):
    rat.target = nearest_group(rat, rats)
else:
    rat.target = food_or_rest(rat)
```

捕食者が来ると個体間距離が縮み、去ると採餌のためにまた散る。群れの中心は指定していない。孤立した個体の危険が高い条件で、各個体が自分の危険を下げようとした結果である。

<figure>
  <img src="/images/research/rat/01/herd_embodied.gif" alt="捕食者の接近で集まるAIラット群">
  <figcaption>捕食者が来ると密集し、去ると散る。群れは、孤立した個体の危険を下げる行動から生じる。</figcaption>
</figure>

## 縄張りは、匂いから分かれる

順位と群れだけでは、個体が使う場所はまだ固定されない。そこで、縄張り<sup class="term-note">＊</sup>を扱うために、匂いによるマーキングを足した。各個体は通った場所に匂いを残す。匂いは広がり、時間とともに薄れる。個体は他個体の匂いが強い場所を避け、自分の匂いが残る場所へ戻る。区画は与えない。

```python
world.scent[rat.id].add(rat.position)

own_scent   = world.scent[rat.id].at(rat.position)
other_scent = world.other_scent(rat).at(rat.position)

rat.move_toward(own_scent - other_scent)
```

この規則から、空間が分かれた。境界は線として与えたものではない。匂いを残し、他者の匂いを避けることで、移動できる範囲が結果として分かれていく。

<figure>
  <img src="/images/research/rat/01/territory.gif" alt="匂いのマーキングから分かれる縄張り">
  <figcaption>匂いのマーキングによる縄張り。区画を与えなくても、各個体が自分の範囲へ戻るようになる。</figcaption>
</figure>

## 順位を、繁殖につなぐ

最後に、順位を繁殖へつないだ。群れが次の世代へ続くかを見るには、個体が生きているだけでは足りない。誰が子を残し、子が何を受け継ぎ、世代が変わっても群れの性質が保たれるか。ここでは競争形質を持たせ、順位が高い個体ほど繁殖機会を得やすくし、子は親の競争形質を少し変えて受け継ぐ。

```python
parents = select_by_rank(rats)

for parent in parents:
    child = parent.reproduce(mutation=True)
    next_generation.append(child)
```

これで順位は、一時的な勝敗ではなく、次世代の構成に影響する変数になった。上位個体が多く子を残す条件では、競争形質の平均が世代を超えて変わる。社会構造が、進化の条件になる。

<figure>
  <img src="/images/research/rat/01/reproduction.png" alt="順位による繁殖の偏りと競争形質の変化">
  <figcaption>順位と繁殖をつないだ条件。上位個体が多く子を残すと、競争形質の分布が世代を超えて変わる。</figcaption>
</figure>

## 次へ

この段階で成立したのは、複数個体が互いを入力にする群れである。接触は順位を変え、捕食者は接近を引き起こし、匂いは空間を分け、順位は繁殖機会に影響する。

次に調べるのは、この群れが壊れる条件である。餌と水を残したまま、どの制約が生活環を止めるのかを見る。

## 補足

1. 勝者敗者効果: 勝った個体が次の勝負で勝ちやすくなり、負けた個体が次の勝負で負けやすくなる効果。ここでは順位を固定値として与えず、接触の履歴から順位を作るために使った。
2. 孤立個体の危険: 捕食者が群れの周縁や孤立個体を狙う条件。個体が近くの仲間へ寄るだけで、一個体あたりの危険が下がる。
3. 縄張り: 個体が空間を占有し、他個体の侵入を避ける範囲。ここでは匂いのマーキングと回避によって、区画が後から分かれるようにした。
