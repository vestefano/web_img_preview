# Visor de imágenes web

Herramienta para comprobar cómo se verá una imagen (SVG, PNG o JPG) **realmente** en una página web antes de subirla.

👉 **Demo en vivo:** https://vestefano.github.io/web_img_preview/

## Qué hace

1. Selecciona o arrastra un archivo (clic en la zona de carga).
2. Muestra la ficha técnica: peso, resolución, proporción, transparencia y, si es SVG, el `viewBox` y el `width`/`height`.
3. Da veredictos útiles: si pesa demasiado, si la resolución es insuficiente para un ancho concreto, si el SVG no tiene `viewBox`, etc.
4. Permite simular la imagen en distintos contextos: dentro de un artículo, como avatar, miniatura de galería, banner, tarjeta o icono de 48/24 px.
5. Ajustes de vista: ancho del contenedor (320–1440 px con presets móvil/tablet/escritorio), pantalla 1×/2×/3×, fondo claro/oscuro/damero, cuadrícula de píxeles, caja de la imagen y `object-fit`.

## Formatos admitidos

`SVG` · `PNG` · `JPG / JPEG`

## Privacidad

Todo el procesamiento ocurre en tu navegador (`File`, `URL.createObjectURL`, canvas y `DOMParser`). **El archivo nunca se sube a ningún servidor.**

## Desarrollo

No hay build ni dependencias. Es HTML + CSS + JS puro:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Publicación en GitHub Pages

```bash
git remote add origin https://github.com/vestefano/web_img_preview.git
git push -u origin main
```

En GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**.
