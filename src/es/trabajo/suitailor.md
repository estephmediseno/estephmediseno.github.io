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
  <p class="eyebrow">Caso · sastrería a medida</p>
  <h1>Suitailor no va a viral. Va al hombre que escribe «sastrería en Madrid» porque necesita un traje.</h1>
  <p class="meta">
    <span>Madrid · Salamanca y Las Rozas</span>
    <span>Instagram · TikTok · Facebook</span>
    <span><a href="{{ m.handles.web }}">suitailor.com</a></span>
  </p>
  <p class="lede">Sastrería contemporánea para hombre. Traje y camisa a medida con cita previa en dos talleres de Madrid. Que quien busca un sastre en la ciudad encuentre este taller en la primera fila.</p>
</article>

<section class="wrap prose">
  <h2>El problema</h2>
  <p>En sastrería a medida la gente llega con una boda, un evento o ganas de vestirse mejor… y con un poco de miedo a la primera cita. El contenido tiene que mostrar el taller de verdad, explicar cómo es esa primera prueba y usar las mismas palabras que el cliente escribe cuando busca.</p>

  <h2>El sistema</h2>
  <p>Hablamos de la primera visita, de los paños, de cómo se hace el traje y de cómo reservar. En pantalla, en el audio y en la descripción van «sastrería en Madrid», «traje a medida», «camisas a medida». Hay piezas para guardar, porque esa cita casi nunca es para mañana. Y un personalizador de camisas (Node y Firebase) para elegir cuello, puño y tela antes de ir.</p>
</section>

<section class="wrap">
  <div class="search-mod">
    <p class="eyebrow">Búsqueda en Instagram</p>
    <p class="query">«sastrerias en madrid»</p>
    <p>El 27 de septiembre de 2026, en Instagram, «sastrerias en madrid» abre con Pugil y Suitailor en la primera fila.</p>
    <p class="lede-sm">Comprobación en cuenta no logueada. No es un ranking de Google. Pendiente TikTok para la misma consulta y la búsqueda en singular («sastreria en madrid»).</p>
  </div>
</section>

<section class="wrap prose">
  <h2>Por qué los guardados</h2>
  <p>Un like es rápido. Un guardado es el cliente que vuelve a la pieza cuando ya tiene fecha. En un traje a medida, eso pesa más.</p>
  <p>{{ m.sample_post.title_es }}. {{ m.sample_post.note_es }}</p>
</section>

{% set m = metrics.suitailor %}
<div class="wrap">
{% include "partials/metric-sheet.njk" %}
</div>

<section class="wrap prose">
  <h2>Evolución del canal (lo que dicen los cuatro informes)</h2>
  <p>Entre abril y agosto de 2026 la cuenta pasó de cero a 911 seguidores en Instagram. En la ventana de julio–agosto TikTok hizo 28.265 reproducciones y 313 guardados, con 164 seguidores nuevos. La pieza más fuerte de Instagram fue la promo de 620 €: 18.838 cuentas y 144 guardados. Siete personas escribieron por DM en junio–julio; en julio–agosto el taller estima unos ocho. Los informes no atribuyen ventas cerradas al contenido. Lo que sí miden es intención: se guarda lo que se está pensando comprar.</p>

  | Ventana | Qué ocurrió en los informes |
  |---|---|
  | 20 abr – 12 may | Desde cero y sin anuncios. TikTok: 10.321 visualizaciones, 43 guardados, 15 nuevos seguidores (81% del tráfico desde «Para ti»). Instagram: 1.742 alcance, 6 guardados. |
  | may – jun | Guardados combinados suben de 49 a 126. Nuevos seguidores en TikTok suben de 15 a 51. Piezas guardadas: «Primera vez en sastrería» y gemelos. Sin ventas atribuidas. |
  | 14 jun – 16 jul | Mejor mes en Instagram gracias a una pieza: oferta 620 € (18.838 alcance y 144 guardados). Alcance total IG: 28.649. 7 DMs (5 IG + 2 TT). Instagram alcanza 534 seguidores. |
  | 12 jul – 28 ago | TikTok toma el relevo: 28.265 visualizaciones, 313 guardados, 164 nuevos seguidores. Instagram: 14.504 alcance sin segundo pico viral; 911 seguidores al 31 de agosto. Aprox. 8 DMs estimados. |

  <h2>Cómo leer los números</h2>
  <p>No sumamos meses que se pisan. Si no hay cifra, hay una raya. Los seguidores no pagan el alquiler del taller; las visitas al perfil, los guardados y las citas sí.</p>

  <h2>Ubicaciones del taller</h2>
  <p>Calle de Lope de Rueda 7, Barrio de Salamanca. Calle Mónaco 37, Las Rozas.</p>
</section>

<section class="cta wrap">
  <h2>¿Tu negocio aparece cuando te buscan, o solo cuando ya te conocen?</h2>
  <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
</section>
