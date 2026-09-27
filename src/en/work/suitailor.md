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
  <p class="eyebrow">Case · bespoke tailoring</p>
  <h1>Suitailor does not chase virality: it targets the client searching “sastrería en Madrid” to commission a suit.</h1>
  <p class="meta">
    <span>Madrid · Salamanca and Las Rozas</span>
    <span>Instagram · TikTok · Facebook</span>
    <span><a href="{{ m.handles.web }}">suitailor.com</a></span>
  </p>
  <p class="lede">Contemporary menswear, bespoke suits and shirts by appointment across two Madrid ateliers. The focus is precise: when a customer searches for bespoke tailoring, the most authoritative answer on screen is Suitailor.</p>
</article>

<section class="wrap prose">
  <h2>The problem</h2>
  <p>In a sector dominated by heritage codes and intimidating appointments, a potential customer has an upcoming occasion (a wedding, gala, or executive wardrobe update) and an immediate hesitation: <em>if I book a consultation, how straightforward is the process?</em></p>
  <p>Content must achieve three goals simultaneously: capture the genuine atelier environment (avoiding staged studio aesthetics), demystify the first consultation, and rank organically for the exact phrases customers search for.</p>

  <h2>The system</h2>
  <ul>
    <li><strong>Core pillars:</strong> preparing for the initial consultation, cloth and fabric selection, bespoke construction process, and direct booking.</li>
    <li><strong>Search optimization:</strong> on-screen copy, voice, and captions aligned with high-intent queries: “sastrería en Madrid”, “traje a medida”, “camisas a medida”.</li>
    <li><strong>Saved content strategy:</strong> informative pieces engineered for clients who are researching today and booking in the coming weeks.</li>
    <li><strong>Conversion-focused calls to action:</strong> clear pathways to schedule private consultations, avoiding superficial engagement prompts.</li>
    <li><strong>Digital shirt customizer:</strong> proprietary Node and Firebase tool allowing clients to explore collars, cuffs, and fabrics before stepping into the atelier.</li>
  </ul>
</section>

<section class="wrap">
  <div class="search-mod">
    <p class="eyebrow">Organic search on Instagram</p>
    <p class="query">“{{ m.seo_social.query }}”</p>
    <p>{{ m.seo_social.observed_rank_en }}</p>
    <p class="lede-sm">{{ m.seo_social.note_en }}</p>
    <p class="lede-sm">Verified directly within native platform search without paid boosting. Verification date: {{ m.seo_social.date_checked }}.</p>
  </div>
</section>

<section class="wrap prose">
  <h2>Why saves matter more than likes</h2>
  <p>Bespoke tailoring involves a considered purchase decision. A save signifies genuine buying intent: a prospective customer bookmarking guidance for when their event date arrives or their bespoke wardrobe is ready to commission.</p>
  <p>{{ m.sample_post.title_en }}. {{ m.sample_post.note_en }}</p>
</section>

<div class="wrap">
{% include "partials/metric-sheet.njk" %}
</div>

<section class="wrap prose">
  <h2>Channel progression (what the four client reports show)</h2>
  <p>Between April and August 2026, the account grew from zero to 911 followers on Instagram. In the July–August window, TikTok generated 28,265 views and 313 saves, with 164 new followers. The single best-performing Instagram piece was the €620 offer: 18,838 accounts reached and 144 saves. Seven people sent direct messages in June–July; in July–August the atelier estimates around eight. The client reports do not attribute closed sales to content. What they do measure is intent: people bookmark what they are actively considering purchasing.</p>

  | Window | Reported outcomes |
  |---|---|
  | 20 Apr – 12 May | Launch from zero, without paid ads. TikTok: 10,321 views, 43 saves, 15 new followers (81% from "For You"). Instagram: 1,742 reach, 6 saves. |
  | May – Jun | Combined saves rise from 49 to 126. TikTok new followers rise from 15 to 51. Key saved pieces: "First time in a tailor shop" and cufflinks. No direct sales attributed. |
  | 14 Jun – 16 Jul | Peak Instagram month led by a single piece (€620 promo: 18,838 reach and 144 saves). Total IG reach: 28,649. 7 inbound DMs (5 IG + 2 TT). Instagram reaches 534 followers. |
  | 12 Jul – 28 Aug | TikTok takes lead: 28,265 views, 313 saves, 164 new followers. Instagram records 14,504 reach without a second viral spike, reaching 911 followers on 31 August. ~8 estimated inbound DMs. |

  <h2>How to read these numbers</h2>
  <p>Follower counts do not reflect atelier performance. The client reports do not claim direct closed sales from social content, nor do they treat inbound inquiries as completed transactions. What they rigorously verify is buyer intent: saves on pricing and objection-handling videos, qualified local reach in Madrid, and inbound consultation inquiries.</p>

  <h2>Atelier locations</h2>
  <p>Calle de Lope de Rueda 7, Barrio de Salamanca. Calle Mónaco 37, Las Rozas. The strategy addresses both central Madrid and the affluent northwest corridor.</p>

  <h2>Next steps</h2>
  <p>Standardize the consultation guidance video series and track whether inbound direct message inquiries convert into booked in-store consultations.</p>
</section>

<section class="cta wrap">
  <h2>Does your business surface when clients search — or only when someone opens your profile?</h2>
  <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
</section>
