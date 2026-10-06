const OK_EXT = ["svg", "png", "jpg", "jpeg"];
const OK_TYPE = ["image/svg+xml", "image/png", "image/jpeg"];

const el = {
  input: document.getElementById("fileInput"),
  dropzone: document.getElementById("dropzone"),
  error: document.getElementById("error"),
  infoCard: document.getElementById("infoCard"),
  controlsCard: document.getElementById("controlsCard"),
  contexts: document.getElementById("contexts"),
  fName: document.getElementById("fName"),
  facts: document.getElementById("facts"),
  verdicts: document.getElementById("verdicts"),
  img: document.getElementById("previewImg"),
  frameEmpty: document.getElementById("frameEmpty"),
  boxOutline: document.getElementById("boxOutline"),
  pixelGrid: document.getElementById("pixelGrid"),
  figure: document.getElementById("figure"),
  mock: document.getElementById("mock"),
  fit: document.getElementById("fit"),
  stageNote: document.getElementById("stageNote"),
  stageScroll: document.getElementById("stageScroll"),
  vw: document.getElementById("vw"),
  vwOut: document.getElementById("vwOut"),
  zoomSeg: document.getElementById("zoomSeg"),
  bgSeg: document.getElementById("bgSeg"),
  optGrid: document.getElementById("optGrid"),
  optBox: document.getElementById("optBox"),
  optNatural: document.getElementById("optNatural"),
  optFit: document.getElementById("optFit"),
  resetMode: document.getElementById("resetMode"),
};

const MODES = {
  article: "imagen dentro de un artículo",
  avatar: "avatar / foto de perfil",
  thumbs: "miniatura de galería",
  banner: "banner / cabecera",
  card: "tarjeta de artículo",
  tiny: "icono de 48 px",
  micro: "icono de 24 px",
};

const state = { url: null, name: "", type: "", size: 0, w: 0, h: 0, ratio: 0, zoom: 1, alpha: null, svg: null, mode: "article" };

const fmtBytes = (b) => {
  if (b < 1024) return b + " B";
  if (b < 1024 * 1024) return (b / 1024).toFixed(1).replace(".0", "") + " KB";
  return (b / 1048576).toFixed(2).replace(/0$/, "") + " MB";
};

const extOf = (name) => name.split(".").pop().toLowerCase();
const isSvg = () => state.type === "image/svg+xml" || extOf(state.name) === "svg";

function showError(text) {
  el.error.textContent = text;
  el.error.hidden = false;
}

function clearError() {
  el.error.hidden = true;
}

function load(file) {
  clearError();
  if (!file) return;
  const ext = extOf(file.name);
  if (!OK_EXT.includes(ext) || (file.type && !OK_TYPE.includes(file.type))) {
    showError("Formato no válido. Solo se admiten archivos SVG, PNG o JPG / JPEG.");
    return;
  }

  if (state.url) URL.revokeObjectURL(state.url);
  state.url = URL.createObjectURL(file);
  state.name = file.name;
  state.type = file.type || "image/" + ext;
  state.size = file.size;

  const probe = new Image();
  probe.onload = async () => {
    state.svg = isSvg() ? await parseSvg(file) : null;
    if (state.svg && state.svg.w && state.svg.h) {
      state.w = state.svg.w;
      state.h = state.svg.h;
    } else {
      state.w = probe.naturalWidth;
      state.h = probe.naturalHeight;
    }
    state.ratio = state.h ? state.w / state.h : 0;
    state.alpha = hasAlpha(probe);
    paint();
  };
  probe.onerror = () => showError("No se pudo leer la imagen. ¿Está dañada o no es un SVG/PNG/JPG válido?");
  probe.src = state.url;
}

function hasAlpha(img) {
  try {
    const c = document.createElement("canvas");
    c.width = c.height = 40;
    const ctx = c.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, 40, 40);
    const data = ctx.getImageData(0, 0, 40, 40).data;
    for (let i = 3; i < data.length; i += 4) if (data[i] < 250) return true;
    return false;
  } catch {
    return null;
  }
}

async function parseSvg(file) {
  const info = { viewBox: "", width: null, height: null, ratio: null, w: 0, h: 0, error: false, autoSize: false };
  try {
    const text = await file.text();
    const doc = new DOMParser().parseFromString(text, "image/svg+xml");
    if (doc.querySelector("parsererror")) {
      info.error = true;
      return info;
    }
    const svg = doc.documentElement;
    info.viewBox = svg.getAttribute("viewBox") || "";
    info.width = svg.getAttribute("width");
    info.height = svg.getAttribute("height");

    const vb = info.viewBox.trim().split(/[\s,]+/).map(Number);
    if (vb.length === 4 && vb[2] && vb[3]) {
      info.w = vb[2];
      info.h = vb[3];
      info.ratio = vb[2] / vb[3];
    }
    const aw = parseFloat(info.width);
    const ah = parseFloat(info.height);
    if (aw && ah) {
      if (!info.w) {
        info.w = aw;
        info.h = ah;
      }
      info.ratio = aw / ah;
    } else {
      info.autoSize = true;
    }
  } catch {
    info.error = true;
  }
  return info;
}

