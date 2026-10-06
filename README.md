# Web image viewer

A browser tool that shows you how an image will **really** look on a web page before you publish it.

👉 **Live demo:** https://vestefano.github.io/web_img_preview/

## What it does

1. Select or drag and drop a file (SVG, PNG or JPG).
2. Read the technical details: file size, resolution, aspect ratio, transparency and, for SVG, its `viewBox` with `width` / `height`.
3. Get clear verdicts: whether the file is too heavy, whether the resolution is enough for a given container width, whether the SVG is missing a `viewBox`, and more.
4. Preview the same file in real use cases: article image, avatar, gallery thumbnail, banner, article card and 48 / 24 px icons.
5. Tune the view: container width from 320 to 1440 px (mobile / tablet / desktop presets), 1×, 2× and 3× screens, light, dark or checkerboard background, pixel grid, image box and `object-fit`.

## Supported formats

`SVG` · `PNG` · `JPG / JPEG`

## Languages

The interface is available in **English** (default) and **Spanish**. Use the `EN` / `ES` switch in the header, or open the page with `?lang=es`. The choice is remembered in `localStorage`.

## Privacy

Everything runs locally in your browser (`File`, `URL.createObjectURL`, canvas and `DOMParser`). **The file is never uploaded to any server.**

## Development

Plain HTML + CSS + JavaScript: no build step and no dependencies.

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

Relevant files:

| File | Purpose |
| --- | --- |
| `index.html` | Markup, SEO metadata and JSON-LD (WebApplication + FAQPage) |
| `i18n.js` | English / Spanish dictionary and language switcher |
| `app.js` | Viewer logic |
| `styles.css` | Styles |
| `robots.txt` / `sitemap.xml` | Crawler hints |

## Deploying on GitHub Pages

```bash
git remote add origin git@github.com:vestefano/web_img_preview.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**.
