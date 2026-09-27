---
layout: layouts/base.njk
lang: es
title: Suitailor
description: Sistema de contenido y búsqueda social para sastrería contemporánea en Madrid.
alt: /en/work/suitailor/
permalink: /trabajo/suitailor/
---

{% set m = metrics.suitailor %}

<article class="case-hero wrap">
  <p class="eyebrow">Caso · sastrería</p>
  <h1>Suitailor no necesita volverse viral. Necesita al hombre que ya buscó «sastrería en Madrid».</h1>
  <p class="meta">
    <span>Madrid · Salamanca y Las Rozas</span>
    <span>Instagram · TikTok · Facebook</span>
    <span><a href="{{ m.handles.web }}">suitailor.com</a></span>
  </p>
  <p class="lede">Sastrería contemporánea para hombre. Traje y camisa a medida, cita previa, dos talleres. El trabajo no es fama. Es que, cuando alguien escribe la búsqueda exacta, la primera pieza que ve sea suya.</p>
</article>

<section class="wrap prose">
  <h2>El problema</h2>
  <p>Madrid está lleno de sastrerías con mármol, tijeras y la palabra «artesanal». El cliente de Suitailor no colecciona sastres en el feed. Tiene un evento, un cuerpo y una duda: <em>si entro, ¿me van a complicar la vida?</em></p>
  <p>El contenido tiene que hacer tres cosas a la vez: parecer el taller (no un set), enseñar el primer paso, y ser encontrable con las palabras que esa persona ya usa.</p>

  <h2>El sistema</h2>
  <ul>
    <li>Pilares: primera visita, tejido y detalle, proceso a medida, cita clara.</li>
    <li>Idioma en pantalla y en caption alineado a búsquedas reales: sastrería en Madrid, traje a medida, camisas a medida.</li>
    <li>Piezas que se guardan — el hombre que aún no reserva, pero va a reservar.</li>
    <li>Cierre en cita, no en «síguenos».</li>
    <li>Además del contenido: personalizador de camisas sobre Node y Firebase, para quien ya quiere decidir ojal y tela sin empezar de cero.</li>
  </ul>
</section>

<section class="wrap">
  <div class="search-mod">
    <p class="eyebrow">Búsqueda dentro de Instagram y TikTok</p>
    <p class="query">«sastreria en madrid»</p>
    <p>{{ m.seo_social.observed_rank }}</p>
    <p class="lede-sm">{{ m.seo_social.note_es }}</p>
    <p class="lede-sm">Ábrelo tú. Es más creíble que cualquier captura enmarcada. Fecha de comprobación: {{ m.seo_social.date_checked | dash }}.</p>
  </div>
</section>

<section class="wrap prose">
  <h2>Por qué importan los guardados</h2>
  <p>Un like es un gesto. Un guardado es «esto lo voy a usar». En sastrería, el ciclo de compra no es de un sábado. La pieza que se guarda —cómo es la primera visita, qué tela elegir, cuánto tarda un traje— trabaja durante semanas.</p>
  <p>{{ m.sample_post.title_es }}. {{ m.sample_post.note_es }}</p>
</section>

{% set m = metrics.suitailor %}
<div class="wrap">
{% include "partials/metric-sheet.njk" %}
</div>

<section class="wrap prose">
  <h2>Cómo leer estos números</h2>
  <p>El número de seguidores no paga un traje. Sirven las vistas que llegan con intención, los guardados por pieza, las visitas al perfil y las citas que el taller puede atribuir. Si una cifra es estimación del cliente, se etiqueta así. Si aún no está pegada en el YAML, la celda queda en raya.</p>

  <h2>Locales</h2>
  <p>Calle de Lope de Rueda 7, Barrio de Salamanca. Calle Mónaco 37, Las Rozas. El contenido cubre capital y noroeste sin fingir que son el mismo barrio.</p>

  <h2>Lo siguiente</h2>
  <p>Serie estable de primera visita. Medición limpia de citas que mencionan Instagram o TikTok. No más piezas. Mejores piezas, mismas palabras.</p>
</section>

<section class="cta wrap">
  <h2>¿Tu negocio aparece cuando te buscan — o solo cuando lo abre un amigo?</h2>
  <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
</section>
