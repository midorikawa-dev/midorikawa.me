+++
title = "00. 一匹から群れへ"
date = 2026-06-19
description = "学習する一匹が、感覚、欲求、声、縄張りを持ち、群れの中の個体になるまで"
[taxonomies]
topics = ["Artificial Life"]
series = ["AI Rat Colony"]

[extra]
lang = "jp"
alternate_url = "/en/research/00-single-to-colony/"
+++

## 概要

さまざまなラット実験を、AI Rat で再構成したいと思った。

最初に気になったのは、Calhoun の Universe 25<sup class="term-note">＊</sup> だった。

餌も水もある。外敵もいない。それでも群れは崩壊する。

これは面白い問いだった。

でも、ここでいきなり「崩壊する群れ」を作ると、たいていうまくいかない。

崩壊だけを実装すると、崩壊はただの結果ラベルになる。

まず必要なのは、もっと小さいものだった。

一匹がいる。

その一匹が行動する。

世界が反応する。

一匹が少し変わる。

このループが動いてから、感覚を足す。欲求を足す。他の個体を足す。

その先に群れがある。

まずは、崩壊の前に必要だったものを整理する。

学習する一匹が、群れの中の個体になるまでである。

## はじめの一匹

最初に作ったのは、箱の中で行動を試す個体だった。

押す。

移動する。

報酬を得る。

失敗する。

その結果から、次の行動が少し変わる。

<figure>
  <img src="/images/research/rat/00/rat_day.gif" alt="箱の中で行動を試しながら学習する一匹">
  <figcaption>最初の一匹。世界はまだ小さい。行動し、結果を受け取り、次の行動を変える。</figcaption>
</figure>

この段階で大事なのは、正解を最初から与えないことだった。

個体は、環境との往復の中で行動を変える。

世界があり、行動があり、結果があり、更新がある。

この輪を最小限にすると、こうなる。

```rust
let action = rat.choose_action(&world);
let outcome = world.apply(action);

rat.learn(outcome);
```

この小さな輪が、後の群れの土台になった。

## 感覚を足す

行動と報酬だけでは、まだ一匹として薄い。

何かに近づく。

何かを避ける。

危険を覚える。

餌を探す。

そのためには、世界がただの座標では足りない。

匂い、味、痛み、恐怖、触覚が必要だった。

たとえば味覚嫌悪では、毒に近い経験を一度すると、同じ味や匂いを避けるようになる。

<figure>
  <img src="/images/research/rat/00/cta_embodied.gif" alt="味覚嫌悪を学び、危険な味を避ける一匹">
  <figcaption>味覚嫌悪。個体は、報酬だけでなく、身体に悪い経験からも学ぶ。</figcaption>
</figure>

感覚<sup class="term-note">＊</sup>が増えると、入力も増える。

```rust
let input = SensoryInput {
    smell: world.smell_at(rat.position),
    taste: rat.current_taste(),
    fear: rat.fear_level(),
    touch: rat.whisker_contact(&world),
};

rat.update_from(input);
```

ここで一匹は、単なる点ではなくなった。

世界を感じる個体になった。

## 欲求を足す

感覚だけでも足りない。

個体には、内側の状態が必要だった。

空腹。

渇き。

体温。

安全な場所に戻りたいという傾向。

同じ環境でも、空腹のときと満腹のときでは、選ぶ行動が変わる。

<figure>
  <img src="/images/research/rat/00/homeostasis_embodied.gif" alt="複数の欲求を調停しながら資源を巡る一匹">
  <figcaption>ホメオスタシス。外の世界だけでなく、内側の不足が行動を変える。</figcaption>
</figure>

外の刺激だけでなく、内側の不足も行動を変える。

```rust
let drive = rat.needs.hunger
    + rat.needs.thirst
    + rat.needs.safety;

rat.action_bias = drive;
```

ここで個体は、外から動かされるだけではなくなった。

内側の不足が、行動を押し出す。

餌に向かう。

水に向かう。

安全な場所に戻る。

