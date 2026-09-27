---
layout: layouts/base.njk
lang: en
title: Suitailor
description: Content system and social search for contemporary tailoring in Madrid.
alt: /trabajo/suitailor/
permalink: /en/work/suitailor/
---

{% set m = metrics.suitailor %}

<article class="case-hero wrap">
  <p class="eyebrow">Case · tailoring</p>
  <h1>Suitailor does not need to go viral. It needs the man who already searched “sastrería en Madrid”.</h1>
  <p class="meta">
    <span>Madrid · Salamanca and Las Rozas</span>
    <span>Instagram · TikTok · Facebook</span>
    <span><a href="{{ m.handles.web }}">suitailor.com</a></span>
  </p>
  <p class="lede">Contemporary menswear, made to measure, by appointment, two ateliers. The work is not fame. It is this: when someone types the exact query, the first piece they see is theirs.</p>
</article>

<section class="wrap prose">
  <h2>The problem</h2>
  <p>Madrid is full of tailors with marble, shears, and the word “artesanal”. Suitailor’s client is not collecting tailors in a feed. He has an event, a body, and a doubt: <em>if I walk in, will this be complicated?</em></p>
  <p>The content has to look like the workshop (not a set), teach the first step, and be findable with the words that person already uses.</p>

  <h2>The system</h2>
  <ul>
    <li>Pillars: first visit, cloth and detail, made-to-measure process, a clear booking.</li>
    <li>On-screen language and captions aligned to real queries: sastrería en Madrid, traje a medida, camisas a medida.</li>
    <li>Pieces built to be saved — the man who has not booked yet, and will.</li>
    <li>Close on the appointment, not on “follow us”.</li>
    <li>Beside the content: a shirt customizer on Node and Firebase, for the client who already wants to choose cloth and cuff without starting from zero.</li>
  </ul>
</section>

<section class="wrap">
  <div class="search-mod">
    <p class="eyebrow">Search inside Instagram and TikTok</p>
    <p class="query">“sastreria en madrid”</p>
    <p>{{ m.seo_social.observed_rank_en }}</p>
    <p class="lede-sm">{{ m.seo_social.note_en }}</p>
    <p class="lede-sm">Open the apps and type it. That is more credible than a framed screenshot. Date checked: {{ m.seo_social.date_checked | dash }}.</p>
  </div>
</section>

<section class="wrap prose">
  <h2>Why saves matter</h2>
  <p>A like is a reflex. A save is “I will need this”. In tailoring the buying cycle is not a Saturday. The piece that gets saved — what the first visit feels like, which cloth, how long a suit takes — works for weeks.</p>
  <p>{{ m.sample_post.title_en }}. {{ m.sample_post.note_en }}</p>
</section>

<div class="wrap">
{% include "partials/metric-sheet.njk" %}
</div>

<section class="wrap prose">
  <h2>How to read these numbers</h2>
  <p>Follower count does not pay for a suit. What matters is intent views, saves per piece, profile visits, and appointments the atelier can attribute. If a figure is the client’s estimate, it is labelled that way. If it has not been pasted into the YAML yet, the cell stays an em dash.</p>

  <h2>Locations</h2>
  <p>Calle de Lope de Rueda 7, Barrio de Salamanca. Calle Mónaco 37, Las Rozas. The content covers the centre and the northwest without pretending they are the same neighbourhood.</p>

  <h2>Next</h2>
  <p>A stable first-visit series. Clean count of appointments that mention Instagram or TikTok. Not more pieces. Better pieces, same words.</p>
</section>

<section class="cta wrap">
  <h2>Does the business appear when someone searches — or only when a friend opens the profile?</h2>
  <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
</section>
