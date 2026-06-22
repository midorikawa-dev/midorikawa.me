+++
title = "01. 群れにする"
date = 2026-06-14
description = "一匹を複数にし、接触、順位、群れ、縄張り、繁殖を同じ更新ループに入れる"

[extra]
lang = "jp"
alternate_url = "/en/research/01-make-a-colony/"
+++

一匹を増やしても、群れにはならない。同じ箱に何匹入れても、それは「複数の一匹」に過ぎない。群れになるのは、互いが互いの入力になったときだ。ある個体の位置が、別の個体の見るものに入る。勝敗が、次の勝率を変える。匂いが、進む先を変える。順位が、子を残せるかを変える。

ここでは、崩壊の再現はしない。まず、存続する群れを作る。群れの構造はどれも設計しない。装置に局所のルールを一つずつ足して、順位も、群れも、縄張りも、条件から生じるかを見る。

## 他の個体が、入力になる

出発点は、前の一匹と同じ。違うのは、結果を返すのが世界だけでなく、他の個体にもなることだ。

```julia
for rat in rats
    act!(rat, observe(world, rat))
end

for (a, b) in encounters(world)
    learn!(a, contest(a, b))
    learn!(b, contest(b, a))
end
```

近づく、避ける、押し返す、勝つ、負ける。相手の動きが、自分の次の入力になる。これで一匹は、世界だけでなく仲間にも合わせて動く。

## 順位ができる

装置に、出会いと勝ち負けを足す。各個体に「自信」を持たせ、餌場で出くわすと小競り合いになる。勝てば自信が少し上がり、負ければ少し下がる<sup class="term-note">＊</sup>。誰が上かは、決めない。

```julia
win_rate = sigmoid(a.confidence - b.confidence)
winner, loser = contest(a, b, win_rate)
winner.confidence += delta
loser.confidence  -= delta
```

走らせると、順位ができた。小さな差が勝ち負けで増幅され、勝った個体はますます勝ち、負けた個体はますます負ける。やがて、順位の勾配ができる。上位は餌場に入りやすく、下位は待たされる。社会の上下が、空腹という体の状態で返ってくる。

<figure>
  <img src="/images/research/rat/01/society_embodied.gif" alt="餌場での接触から順位が分かれるラット群">
  <figcaption>餌場で出会う群れ。勝ち負けの積み重ねから順位が並び、上位ほど餌場に入りやすくなる。</figcaption>
</figure>

## 群れができる

次に、捕食者を足す。「群れろ」とは書かない。捕食者は、はぐれた個体を狙う。個体は、危ないと感じたら近くの仲間に寄り、近づきすぎたら避ける。それだけ。走らせると、捕食者が来れば距離が縮み、去れば散る。群れの中心も決めていない。はぐれると危ない状況で、それぞれが自分の危険を下げた結果、群れになった。

<figure>
  <img src="/images/research/rat/01/herd_embodied.gif" alt="捕食者の接近で集まるラット群">
  <figcaption>捕食者が来ると密集し、去ると散る。群れは、はぐれる危険を下げる行動から生まれる。</figcaption>
</figure>

## 縄張りが分かれる

順位と群れだけでは、どの個体がどこを使うかは決まらない。そこで、匂いのマーキング<sup class="term-note">＊</sup>を足す。各個体は通った場所に匂いを残す。匂いは広がり、薄れる。他の匂いが濃い場所を避け、自分の匂いが残る場所に戻る。区画は与えない。

```julia
push!(world.scent[rat.id], rat.position)

own   = world.scent[rat.id][rat.position]
other = other_scent(world, rat)[rat.position]

move_toward!(rat, own - other)
```

境界は、線として引いたものではない。匂いを残し、他を避けるだけで、使える範囲が条件から分かれていく。

<figure>
  <img src="/images/research/rat/01/territory.gif" alt="匂いのマーキングから分かれる縄張り">
  <figcaption>匂いのマーキングによる縄張り。区画を与えなくても、各個体が自分の範囲へ戻る。</figcaption>
</figure>

## 繁殖につながる

最後に、順位を繁殖につなぐ。群れが次の世代へ続くかを見るには、生きているだけでは足りない。誰が子を残し、子が何を受け継ぐか。各個体に「競争の強さ」を持たせ、順位が高いほど子を残しやすくし、子は親の形質を少し変えて受け継ぐ。

```julia
parents = select_by_rank(rats)

for parent in parents
    push!(next_generation, reproduce(parent; mutation=true))
end
```

順位は、その場の勝ち負けではなく、次の世代の中身を変える変数になった。上位がたくさん子を残せば、競争の強さの平均が世代を超えて動く。社会の構造が、進化の条件になる。

<figure>
  <img src="/images/research/rat/01/reproduction.png" alt="順位による繁殖の偏りと競争形質の変化">
  <figcaption>順位と繁殖をつないだ条件。上位がたくさん子を残すと、競争の強さの分布が世代を超えて変わる。</figcaption>
</figure>

どれも、最初から設計したものではない。装置に局所のルールを足しただけで、順位・群れ・縄張り・進化が、群れの側から出てきた。

次の装置では、餌も水も足りたまま、この群れが壊れる条件を探す。

## 補足

1. 勝者敗者効果: 勝った個体は次も勝ちやすく、負けた個体は次も負けやすくなる効果。ここでは順位を最初から与えず、出会いの積み重ねから作るのに使った。
2. 匂いのマーキング: 個体が通った場所に体臭を残し、他者の匂いを避けて住み分けること。区画を与えなくても、縄張りが後から分かれる。
