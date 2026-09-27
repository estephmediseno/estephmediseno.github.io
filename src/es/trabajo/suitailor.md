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
  <h1>Suitailor no busca viralidad: busca al cliente que escribe «sastrería en Madrid» para hacerse un traje.</h1>
  <p class="meta">
    <span>Madrid · Salamanca y Las Rozas</span>
    <span>Instagram · TikTok · Facebook</span>
    <span><a href="{{ m.handles.web }}">suitailor.com</a></span>
  </p>
  <p class="lede">Sastrería contemporánea para hombre. Traje y camisa a medida con cita previa en dos talleres de Madrid. El objetivo es directo: cuando un cliente busca un sastre de referencia, la primera respuesta relevante que encuentra en su pantalla es el taller de Suitailor.</p>
</article>

<section class="wrap prose">
  <h2>El problema</h2>
  <p>En un sector dominado por códigos tradicionales y citas que a menudo intimidan, el cliente potencial tiene una necesidad concreta (una boda, un evento, renovar vestuario) y una duda clave: <em>si doy el paso y pido cita, ¿cómo es la experiencia?</em></p>
  <p>El contenido debe cumplir tres funciones simultáneas: reflejar el ambiente real del taller artesanal (sin artificios de plató), explicar con naturalidad el proceso de la primera prueba y posicionarse con los términos de búsqueda exactos que ese cliente utiliza.</p>

  <h2>El sistema</h2>
  <ul>
    <li><strong>Pilares temáticos:</strong> cómo preparar la primera visita, selección de tejidos y paños, proceso de confección y reserva directa.</li>
    <li><strong>Optimización en búsqueda:</strong> terminología en pantalla, audio y descripciones alineada con búsquedas con intención comercial: «sastrería en Madrid», «traje a medida», «camisas a medida».</li>
    <li><strong>Contenido diseñado para guardar:</strong> piezas explicativas pensadas para el cliente que aún no reserva hoy, pero lo hará en las próximas semanas.</li>
    <li><strong>Llamada a la acción orientada a la cita:</strong> cada publicación guía hacia la reserva o el asesoramiento directo, evitando fórmulas vacías.</li>
    <li><strong>Herramienta digital complementaria:</strong> desarrollo de personalizador de camisas a medida sobre Node y Firebase para facilitar la elección de cuello, puño y tejido antes de la visita.</li>
  </ul>
</section>

<section class="wrap">
  <div class="search-mod">
    <p class="eyebrow">Búsqueda orgánica en Instagram</p>
    <p class="query">«{{ m.seo_social.query }}»</p>
    <p>{{ m.seo_social.observed_rank }}</p>
    <p class="lede-sm">{{ m.seo_social.note_es }}</p>
    <p class="lede-sm">Comprobación orgánica directa en la aplicación sin pauta publicitaria. Fecha de verificación: {{ m.seo_social.date_checked }}.</p>
  </div>
</section>

<section class="wrap prose">
  <h2>Por qué importan los guardados frente a los likes</h2>
  <p>En sastrería a medida, la decisión de compra no se toma en un fin de semana. Un guardado refleja intención genuina de compra: el cliente que revisa la publicación cuando fija la fecha de su evento o decide renovar su sastrería personal.</p>
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

  <h2>Cómo leer estos números</h2>
  <p>El volumen de seguidores no mide la rentabilidad de un taller. Los informes del cliente no atribuyen ventas cerradas directas al contenido ni convierten los mensajes directos en compras automáticas. Lo que sí prueban con rigor es la intención comercial: guardados en piezas de precio y objeción, alcance cualificado en Madrid y consultas privadas entrantes.</p>

  <h2>Ubicaciones del atelier</h2>
  <p>Calle de Lope de Rueda 7, Barrio de Salamanca. Calle Mónaco 37, Las Rozas. La estrategia de comunicación atiende tanto el centro de la capital como la zona noroeste.</p>

  <h2>Próximos pasos</h2>
  <p>Consolidar la serie dedicada a la primera cita y registrar formalmente si las consultas privadas por mensaje directo se traducen en citas concertadas en el taller.</p>
</section>

<section class="cta wrap">
  <h2>¿Tu negocio aparece cuando buscan tus servicios o solo cuando alguien visita tu perfil?</h2>
  <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
</section>
