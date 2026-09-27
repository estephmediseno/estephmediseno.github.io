---
layout: layouts/base.njk
lang: en
title: Brosty
description: Instagram and TikTok for a Colombian fried-chicken restaurant in Madrid.
alt: /trabajo/brosty/
permalink: /en/work/brosty/
---

{% set m = metrics.brosty %}

<article class="case-hero wrap">
  <p class="eyebrow">Case · restaurant</p>
  <h1>Hear the crunch. Know what time to go.</h1>
  <p class="meta">
    <span>Madrid</span>
    <span>Instagram · TikTok</span>
  </p>
  <p class="lede">Colombian fried chicken. In this category content dies as pretty plating. It lives when a stranger in Madrid can feel the oil, the reference, and the way to the door.</p>
</article>

<section class="wrap prose">
  <h2>The system</h2>
  <ul>
    <li>Appetite pieces (sound, close-up, portion).</li>
    <li>Place pieces (who cooks, who waits, what to order).</li>
    <li>Repeat pieces (the reason to come back on a Tuesday).</li>
    <li>Close: address, hours, “I saw you on TikTok” at the counter.</li>
  </ul>
  <p>The numbers on this case are waiting for Insights. Until then the sheet stays in dashes. A restaurant is not measured in followers; it is measured in tables and in sentences said while ordering.</p>
</section>

<section class="wrap">
  <div class="search-mod">
    <p class="eyebrow">Organic search on Instagram</p>
    <p class="query">“{{ m.seo_social.query }}”</p>
    <p>{{ m.seo_social.observed_rank_en }}</p>
    <p class="lede-sm">{{ m.seo_social.note_en }}</p>
    <p class="lede-sm">Verification date: {{ m.seo_social.date_checked }}.</p>
  </div>
</section>

<div class="wrap">
{% include "partials/metric-sheet.njk" %}
</div>

<section class="cta wrap">
  <h2>If the room posts every day and the dining room does not notice</h2>
  <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
</section>
