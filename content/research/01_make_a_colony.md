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

一匹を増やしただけでは、群れにはならない。同じ箱に何匹も置いても、それはただの「複数の一匹」だ。群れになるのは、お互いがお互いの入力になったときだ。ある個体の位置が、別の個体の見るものに入る。勝った負けたが、次の勝ちやすさを変える。匂いが、相手の進む先を変える。順位が、子を残せるかどうかを変える。

この章では、まだ崩壊は持ち込まない。先に作りたいのは、わざと詰まらせなければちゃんと続く群れだ。最初から壊れる群れでは、あとで崩壊の原因を切り分けられないからだ。

## 他の個体が、入力になる

出発点は、前の一匹と同じだ。

```python
action = rat.choose_action(world.observe(rat))
outcome = world.apply(rat, action)
rat.learn(outcome)
```

複数になると、ここに他の個体が入ってくる。

```python
for rat in rats:
    action = rat.choose_action(world.observe(rat))
    world.apply(rat, action)

for a, b in world.encounters():
    a.learn(contest(a, b))
    b.learn(contest(b, a))
```

一匹のときは、結果を返すのは世界だけだった。群れでは、他の個体も結果を返す。近づく、避ける、押し返す、勝つ、負ける。相手の動きが、自分の次の入力になる。ここから一匹は、世界だけでなく、仲間にも合わせて動きはじめる。

## 順位は、決めなくても出てくる

最初に足したのは、出会いと勝ち負けだ。各個体に「自信」を持たせる。最初はほぼ横並び。二匹が餌場で出くわすと小競り合いが起き、勝てば自信が少し上がり、負ければ少し下がる<sup class="term-note">＊</sup>。誰が上かは、こちらでは決めない。

```python
win_rate = sigmoid(a.confidence - b.confidence)
winner, loser = contest(a, b, win_rate)

winner.confidence += delta
loser.confidence  -= delta
```

この規則だけで、順位ができた。小さな差が勝ち負けで増幅され、勝った個体はますます勝ちやすく、負けた個体はますます負けやすくなる。餌場での出会いから、まっすぐな順位が並ぶ。順位ができると、餌の取り方も変わる。上位は餌場に入りやすく、下位は待たされる。社会の上下が、空腹という体の状態に返ってくる。

<figure>
  <img src="/images/research/rat/01/society_embodied.gif" alt="餌場での接触から順位が分かれるAIラット群">
  <figcaption>餌場で出会う群れ。勝ち負けの積み重ねから順位が並び、上位ほど餌場に入りやすくなる。</figcaption>
</figure>

## 群れは、危険から生まれる

次に、捕食者を入れた。ここでも「群れろ」とは書かない。捕食者は、はぐれた個体を狙う。個体は、危ないと感じたら近くの仲間に寄る。ただし、近づきすぎたら避ける。それだけだ。

```python
if predator.visible_to(rat):
    rat.target = nearest_group(rat, rats)
else:
    rat.target = food_or_rest(rat)
```

すると、捕食者が来ると個体どうしの距離が縮み、去るとまた餌を探して散る。群れの中心も、こちらは決めていない。はぐれると危ない、という状況で、めいめいが自分の危険を下げようとした結果、群れになった。

<figure>
  <img src="/images/research/rat/01/herd_embodied.gif" alt="捕食者の接近で集まるAIラット群">
  <figcaption>捕食者が来ると密集し、去ると散る。群れは、はぐれる危険を下げる行動から生まれる。</figcaption>
</figure>

## 縄張りは、匂いから分かれる

順位と群れだけでは、どの個体がどこを使うかは、まだ決まらない。そこで、匂いのマーキング<sup class="term-note">＊</sup>を足した。各個体は通った場所に匂いを残す。匂いは広がって、時間が経つと薄れる。個体は、他の匂いが濃い場所を避け、自分の匂いが残る場所に戻る。区画は与えない。

```python
world.scent[rat.id].add(rat.position)

own   = world.scent[rat.id].at(rat.position)
other = world.other_scent(rat).at(rat.position)

rat.move_toward(own - other)
```

この規則から、空間が分かれた。境界は、線として引いたものではない。匂いを残し、他の匂いを避けるだけで、使える範囲がひとりでに分かれていく。

<figure>
  <img src="/images/research/rat/01/territory.gif" alt="匂いのマーキングから分かれる縄張り">
  <figcaption>匂いのマーキングによる縄張り。区画を与えなくても、各個体が自分の範囲へ戻るようになる。</figcaption>
</figure>

## 順位を、繁殖につなぐ

最後に、順位を繁殖につないだ。群れが次の世代に続くかを見るには、生きているだけでは足りない。誰が子を残し、子が何を受け継ぎ、世代が変わっても群れの性質が保たれるか。ここでは「競争の強さ」という形質を持たせ、順位が高い個体ほど子を残しやすくして、子は親の形質を少し変えて受け継ぐ。

```python
parents = select_by_rank(rats)

for parent in parents:
    child = parent.reproduce(mutation=True)
    next_generation.append(child)
```

これで順位は、その場の勝ち負けではなく、次の世代の中身を変える変数になった。上位がたくさん子を残す条件では、競争の強さの平均が世代を超えて動く。社会の構造が、進化の条件になる。

<figure>
  <img src="/images/research/rat/01/reproduction.png" alt="順位による繁殖の偏りと競争形質の変化">
  <figcaption>順位と繁殖をつないだ条件。上位がたくさん子を残すと、競争の強さの分布が世代を超えて変わる。</figcaption>
</figure>

## 次へ

ここでできたのは、複数の個体がお互いに干渉する群れだ。出会いで順位が動き、捕食者が来れば寄り集まり、匂いで場所を分け、順位が繁殖を左右する。

次は、餌も水も足りたまま、この群れが壊れる条件を探す。

## 補足

1. 勝者敗者効果: 勝った個体は次も勝ちやすく、負けた個体は次も負けやすくなる効果。ここでは順位を最初から与えず、出会いの積み重ねから順位を作るのに使った。
2. 匂いのマーキング: 個体が通った場所に体臭を残し、他者の匂いを避けて棲み分けること。区画を与えなくても、縄張りが後から分かれる。