function paint() {
  el.img.src = state.url;
  el.img.alt = "Vista previa de " + state.name;
  el.img.hidden = false;
  el.frameEmpty.hidden = true;

  el.infoCard.hidden = false;
  el.controlsCard.hidden = false;
  el.contexts.hidden = false;

  el.fName.textContent = state.name;

  const rows = [
    ["Tipo", state.type],
    ["Peso", fmtBytes(state.size)],
    ["Resolución", state.w && state.h ? state.w + " × " + state.h + (isSvg() ? " px (lienzo)" : " px") : "—"],
    ["Relación", state.ratio ? (Math.round(state.ratio * 100) / 100) + " : 1" : "—"],
    ["Formato", isSvg() ? "Vectorial (SVG)" : "Mapa de bits"],
    ["Transparencia", state.alpha === null ? "no verificable" : state.alpha ? "sí (se verá el fondo)" : "no (opaca)"],
  ];
  if (state.svg) {
    rows.push(["viewBox", state.svg.viewBox || "— (sin viewBox)"]);
    rows.push(["width / height", (state.svg.width || "auto") + " / " + (state.svg.height || "auto")]);
  }

  el.facts.innerHTML = rows
    .map(([k, v]) => `<dt>${k}</dt><dd>${escapeHtml(String(v))}</dd>`)
    .join("");

  buildContexts();
  paintVerdicts();
  setMode(state.mode);
  applyZoom();
  updateNote();
}

function escapeHtml(s) {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
}

function paintVerdicts() {
  const v = [];
  const needed = Number(el.vw.value) * state.zoom;

  if (state.size < 50000) v.push(["ok", "✓", "Muy ligera (" + fmtBytes(state.size) + "): carga casi instantánea."]);
  else if (state.size < 250000) v.push(["ok", "✓", "Peso razonable (" + fmtBytes(state.size) + ")."]);
  else v.push(["warn", "!", "Pesada (" + fmtBytes(state.size) + "): conviene usar WebP o comprimir."]);

  if (isSvg()) {
    v.push(["ok", "✓", "Vectorial: se amplía sin perder nitidez, ideal para logos e iconos."]);
    if (state.svg && state.svg.error) v.push(["warn", "!", "El XML del SVG tiene errores; algunos navegadores pueden fallar al mostrarlo."]);
    else if (state.svg && !state.svg.viewBox) v.push(["warn", "!", "El SVG no tiene viewBox: escalarlo puede recortarse o deformarse."]);
    if (state.svg && state.svg.autoSize) v.push(["warn", "!", "Sin width/height: el tamaño final depende del CSS (el navegador usa la proporción del viewBox y un ancho por defecto de ~300 px si no lo limitas)."]);
  } else {
    v.push(["warn", "!", "Mapa de bits: al ampliar por encima de " + state.w + " px se verá pixelada."]);
    if (state.w < needed) {
      v.push(["bad", "✕", "A " + el.vw.value + " px" + (state.zoom > 1 ? " y pantalla " + state.zoom + "×" : "") + " necesita al menos " + Math.ceil(needed) + " px de ancho; este archivo tiene " + state.w + "."]);
    } else if (state.zoom > 1 && state.w < needed * 2) {
      v.push(["warn", "!", "Se verá algo suave en pantalla " + state.zoom + "×: ideal sería " + Math.ceil(needed * 2) + " px de ancho."]);
    } else {
      v.push(["ok", "✓", "Suficiente resolución para " + el.vw.value + " px en este tamaño."]);
    }
  }

  if (state.ratio > 3) v.push(["warn", "!", "Formato muy panorámico (" + (Math.round(state.ratio * 10) / 10) + ":1): a pantalla estrecha quedará muy bajo."]);
  if (state.ratio && state.ratio < 0.45) v.push(["warn", "!", "Formato muy vertical: ocupa mucho scroll en móvil."]);
  if (state.ratio === 1) v.push(["ok", "✓", "Proporción cuadrada: encaja bien en avatars, miniaturas e iconos."]);
  if (state.alpha) v.push(["warn", "!", "Tiene transparencia: el resultado dependerá del color de fondo de tu web."]);

  el.verdicts.innerHTML = v
    .map(([cls, ico, txt]) => `<div class="verdict ${cls}"><span class="ico">${ico}</span><span>${escapeHtml(txt)}</span></div>`)
    .join("");
}

function makeImg(cls) {
  const img = document.createElement("img");
  img.src = state.url;
  img.alt = "";
  img.className = cls;
  return img;
}