この内側の状態がなければ、後の育児や求愛や縄張りは薄くなる。

## 他の個体を足す

一匹が動けるだけでは、群れにはならない。

複数の個体が必要になる。

同じ場所に集まる。

相手を避ける。

ついていく。

競合する。

順位<sup class="term-note">＊</sup>が生まれる。

捕食者がいると、群れることが安全になる。

<figure>
  <img src="/images/research/rat/01/herd_embodied.gif" alt="捕食者のいる環境で群れを作る複数の個体">
  <figcaption>群れ。個体は単独で最適に動くのではなく、他個体の位置によって行動を変える。</figcaption>
</figure>

群れになると、次の行動は自分の状態だけでは決まらない。

近くにいる相手との関係も、行動を変える。

```rust
for other in colony.nearby(rat.position) {
    rat.update_relation(other);
}
```

ここで初めて、個体同士の関係が出てきた。

近づく相手。

避ける相手。

ついていく相手。

競合する相手。

群れは、個体の内側だけでは作れない。

個体同士が同じ環境に置かれ、何度も出会うことで立ち上がる。

## 声を足す

群れには、直接の接触だけでは足りなかった。

離れた相手に、危険を伝える必要がある。

そこで声<sup class="term-note">＊</sup>を入れた。

ここでの声は、まだ複雑な言語ではない。

危険に反応して鳴く。

その声を聞いた個体が逃げる。

意味は、辞書として与えられるのではなく、状況と結果の中で成立する。

<figure>
  <img src="/images/research/rat/01/warning_call.gif" alt="警告音によって群れが危険から逃げる">
  <figcaption>警告音。声は、個体の外へ状態を運び、群れの行動を変える。</figcaption>
</figure>

声は、個体の状態を外へ出す。

```rust
if rat.sees_predator() {
    colony.broadcast(Call::Warning, rat.position);
}
```

声は、後の文化や記録につながる。

ただし、この段階で扱うのは原型である。

危険を運ぶ声。

相手の行動を変える声。

群れを同期させる声。

それだけで、世界は一匹の内部から少し外へ広がった。

## 縄張りと繁殖

最後に必要だったのは、縄張り<sup class="term-note">＊</sup>と繁殖だった。

群れがあるだけでは、次の世代へ続かない。

誰がどこにいるのか。

誰が場所を取れるのか。

誰が交尾し、誰が育て、誰が学ぶのか。

この条件がなければ、後の崩壊は扱えない。

<figure>
  <img src="/images/research/rat/01/territory.gif" alt="匂いマーキングによって縄張りが分かれていく">
  <figcaption>縄張り。空間は背景ではなく、出会い、競合、繁殖の条件になる。</figcaption>
</figure>

縄張りは、出会い方を変える。

```rust
if rat.can_mark(space.cell) {
    space.cell.owner = Some(rat.id);
}
```

ここで、箱はただの容器ではなくなった。

どこに巣があるか。

どこを通るか。

どこで接触するか。

どこが詰まるか。

空間の形が、群れの形に影響する。

## 次へ

ここまでで、一匹は群れの中に置ける個体になった。

学習する。

感じる。

欲求を持つ。

他個体と出会う。

声を使う。

縄張りを持つ。

繁殖する。

次に問うべきことは、こうである。

この群れは、資源が十分にあっても崩壊するのか。

次は、資源不足ではない崩壊を扱う。

## 補足

1. Universe 25: John B. Calhoun による閉鎖環境でのマウス実験。餌や水が十分にあるにもかかわらず、過密化の中で繁殖や社会行動が崩れ、群れが続かなくなったことで知られる。
2. 感覚: ここでは、匂い、味、恐怖、触覚など、行動を変える入力をまとめて指す。
3. 順位: 個体同士の競合の結果として生じる、優位・劣位の関係。
4. 声: ここでは、危険や状態を他個体へ伝え、相手の行動を変える信号として扱う。
5. 縄張り: 個体が占有しやすい場所、または他個体との接触や繁殖条件を変える空間。
