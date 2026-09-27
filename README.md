# Estefani Medina — portfolio

Sitio estático bilingüe (ES por defecto, EN en `/en/`).  
Textos en Markdown. Números en YAML. GitHub Pages con Eleventy.

## Cómo editar sin tocar el diseño

| Qué quieres cambiar | Dónde |
|---|---|
| Nombre, email, Instagram | `src/_data/site.json` |
| Texto de Inicio, Sobre, Servicios, Contacto | `src/es/*.md` y `src/en/*.md` |
| Caso Suitailor | `src/es/trabajo/suitailor.md` + `src/en/work/suitailor.md` |
| Caso Talavera | `src/es/trabajo/talavera-selecta.md` + `src/en/work/talavera-selecta.md` |
| Caso Brosty | `src/es/trabajo/brosty.md` + `src/en/work/brosty.md` |
| Vistas, guardados, citas, búsqueda | `src/_data/metrics/*.yaml` |
| Color, tipo, márgenes | `src/assets/css/site.css` |

Las celdas vacías del YAML se ven como **—**. No pongas `0` ni porcentajes inventados. Si el cliente estima visitas al local, escríbelo en `attribution_method`: `estimado del cliente`.

### Ejemplo mínimo de métricas (Suitailor)

Abre `src/_data/metrics/suitailor.yaml` y pega Insights:

```yaml
period: "Ene 2026 – Sep 2026"
followers:
  instagram: "1.240"
  tiktok: "329"
engagement:
  avg_views_per_post: "1.8K"
  median_views_per_post: "920"
  avg_saves_per_post: "24"
  avg_comments_per_post: "6"
seo_social:
  date_checked: "2026-09-27"
commerce:
  purchases_or_appointments: "12 citas/mes"
  pct_new_clients_from_social: "≈ 40%"
  attribution_method: "estimado del cliente + mención en cita"
```

Los números de ejemplo de arriba son **falsos**. Están solo para mostrar el formato.

## Local

```bash
npm install
npm start
```

Abre `http://localhost:8080`.

```bash
npm run build
```

Salida en `_site/`.

## GitHub Pages

1. Crea un repo (`estephmediseno.github.io` para user site, o cualquier repo + Pages desde Actions).
2. Sube este directorio.
3. En el repo: Settings → Pages → Source: **GitHub Actions**.
4. El workflow `.github/workflows/pages.yml` construye y publica.

Si el sitio no es user site (`username.github.io`), en `eleventy.config.js` añade `pathPrefix: "/nombre-del-repo"` y en `package.json` el script de build: `eleventy --pathprefix=/nombre-del-repo`.

## Lo que este sitio no hace

- No inventa engagement.
- No afirma el #1 de Google. La prueba documentada es búsqueda **dentro** de Instagram y TikTok para `sastreria en madrid`.
- No clona el portfolio CRT de Ricardo. Este es editorial.

## Contacto del sitio

estefmed.diseno@gmail.com  
https://www.instagram.com/estephmed/
