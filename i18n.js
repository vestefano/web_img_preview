/* i18n — English (default) + Spanish */
const I18N = {
  en: {
    title: "Image viewer for the web: preview your SVG, PNG or JPG before publishing",
    metaDesc: "Preview how your image will look on a website: file size, resolution, aspect ratio and avatar, banner or thumbnail mockups. Free, and your file never leaves your browser.",
    ogTitle: "Image viewer for the web: preview your SVG, PNG or JPG",
    ogDesc: "Check your image's file size, resolution and aspect ratio and see it in real contexts, all without uploading the file.",

    h1: "Web image viewer",
    tagline: "Load an <b>SVG</b>, <b>PNG</b> or <b>JPG</b> and see how it will really look on your page.",
    langAria: "Language",

    stepFile: "File",
    dzChoose: "Click to choose",
    dzHint: "or drop the file here",
    stepTech: "Technical details",
    stepView: "View settings",

    containerWidth: "Container width",
    presetMobile: "Mobile 375",
    presetTablet: "Tablet 768",
    presetDesktop: "Desktop 1200",
    simulateScreen: "Simulate screen",
    zoomNormal: "1× normal",
    zoomRetina: "2× retina",
    siteBg: "Page background",
    bgLight: "Light",
    bgDark: "Dark",
    bgChecker: "Checker",
    optGrid: "Pixel grid",
    optBox: "Show image box",
    optNatural: "Without <code>max-width:100%</code>",
    optFit: "Fit height (<code>object-fit</code>)",

    preview: "Preview",
    stageNoteDefault: "How it will look on your page.",
    stageNote: "{w} px container · image {img} · {mode}",
    backToArticle: "Back to article view",
    crumb: "Home / Image",
    emptyState: "No image selected",
    altEmpty: "Preview of the selected image",
    contextsTitle: "Click a use case to see it full size",
    ctxAvatar: "Avatar / profile photo",
    ctxThumbs: "Gallery thumbnail",
    ctxBanner: "Banner / header",
    ctxCard: "Article card",
    ctxTiny: "48 px icon",
    ctxMicro: "24 px icon",
    viewInPreview: "View in preview",

    docsH2: "Why preview an image before publishing it on the web?",
    docsP1: "An image that looks perfect in your file manager does not always look the same inside a web page. There it can look <b>blurry because of low resolution</b>, <b>weigh too much</b> and slow the page down, <b>get distorted</b> if its aspect ratio is not respected, or go unnoticed if it has a transparent background and your site uses a dark theme.",
    docsP2: "This <b>online image viewer</b> lets you check all of that in seconds: load your <b>SVG, PNG or JPG</b> file, review the technical details with file size, resolution, aspect ratio and transparency, and see it inside a mockup at the exact container width your site will use. Nothing is uploaded: the whole process happens in your browser.",
    c1t: "Technical details and verdicts",
    c1p: "File size, resolution, aspect ratio, transparency and, for SVG, its viewBox with width and height. Clear warnings when the image is too heavy or does not reach the minimum resolution for 375, 768 or 1200 px.",
    c2t: "Real context simulations",
    c2p: "Avatar or profile photo, gallery thumbnail, banner, article card and 48 px / 24 px icons: one click to see the same file in each use case and decide whether it fits.",
    c3t: "View settings",
    c3p: "Container width from 320 to 1440 px with mobile, tablet and desktop presets, 1×, 2× and 3× screens, light, dark or checkerboard background, pixel grid and object-fit.",
    c4t: "Without uploading your file",
    c4p: "The image is read with the File, canvas and DOMParser APIs and displayed with a local blob URL. It never travels to a server and is never stored anywhere.",
    faqTitle: "Frequently asked questions",
    f1q: "Which image formats can I check?",
    f1a: "SVG, PNG and JPG / JPEG. You can click the upload area or drop the file straight from your folder; if the format is not supported, the tool tells you right away.",
    f2q: "Is my image uploaded to any server?",
    f2a: "No. Everything happens in your browser using the File, canvas and DOMParser APIs: the file never leaves your device and is never stored anywhere.",
    f3q: "How do I know if my image will look sharp on my site?",
    f3a: "The technical details compare the image's actual width with the container width you choose (from 320 to 1440 px) and with the 1×, 2× or 3× screen density. If the resolution is not enough, it tells you how many pixels wide you would need.",
    f4q: "What is an SVG viewBox?",
    f4a: "It is the coordinate system that defines the drawing area of the vector. Without a viewBox, scaling the SVG can crop or distort it; with a viewBox it scales up without losing sharpness at any size.",
    f5q: "How much should an image weigh for the web?",
    f5a: "As a reference, under 50 KB loads almost instantly and up to about 250 KB is reasonable. Above that, consider compressing the file or converting it to WebP so you do not slow the page down.",
    f6q: "Can I use it on my phone or tablet?",
    f6a: "Yes. The interface is responsive, supports touch file selection, and the 375 px and 768 px presets let you simulate mobile and tablet directly.",
    footerNote: "Everything is processed in your browser: the file is never uploaded to any server.",

    errFormat: "Invalid format. Only SVG, PNG or JPG / JPEG files are supported.",
    errRead: "Could not read the image. Is it corrupted, or not a valid SVG/PNG/JPG?",

    modeArticle: "image inside an article",
    modeAvatar: "avatar / profile photo",
    modeThumbs: "gallery thumbnail",
    modeBanner: "banner / header",
    modeCard: "article card",
    modeTiny: "48 px icon",
    modeMicro: "24 px icon",

    lblType: "Type",
    lblSize: "Size",
    lblRes: "Resolution",
    lblRatio: "Aspect ratio",
    lblFormat: "Format",
    lblAlpha: "Transparency",
    valCanvas: " px (canvas)",
    valVector: "Vector (SVG)",
    valRaster: "Raster",
    valAlphaYes: "yes (the background will show)",
    valAlphaNo: "no (opaque)",
    valAlphaUnknown: "not verifiable",
    valNoViewBox: "— (no viewBox)",

    vSmall: "Very light ({size}): loads almost instantly.",
    vMedium: "Reasonable size ({size}).",
    vHeavy: "Heavy ({size}): use WebP or compress it.",
    vVector: "Vector: scales without losing sharpness, ideal for logos and icons.",
    vSvgParse: "The SVG XML contains errors; some browsers may fail to render it.",
    vNoViewBox: "The SVG has no viewBox: scaling it may crop or distort it.",
    vAutoSize: "No width/height: the final size depends on the CSS (the browser uses the viewBox ratio and a default width of ~300 px if you do not constrain it).",
    vRaster: "Raster image: it will look pixelated above {w} px.",
    vLowRes: "At {vw} px{screen} you need at least {need} px of width; this file has {w}.",
    vSoft: "It will look slightly soft on a {zoom}× screen: ideally {ideal} px wide.",
    vEnough: "Enough resolution for {vw} px at this size.",
    vPanoramic: "Very wide aspect ratio ({ratio}:1): it will be very short on narrow screens.",
    vVertical: "Very tall aspect ratio: it takes up a lot of scrolling on mobile.",
    vSquare: "Square aspect ratio: fits well in avatars, thumbnails and icons.",
    vAlpha: "It has transparency: the result will depend on your site's background color.",
    onScreen: " on a {zoom}× screen",
    vectorWord: "vector",
    altPreview: "Preview of {name}",
    altPreviewMode: "Preview of {name} — {mode}",
    boxLabel: "image box"
  },

  es: {
    title: "Visor de imágenes web: previsualiza tu SVG, PNG o JPG antes de publicar",
    metaDesc: "Previsualiza cómo se verá tu imagen en una web: peso, resolución, proporción y simulación en avatar, banner o miniatura. Gratis y sin subir el archivo.",
    ogTitle: "Visor de imágenes web: previsualiza tu SVG, PNG o JPG",
    ogDesc: "Comprueba el peso, la resolución y el aspecto real de tu imagen en una página web, en distintos contextos y sin subir el archivo.",

    h1: "Visor de imágenes web",
    tagline: "Carga un <b>SVG</b>, <b>PNG</b> o <b>JPG</b> y mira cómo se verá realmente en tu página.",
    langAria: "Idioma",

    stepFile: "Archivo",
    dzChoose: "Haz clic para elegir",
    dzHint: "o arrastra el archivo aquí",
    stepTech: "Ficha técnica",
    stepView: "Ajustes de la vista",

    containerWidth: "Ancho del contenedor",
    presetMobile: "Móvil 375",
    presetTablet: "Tablet 768",
    presetDesktop: "Escritorio 1200",
    simulateScreen: "Simular pantalla",
    zoomNormal: "1× normal",
    zoomRetina: "2× retina",
    siteBg: "Fondo del sitio",
    bgLight: "Claro",
    bgDark: "Oscuro",
    bgChecker: "Damero",
    optGrid: "Cuadrícula de píxeles",
    optBox: "Ver caja de la imagen",
    optNatural: "Sin <code>max-width:100%</code>",
    optFit: "Ajustar al alto (<code>object-fit</code>)",

    preview: "Vista previa",
    stageNoteDefault: "Así se verá dentro de tu página.",
    stageNote: "Contenedor de {w} px · imagen {img} · {mode}",
    backToArticle: "Volver a la vista de artículo",
    crumb: "Inicio / Imagen",
    emptyState: "Sin imagen seleccionada",
    altEmpty: "Vista previa de la imagen seleccionada",
    contextsTitle: "Haz clic en un uso para verlo en grande",
    ctxAvatar: "Avatar / foto de perfil",
    ctxThumbs: "Miniatura de galería",
    ctxBanner: "Banner / cabecera",
    ctxCard: "Tarjeta de artículo",
    ctxTiny: "Icono 48 px",
    ctxMicro: "Icono 24 px",
    viewInPreview: "Ver en la vista previa",

    docsH2: "¿Por qué previsualizar una imagen antes de publicarla en la web?",
    docsP1: "Una imagen que se ve perfecta en el explorador de archivos no siempre se ve igual dentro de una página web. Allí puede quedar <b>borrosa por falta de resolución</b>, <b>pesar demasiado</b> y frenar la carga, <b>deformarse</b> si no se respeta su proporción o pasar desapercibida si tiene fondo transparente y tu sitio usa tema oscuro.",
    docsP2: "Este <b>visor de imágenes online</b> te deja comprobarlo en segundos: carga tu archivo <b>SVG, PNG o JPG</b>, revisa la ficha técnica con peso, resolución, relación de aspecto y transparencia, y míralo dentro de una maqueta con el ancho de contenedor exacto que usará tu sitio. Nada se sube a internet: todo el proceso ocurre en tu navegador.",
    c1t: "Ficha técnica y veredictos",
    c1p: "Peso, resolución, proporción, transparencia y, si es SVG, su viewBox con width y height. Con avisos claros cuando la imagen es demasiado pesada o no llega a la resolución mínima para 375, 768 o 1200 px.",
    c2t: "Simulación en contextos reales",
    c2p: "Avatar o foto de perfil, miniatura de galería, banner, tarjeta de artículo e iconos de 48 y 24 px: un clic para ver el mismo archivo en cada uso y decidir si encaja.",
    c3t: "Ajustes de la vista",
    c3p: "Ancho de contenedor de 320 a 1440 px con presets de móvil, tablet y escritorio, pantalla 1×, 2× y 3×, fondo claro, oscuro o damero, cuadrícula de píxeles y object-fit.",
    c4t: "Sin subir tu archivo",
    c4p: "La imagen se lee con las APIs File, canvas y DOMParser y se muestra con una URL blob local. Nunca viaja a un servidor ni se guarda en ningún sitio.",
    faqTitle: "Preguntas frecuentes",
    f1q: "¿Qué formatos de imagen puedo comprobar?",
    f1a: "SVG, PNG y JPG / JPEG. Puedes hacer clic en la zona de carga o arrastrar el archivo directamente desde tu carpeta; si el formato no es válido, la herramienta te lo avisa en el momento.",
    f2q: "¿Se sube mi imagen a algún servidor?",
    f2a: "No. Todo el proceso ocurre en tu navegador con las APIs File, canvas y DOMParser: el archivo nunca sale de tu equipo ni se guarda en ningún sitio.",
    f3q: "¿Cómo sé si mi imagen se verá nítida en mi web?",
    f3a: "La ficha técnica compara el ancho real de la imagen con el ancho de contenedor que elijas (de 320 a 1440 px) y con la densidad de pantalla 1×, 2× o 3×. Si falta resolución, te indica cuántos píxeles de ancho necesitarías.",
    f4q: "¿Qué es el viewBox de un SVG?",
    f4a: "Es el sistema de coordenadas que define el área dibujada del vector. Sin viewBox, escalar el SVG puede recortarlo o deformarlo; con viewBox se amplía sin perder nitidez en cualquier tamaño.",
    f5q: "¿Cuánto debe pesar una imagen para la web?",
    f5a: "Como referencia, por debajo de 50 KB carga casi instantáneamente y hasta unos 250 KB es razonable. Por encima conviene comprimir el archivo o convertirlo a WebP para no ralentizar la carga de la página.",
    f6q: "¿Puedo usarlo en el móvil o en una tablet?",
    f6a: "Sí. La interfaz es responsive, admite la selección táctil de archivos y los presets de 375 px y 768 px te dejan simular móvil y tablet directamente.",
    footerNote: "Todo se procesa en tu navegador: el archivo nunca se sube a ningún servidor.",

    errFormat: "Formato no válido. Solo se admiten archivos SVG, PNG o JPG / JPEG.",
    errRead: "No se pudo leer la imagen. ¿Está dañada o no es un SVG/PNG/JPG válido?",

    modeArticle: "imagen dentro de un artículo",
    modeAvatar: "avatar / foto de perfil",
    modeThumbs: "miniatura de galería",
    modeBanner: "banner / cabecera",
    modeCard: "tarjeta de artículo",
    modeTiny: "icono de 48 px",
    modeMicro: "icono de 24 px",

    lblType: "Tipo",
    lblSize: "Peso",
    lblRes: "Resolución",
    lblRatio: "Relación",
    lblFormat: "Formato",
    lblAlpha: "Transparencia",
    valCanvas: " px (lienzo)",
    valVector: "Vectorial (SVG)",
    valRaster: "Mapa de bits",
    valAlphaYes: "sí (se verá el fondo)",
    valAlphaNo: "no (opaca)",
    valAlphaUnknown: "no verificable",
    valNoViewBox: "— (sin viewBox)",

    vSmall: "Muy ligera ({size}): carga casi instantánea.",
    vMedium: "Peso razonable ({size}).",
    vHeavy: "Pesada ({size}): conviene usar WebP o comprimir.",
    vVector: "Vectorial: se amplía sin perder nitidez, ideal para logos e iconos.",
    vSvgParse: "El XML del SVG tiene errores; algunos navegadores pueden fallar al mostrarlo.",
    vNoViewBox: "El SVG no tiene viewBox: escalarlo puede recortarse o deformarse.",
    vAutoSize: "Sin width/height: el tamaño final depende del CSS (el navegador usa la proporción del viewBox y un ancho por defecto de ~300 px si no lo limitas).",
    vRaster: "Mapa de bits: al ampliar por encima de {w} px se verá pixelada.",
    vLowRes: "A {vw} px{screen} necesita al menos {need} px de ancho; este archivo tiene {w}.",
    vSoft: "Se verá algo suave en pantalla {zoom}×: ideal sería {ideal} px de ancho.",
    vEnough: "Suficiente resolución para {vw} px en este tamaño.",
    vPanoramic: "Formato muy panorámico ({ratio}:1): a pantalla estrecha quedará muy bajo.",
    vVertical: "Formato muy vertical: ocupa mucho scroll en móvil.",
    vSquare: "Proporción cuadrada: encaja bien en avatars, miniaturas e iconos.",
    vAlpha: "Tiene transparencia: el resultado dependerá del color de fondo de tu web.",
    onScreen: " y pantalla {zoom}×",
    vectorWord: "vectorial",
    altPreview: "Vista previa de {name}",
    altPreviewMode: "Vista previa de {name} — {mode}",
    boxLabel: "caja de la imagen"
  }
};

