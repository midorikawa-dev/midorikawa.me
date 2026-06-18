+++
title = "Font Demo"
description = "本文フォント候補の比較。研究記事の同じ文章を、現在のゴシック、Hiragino Mincho ProN、Noto Serif JPで見比べる。"
template = "font-demo.html"
+++

<div class="font-demo">
  <section class="font-card">
    <h2>Current Sans</h2>
    <div class="font-sample sans">
      <p>資源が十分にある環境で、群れはなぜ崩壊するのか。</p>
      <p>本稿では、AIラット群を用いて Universe 25 的な崩壊を最小モデルとして再構成する。餌や水の不足ではなく、社会的役割の飽和が生活環を破綻させるかを調べる。</p>
    </div>
    <p class="font-note">system sans: Hiragino Sans / Yu Gothic / Noto Sans JP fallback</p>
  </section>

  <section class="font-card">
    <h2>Hiragino Mincho ProN</h2>
    <div class="font-sample hiragino-mincho">
      <p>資源が十分にある環境で、群れはなぜ崩壊するのか。</p>
      <p>本稿では、AIラット群を用いて Universe 25 的な崩壊を最小モデルとして再構成する。餌や水の不足ではなく、社会的役割の飽和が生活環を破綻させるかを調べる。</p>
    </div>
    <p class="font-note">system serif: macOSではHiragino Mincho ProN優先</p>
  </section>

  <section class="font-card">
    <h2>Noto Serif JP</h2>
    <div class="font-sample noto-serif">
      <p>資源が十分にある環境で、群れはなぜ崩壊するのか。</p>
      <p>本稿では、AIラット群を用いて Universe 25 的な崩壊を最小モデルとして再構成する。餌や水の不足ではなく、社会的役割の飽和が生活環を破綻させるかを調べる。</p>
    </div>
    <p class="font-note">web font: このデモページだけGoogle Fontsから読み込み</p>
  </section>
</div>
