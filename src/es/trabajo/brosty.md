---
layout: layouts/base.njk
lang: es
title: Brosty
description: Instagram y TikTok para restaurante de pollo frito colombiano en Madrid.
alt: /en/work/brosty/
permalink: /trabajo/brosty/
---

{% set m = metrics.brosty %}

<article class="case-hero wrap">
  <p class="eyebrow">Caso · restaurante</p>
  <h1>Que se oiga el crujido. Que se sepa a qué hora ir.</h1>
  <p class="meta">
    <span>Madrid</span>
    <span>Instagram · TikTok</span>
  </p>
  <p class="lede">Pollo frito colombiano. En esta categoría el contenido muere cuando solo hay plato bonito. Vive cuando un desconocido en Madrid siente el aceite, la referencia y el camino al local.</p>
</article>

<section class="wrap prose">
  <h2>El sistema</h2>
  <ul>
    <li>Piezas de apetito (sonido, close-up, ración).</li>
    <li>Piezas de lugar (quién cocina, quién espera, qué se pide).</li>
    <li>Piezas de repetición (el motivo para volver entre semana).</li>
    <li>Cierre: dirección, horario, «te vi en TikTok» en mostrador.</li>
  </ul>
  <p>Los números de este caso esperan Insights. Hasta entonces la hoja queda en rayas. Un restaurante no se mide en seguidores; se mide en mesas y en frases dichas al pedir.</p>
</section>

<section class="wrap">
  <div class="search-mod">
    <p class="eyebrow">Búsqueda orgánica en Instagram</p>
    <p class="query">«{{ m.seo_social.query }}»</p>
    <p>{{ m.seo_social.observed_rank }}</p>
    <p class="lede-sm">{{ m.seo_social.note_es }}</p>
    <p class="lede-sm">Fecha de comprobación: {{ m.seo_social.date_checked }}.</p>
  </div>
</section>

<div class="wrap">
{% include "partials/metric-sheet.njk" %}
</div>

<section class="cta wrap">
  <h2>Si el local publica todos los días y el comedor no lo nota</h2>
  <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
</section>