let LANG = "en";

function t(key, vars) {
  let s = (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key;
  if (vars) for (const k in vars) s = s.split("{" + k + "}").join(vars[k]);
  return s;
}

function readLang() {
  try {
    const p = new URLSearchParams(location.search).get("lang");
    if (p && I18N[p]) return p;
    const s = localStorage.getItem("lang");
    if (s && I18N[s]) return s;
  } catch {}
  return "en";
}

function applyLang(next) {
  if (next && I18N[next]) LANG = next;
  document.documentElement.lang = LANG;

  document.querySelectorAll("[data-i18n]").forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => { el.alt = t(el.dataset.i18nAlt); });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });

  document.title = t("title");
  const setMeta = (sel, attr, value) => {
    const node = document.querySelector(sel);
    if (node) node.setAttribute(attr, value);
  };
  setMeta('meta[name="description"]', "content", t("metaDesc"));
  setMeta('meta[property="og:title"]', "content", t("ogTitle"));
  setMeta('meta[property="og:description"]', "content", t("ogDesc"));
  setMeta('meta[property="og:locale"]', "content", LANG === "es" ? "es_ES" : "en_US");

  document.documentElement.style.setProperty("--box-label", '"' + t("boxLabel") + '"');

  document.querySelectorAll("[data-lang]").forEach((b) => b.classList.toggle("on", b.dataset.lang === LANG));

  try { localStorage.setItem("lang", LANG); } catch {}

  try {
    const u = new URL(location.href);
    if (LANG === "en") u.searchParams.delete("lang");
    else u.searchParams.set("lang", LANG);
    history.replaceState(null, "", u);
  } catch {}

  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: LANG } }));
}

applyLang(readLang());

document.querySelectorAll("[data-lang]").forEach((b) =>
  b.addEventListener("click", () => applyLang(b.dataset.lang))
);