function buildContexts() {
  el.contexts.querySelectorAll("[data-ctx]").forEach((host) => {
    const kind = host.dataset.ctx;
    let node;

    if (kind === "thumbs") {
      node = document.createElement("div");
      node.className = "thumbs";
      for (let i = 0; i < 3; i++) node.appendChild(makeImg(""));
      host.replaceChildren(node);
      return;
    }

    if (kind === "card") {
      node = document.createElement("div");
      node.className = "postcard";
      const body = document.createElement("div");
      body.className = "body";
      body.innerHTML = '<span class="t"></span><span class="s"></span>';
      node.append(makeImg(""), body);
      host.replaceChildren(node);
      return;
    }

    const cls = { avatar: "avatar", tiny: "tinyicon", micro: "microicon" }[kind] || "";
    host.replaceChildren(makeImg(cls));
  });
}

function setMode(mode) {
  state.mode = MODES[mode] ? mode : "article";
  if (state.mode === "article") {
    delete el.figure.dataset.mode;
  } else {
    el.figure.dataset.mode = state.mode;
    el.optFit.checked = false;
    el.figure.classList.remove("is-fit");
  }
  el.contexts.querySelectorAll(".ctx").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.use === state.mode && state.mode !== "article");
  });
  el.resetMode.hidden = state.mode === "article";
  el.img.alt = "Vista previa de " + state.name + " — " + MODES[state.mode];
  updateNote();
  applyZoom();
}

function updateNote() {
  const label = state.w ? state.w + "×" + state.h + " px" : "vectorial";
  el.stageNote.textContent =
    "Contenedor de " + el.vw.value + " px · imagen " + label + " · " + MODES[state.mode];
}

function applyZoom() {
  el.mock.style.width = el.vw.value + "px";
  el.mock.style.transform = "none";
  el.fit.style.width = "";
  el.fit.style.height = "";

  const mw = el.mock.offsetWidth;
  const mh = el.mock.offsetHeight;
  if (!mw || !mh) return;

  const box = el.stageScroll;
  const availW = Math.max(140, box.clientWidth - 46);
  const availH = Math.max(140, box.clientHeight - 46);
  const raw = el.optNatural.checked || el.optFit.checked;

  const fit = raw ? 1 : Math.max(0.1, Math.min(1, availW / mw, availH / mh));
  const s = Math.round(fit * state.zoom * 1000) / 1000;

  el.mock.style.transform = s === 1 ? "none" : "scale(" + s + ")";
  el.fit.style.width = Math.round(mw * s) + "px";
  el.fit.style.height = Math.round(mh * s) + "px";
}

el.input.addEventListener("change", () => {
  const file = el.input.files[0];
  el.input.value = "";
  load(file);
});

["dragenter", "dragover"].forEach((ev) =>
  el.dropzone.addEventListener(ev, (e) => {
    e.preventDefault();
    el.dropzone.classList.add("over");
  })
);
["dragleave", "drop"].forEach((ev) =>
  el.dropzone.addEventListener(ev, (e) => {
    e.preventDefault();
    el.dropzone.classList.remove("over");
  })
);
el.dropzone.addEventListener("drop", (e) => {
  const file = e.dataTransfer && e.dataTransfer.files[0];
  load(file);
});

el.vw.addEventListener("input", () => {
  el.vwOut.textContent = el.vw.value + " px";
  applyZoom();
  updateNote();
  if (!el.infoCard.hidden) paintVerdicts();
});

document.querySelectorAll("[data-vw]").forEach((b) =>
  b.addEventListener("click", () => {
    el.vw.value = b.dataset.vw;
    el.vw.dispatchEvent(new Event("input"));
  })
);

el.zoomSeg.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-zoom]");
  if (!btn) return;
  el.zoomSeg.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b === btn));
  state.zoom = Number(btn.dataset.zoom);
  applyZoom();
  updateNote();
  if (!el.infoCard.hidden) paintVerdicts();
});

el.bgSeg.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-bg]");
  if (!btn) return;
  el.bgSeg.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b === btn));
  el.mock.dataset.theme = btn.dataset.bg;
  el.stageScroll.classList.toggle("checker", btn.dataset.bg === "checker");
});

el.optGrid.addEventListener("change", () => {
  el.pixelGrid.hidden = !el.optGrid.checked;
});
el.optBox.addEventListener("change", () => {
  el.boxOutline.hidden = !el.optBox.checked;
});
el.optNatural.addEventListener("change", () => {
  el.figure.classList.toggle("is-natural", el.optNatural.checked);
  applyZoom();
});
el.contexts.addEventListener("click", (e) => {
  const card = e.target.closest(".ctx");
  if (!card) return;
  setMode(state.mode === card.dataset.use ? "article" : card.dataset.use);
  el.stageScroll.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

el.resetMode.addEventListener("click", () => setMode("article"));

el.optFit.addEventListener("change", () => {
  el.figure.classList.toggle("is-fit", el.optFit.checked);
  applyZoom();
});

window.addEventListener("resize", applyZoom);

applyZoom();