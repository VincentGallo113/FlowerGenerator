const palettes = [
  {
    name: "Aube rose",
    title: "Tendresse du matin",
    mood: "Des roses doux, du corail lumineux et une pointe de sauge pour un bouquet tendre et solaire.",
    families: ["pink", "coral", "cream", "green"],
    colors: ["#f4b3be", "#e77773", "#fff0d9", "#b7c49a", "#7f9b75"],
  },
  {
    name: "Jardin secret",
    title: "Promesse en fleurs",
    mood: "Une harmonie de pivoines, de mauves et de blancs creme, calme comme un mot glisse dans une poche.",
    families: ["pink", "mauve", "cream", "purple"],
    colors: ["#d86f91", "#b88bb7", "#f7dfcf", "#8d6aa5", "#6e7f5c"],
  },
  {
    name: "Ciel de juin",
    title: "Bleu tendre",
    mood: "Des bleus poudres et des fleurs blanches, releves par quelques touches jaunes tres legeres.",
    families: ["blue", "cream", "yellow", "green"],
    colors: ["#8db7d5", "#f9efd7", "#e8c86c", "#9bb98a", "#62836a"],
  },
  {
    name: "Sorbet d'ete",
    title: "Eclat joyeux",
    mood: "Un melange peche, framboise et vanille, pense pour sourire avant meme de lire la carte.",
    families: ["coral", "pink", "yellow", "cream"],
    colors: ["#ff9f7b", "#d94f73", "#f7c96d", "#fff2c9", "#89a06c"],
  },
  {
    name: "soir d'\u00e9t\u00e9",
    title: "Soir d'\u00e9t\u00e9 \u00e0 tes cot\u00e9s",
    mood: "Pour une soir\u00e9e d'\u00e9t\u00e9 chaud pass\u00e9 \u00e0 cot\u00e9 de la femme de ma vie.",
    families: ["orange", "red", "yellow", "green"],
    colors: ["#f47c32", "#c92f2f", "#f4c542", "#a4472f", "#78945f"],
  },
  {
    name: "Velours violet",
    title: "Soir doux",
    mood: "Une composition plus profonde, avec des violets veloutes, du rose ancien et beaucoup de feuillage.",
    families: ["purple", "mauve", "pink", "green"],
    colors: ["#7d548e", "#bd84a7", "#e8a1aa", "#788d61", "#485f4a"],
  },
  {
    name: "Rouge passioné",
    title: "Amour écarlate",
    mood: "Un bouquet pour ma petite chérie d'amouuuur.",
    families: ["red", "pink", "coral", "purple"],
    colors: ["#c92f2f", "#df7891", "#e8a1aa", "#ee8c70", "#86609a"],
  },
  {
    name: "Regret",
    title: "Pardon sincère",
    mood: "Pardonnes moi d'être comme ça mon amour.",
    families: ["purple", "blue", "mauve", "pink"],
    colors: ["#86609a", "#8ab4d2", "#b887b4", "#df7891", "#86609a"],
  },
];
const groguPalette = {
  name: "Bouquet Grogu",
  title: "Grogu à gogo",
  mood: "Un bouquet avec notre fils!!!",
  families: ["grogu", "green", "cream", "brown"],
  colors: ["#8fa46c", "#d7c17a", "#6f7f58", "#8c6045", "#f1d69a"],
  image: "assets/Grogu.png",
};
const groguFilters = [
  "hue-rotate(-10deg) saturate(1.08) brightness(1.03)",
  "hue-rotate(8deg) saturate(0.98) brightness(1.08)",
  "hue-rotate(18deg) saturate(1.12) brightness(0.96)",
  "hue-rotate(-18deg) saturate(1.05) brightness(0.98)",
  "sepia(0.12) saturate(1.1) brightness(1.02)",
  "hue-rotate(28deg) saturate(0.92) brightness(1.06)",
];
const flowerDatabase = [
  { name: "Rose anglaise", family: "pink", form: "rose", petals: 18, size: 116, role: "coeur", meaning: "amour doux" },
  { name: "Pivoine", family: "pink", form: "peony", petals: 24, size: 136, role: "volume", meaning: "chance" },
  { name: "Renoncule", family: "coral", form: "rose", petals: 18, size: 100, role: "detail", meaning: "charme" },
  { name: "Souci orange", family: "orange", form: "dahlia", petals: 24, size: 108, role: "etoile", meaning: "chaleur" },
  { name: "Lys orange", family: "orange", form: "simple", petals: 9, size: 112, role: "volume", meaning: "desir" },
  { name: "Coquelicot rouge", family: "red", form: "simple", petals: 8, size: 104, role: "coeur", meaning: "passion" },
  { name: "Tulipe rouge", family: "red", form: "rose", petals: 14, size: 98, role: "detail", meaning: "declaration" },
  { name: "Tournesol dore", family: "yellow", form: "dahlia", petals: 26, size: 114, role: "soleil", meaning: "adoration" },
  { name: "Dahlia", family: "coral", form: "dahlia", petals: 28, size: 122, role: "etoile", meaning: "joie" },
  { name: "Cosmos", family: "mauve", form: "simple", petals: 10, size: 94, role: "legerete", meaning: "harmonie" },
  { name: "Anemone", family: "purple", form: "simple", petals: 9, size: 100, role: "contraste", meaning: "attention" },
  { name: "Lavande", family: "purple", form: "sprig", petals: 14, size: 96, role: "parfum", meaning: "calme" },
  { name: "Hortensia", family: "blue", form: "cluster", petals: 24, size: 132, role: "nuage", meaning: "gratitude" },
  { name: "Myosotis", family: "blue", form: "cluster", petals: 16, size: 88, role: "souvenir", meaning: "memoire" },
  { name: "Marguerite creme", family: "cream", form: "simple", petals: 13, size: 102, role: "lumiere", meaning: "franchise" },
  { name: "Freesia", family: "yellow", form: "sprig", petals: 10, size: 96, role: "accent", meaning: "confiance" },
  { name: "Mimosa", family: "yellow", form: "cluster", petals: 22, size: 88, role: "soleil", meaning: "tendresse" },
];

const fallbackColors = {
  pink: "#df7891",
  coral: "#ee8c70",
  orange: "#f47c32",
  red: "#c92f2f",
  mauve: "#b887b4",
  purple: "#86609a",
  blue: "#8ab4d2",
  cream: "#f7e7c8",
  yellow: "#ecc765",
  green: "#7f9769",
};

const wildColors = [
  "#e84f6f",
  "#f39a3d",
  "#f2ce4f",
  "#f6e8c6",
  "#8fc7dc",
  "#7b5aae",
  "#c45f9f",
  "#88a765",
  "#de6b5f",
  "#b9d88f",
];

const positions = [
  { x: 50, y: 27, scale: 1.08, depth: 12, curve: 0, base: 0, lift: -8 },
  { x: 42, y: 30, scale: 1.04, depth: 11, curve: -30, base: -7, lift: -6 },
  { x: 58, y: 30, scale: 1.04, depth: 11, curve: 30, base: 7, lift: -6 },
  { x: 35, y: 35, scale: 1.0, depth: 9, curve: -52, base: -13, lift: -4 },
  { x: 65, y: 35, scale: 1.0, depth: 9, curve: 52, base: 13, lift: -4 },
  { x: 49, y: 36, scale: 1.14, depth: 14, curve: -8, base: -1, lift: -2 },
  { x: 42, y: 40, scale: 1.08, depth: 13, curve: -28, base: -6, lift: 0 },
  { x: 57, y: 40, scale: 1.08, depth: 13, curve: 28, base: 6, lift: 0 },
  { x: 36, y: 43, scale: 0.98, depth: 8, curve: -58, base: -16, lift: 2 },
  { x: 64, y: 43, scale: 0.98, depth: 8, curve: 58, base: 16, lift: 2 },
  { x: 45, y: 45, scale: 1.0, depth: 10, curve: -24, base: -8, lift: 5 },
  { x: 55, y: 45, scale: 1.0, depth: 10, curve: 24, base: 8, lift: 5 },
  { x: 50, y: 42, scale: 1.05, depth: 15, curve: 2, base: 0, lift: 4 },
  { x: 31, y: 38, scale: 0.86, depth: 8, curve: -58, base: -14, lift: 0 },
  { x: 69, y: 38, scale: 0.86, depth: 8, curve: 58, base: 14, lift: 0 },
  { x: 39, y: 48, scale: 0.9, depth: 11, curve: -34, base: -7, lift: 6 },
  { x: 61, y: 48, scale: 0.9, depth: 11, curve: 34, base: 7, lift: 6 },
  { x: 50, y: 50, scale: 0.94, depth: 16, curve: 0, base: 0, lift: 7 },
];

const stemBaseBottom = 110;

const flowerLayer = document.querySelector("#flowerLayer");
const stemLayer = document.querySelector("#stemLayer");
const swatches = document.querySelector("#swatches");
const flowerList = document.querySelector("#flowerList");
const regenerate = document.querySelector("#regenerate");
const randomize = document.querySelector("#randomize");
const groguize = document.querySelector("#groguize");
const latest = document.querySelector("#latest");
const paletteName = document.querySelector("#paletteName");
const bouquetNumber = document.querySelector("#bouquetNumber");
const bouquetTitle = document.querySelector("#bouquetTitle");
const bouquetMood = document.querySelector("#bouquetMood");
const selectionTitle = document.querySelector("#selectionTitle");

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function familyColor(palette, family) {
  const index = palette.families.indexOf(family);
  return palette.colors[index] || fallbackColors[family] || pick(palette.colors);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function chooseFlowers(palette) {
  const matching = flowerDatabase.filter((flower) => palette.families.includes(flower.family));
  const anchors = shuffle(matching.filter((flower) => ["coeur", "volume", "nuage", "etoile"].includes(flower.role))).slice(0, 3);
  const accents = shuffle(matching.filter((flower) => !anchors.includes(flower))).slice(0, 6);
  const chosen = shuffle([...anchors, ...accents]);

  while (chosen.length < positions.length) {
    chosen.push(pick(matching));
  }

  return chosen.slice(0, positions.length);
}

function chooseRandomFlowers() {
  const chosen = shuffle(flowerDatabase);

  while (chosen.length < positions.length) {
    chosen.push(pick(flowerDatabase));
  }

  return shuffle(chosen).slice(0, positions.length);
}

function createRandomPalette() {
  return {
    name: "Mode aleatoire",
    title: "Bouquet surprise",
    mood: "Aucune palette, aucune regle: les fleurs et les couleurs se melangent librement.",
    families: Object.keys(fallbackColors),
    colors: shuffle(wildColors).slice(0, 5),
  };
}
function chooseGroguPhotos() {
  const names = [
    "Gourmand",
    "Mignon",
    "Petit",
    "FILSSS!!!",
    "Mandalorien",
  ];

  return positions.map((_, index) => ({
    name: names[index % names.length],
    family: "grogu",
    form: "photo",
    size: 108 + (index % 4) * 4,
    role: "force",
    meaning: index % 2 ? "" : "",
    image: groguPalette.image,
  }));
}

function shadeColor(hex, percent) {
  const value = hex.replace("#", "");
  const number = Number.parseInt(value, 16);
  const amount = Math.round(2.55 * percent);
  const red = clamp((number >> 16) + amount, 0, 255);
  const green = clamp(((number >> 8) & 0x00ff) + amount, 0, 255);
  const blue = clamp((number & 0x0000ff) + amount, 0, 255);
  return `#${(0x1000000 + red * 0x10000 + green * 0x100 + blue).toString(16).slice(1)}`;
}

function petalPath(form, width, length, pinch = 0) {
  if (form === "dahlia") {
    return `M0 ${-length} C${width * 0.55} ${-length * 0.92} ${width * 0.78} ${-length * 0.36} ${width * 0.18} ${-pinch} C${width * 0.06} ${width * 0.18} ${-width * 0.12} ${width * 0.18} ${-width * 0.18} ${-pinch} C${-width * 0.78} ${-length * 0.36} ${-width * 0.55} ${-length * 0.92} 0 ${-length}`;
  }

  if (form === "rose" || form === "peony") {
    return `M0 ${-length} C${width * 0.9} ${-length * 0.85} ${width * 0.98} ${-length * 0.22} ${width * 0.28} ${width * 0.08} C${width * 0.04} ${width * 0.26} ${-width * 0.62} ${width * 0.18} ${-width * 0.48} ${-width * 0.1} C${-width * 0.82} ${-length * 0.42} ${-width * 0.42} ${-length * 0.88} 0 ${-length}`;
  }

  return `M0 ${-length} C${width} ${-length * 0.76} ${width * 0.92} ${-length * 0.22} ${width * 0.22} ${width * 0.08} C${width * 0.02} ${width * 0.24} ${-width * 0.6} ${width * 0.16} ${-width * 0.5} ${-width * 0.1} C${-width * 0.92} ${-length * 0.28} ${-width * 0.7} ${-length * 0.82} 0 ${-length}`;
}

function layeredPetals(flower, color, palette, variant) {
  const darker = shadeColor(color, -9);
  const lighter = shadeColor(color, 10);
  const accent = palette.colors[(variant + 1) % palette.colors.length] || color;
  const layers = flower.form === "simple"
    ? [{ count: flower.petals, radius: 0, width: 13, length: 42 }]
    : [
        { count: Math.max(8, Math.round(flower.petals * 0.55)), radius: 3, width: 16, length: 45 },
        { count: Math.max(7, Math.round(flower.petals * 0.42)), radius: -4, width: 13, length: 34 },
        { count: Math.max(5, Math.round(flower.petals * 0.26)), radius: -9, width: 10, length: 24 },
      ];

  return layers.map((layer, layerIndex) => {
    const step = 360 / layer.count;
    const offset = variant * 11 + layerIndex * 17;
    return Array.from({ length: layer.count }, (_, index) => {
      const jitter = ((index * 37 + variant * 13 + layerIndex * 19) % 17) - 8;
      const rotate = index * step + offset + jitter * 0.55;
      const scaleX = 0.86 + ((index + variant + layerIndex) % 5) * 0.045;
      const scaleY = 0.9 + ((index * 2 + variant) % 6) * 0.035;
      const fill = layerIndex === 0 ? (index % 3 ? color : lighter) : (index % 2 ? darker : accent);
      const opacity = layerIndex === 0 ? 0.9 : 0.84;
      const path = petalPath(flower.form, layer.width, layer.length, layer.radius);
      return `<path d="${path}" fill="${fill}" opacity="${opacity}" transform="rotate(${rotate}) translate(0 ${layer.radius}) scale(${scaleX} ${scaleY})"/>`;
    }).join("");
  }).join("");
}

function clusterBlossoms(flower, color, palette, variant) {
  const colors = [color, shadeColor(color, 12), palette.colors[2] || color];
  return Array.from({ length: flower.petals }, (_, index) => {
    const angle = index * (360 / flower.petals) + ((index * 23 + variant) % 19);
    const ring = index % 5;
    const radius = 7 + ring * 5 + (index % 2) * 3;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    const petalColor = colors[index % colors.length];
    return `<g transform="translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${angle}) scale(${0.34 + ring * 0.035})">
      ${layeredPetals({ ...flower, form: "simple", petals: 5 }, petalColor, palette, variant + index)}
      <circle r="7" fill="#e9c66c"/>
    </g>`;
  }).join("");
}

function sprigSvg(flower, color, palette, variant) {
  const blossoms = Array.from({ length: flower.petals + 4 }, (_, index) => {
    const angle = index * (360 / (flower.petals + 4)) + variant * 5;
    const ring = index % 4;
    const radius = 7 + ring * 5;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius - 2;
    const scale = 0.2 + (index % 4) * 0.025;
    const hue = index % 2 ? color : shadeColor(color, 12);
    return `<g transform="translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${angle.toFixed(1)}) scale(${scale})">
      ${layeredPetals({ ...flower, form: "simple", petals: 6 }, hue, palette, variant + index)}
      <circle r="6" fill="#e8c66d"/>
    </g>`;
  }).join("");

  if (flower.form === "sprig") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -70 140 140" role="img" aria-label="${flower.name}">
      ${blossoms}
      <circle r="12" fill="#e8c66d" opacity="0.78"/>
      <circle r="5" fill="#80633b" opacity="0.34"/>
    </svg>`;
  }
}

function flowerSvg(flower, color, palette, variant) {
  if (flower.form === "sprig") {
    return sprigSvg(flower, color, palette, variant);
  }

  const center = flower.family === "cream" ? "#c78b3e" : "#f1c86e";
  const petals = flower.form === "cluster"
    ? clusterBlossoms(flower, color, palette, variant)
    : layeredPetals(flower, color, palette, variant);
  const centerDots = Array.from({ length: 9 }, (_, index) => {
    const angle = index * 40 + variant * 7;
    const x = Math.cos((angle * Math.PI) / 180) * (6 + (index % 3));
    const y = Math.sin((angle * Math.PI) / 180) * (6 + (index % 3));
    return `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="2.1" fill="#80633b" opacity="0.48"/>`;
  }).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -70 140 140" role="img" aria-label="${flower.name}">
    <g filter="url(#petalShadow)">
      <defs>
        <filter id="petalShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#5c3a2f" flood-opacity="0.16"/>
        </filter>
      </defs>
      ${petals}
      <circle r="15" fill="${center}"/>
      ${centerDots}
      <circle r="5.5" fill="#6f5334" opacity="0.38"/>
    </g>
  </svg>`;
}

function svgToDataUrl(svg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function bezierPoint(start, controlOne, controlTwo, end, t) {
  const inverse = 1 - t;
  return {
    x: inverse ** 3 * start.x + 3 * inverse ** 2 * t * controlOne.x + 3 * inverse * t ** 2 * controlTwo.x + t ** 3 * end.x,
    y: inverse ** 3 * start.y + 3 * inverse ** 2 * t * controlOne.y + 3 * inverse * t ** 2 * controlTwo.y + t ** 3 * end.y,
  };
}

function createStemSvg(stageWidth, stageHeight, base, tip, curve, index) {
  const side = tip.x >= base.x ? 1 : -1;
  const controlOne = {
    x: base.x + side * 10 + curve * 0.16,
    y: base.y + (tip.y - base.y) * 0.36,
  };
  const controlTwo = {
    x: tip.x - side * Math.abs(curve) * 0.32,
    y: tip.y + (base.y - tip.y) * 0.34,
  };
  const path = `M ${base.x.toFixed(1)} ${base.y.toFixed(1)} C ${controlOne.x.toFixed(1)} ${controlOne.y.toFixed(1)}, ${controlTwo.x.toFixed(1)} ${controlTwo.y.toFixed(1)}, ${tip.x.toFixed(1)} ${tip.y.toFixed(1)}`;
  const stemWidth = 3 + (index % 3) * 0.22;
  const leaves = [0.58].map((position, leafIndex) => {
    const point = bezierPoint(base, controlOne, controlTwo, tip, position);
    const leafSide = (index + leafIndex) % 2 ? 1 : -1;
    const rotation = leafSide * (24 + leafIndex * 8) + curve * 0.06;
    const scale = 0.62 + leafIndex * 0.08;
    return `<path d="M0 0 C16 -10 31 -4 38 8 C20 14 7 13 0 0" fill="#6f8c62" opacity="0.56" transform="translate(${point.x.toFixed(1)} ${point.y.toFixed(1)}) rotate(${rotation.toFixed(1)}) scale(${scale.toFixed(2)})"/>`;
  }).join("");
  return `<svg class="stem" viewBox="0 0 ${stageWidth} ${stageHeight}" aria-hidden="true">
    <path d="${path}" fill="none" stroke="#5f7b59" stroke-width="${stemWidth}" stroke-linecap="round"/>
    <path d="${path}" fill="none" stroke="rgba(255,255,255,0.34)" stroke-width="1.2" stroke-linecap="round" transform="translate(-1 0)"/>
    ${leaves}
  </svg>`;
}

function drawBouquet(mode = "harmonious") {
  const isRandom = mode === "random";
  const isGrogu = mode === "grogu";
  const isLatest = mode === "latest";
  const palette = isGrogu ? groguPalette : isRandom ? createRandomPalette() : isLatest ? palettes[palettes.length - 1] : pick(palettes);
  const flowers = isGrogu ? chooseGroguPhotos() : isRandom ? chooseRandomFlowers() : chooseFlowers(palette);
  const seed = Math.floor(Math.random() * 9000) + 1000;
  const stageBox = document.querySelector(".bouquet-stage").getBoundingClientRect();
  const stageWidth = stageBox.width || 720;
  const stageHeight = stageBox.height || 500;
  const stemBaseY = stageHeight - stemBaseBottom;
  const headNarrowing = stageWidth < 520 ? 0.96 : 1;

  flowerLayer.replaceChildren();
  stemLayer.replaceChildren();
  swatches.replaceChildren();
  flowerList.replaceChildren();

  paletteName.textContent = palette.name;
  bouquetNumber.textContent = `#${seed}`;
  bouquetTitle.textContent = palette.title;
  bouquetMood.textContent = palette.mood;
  selectionTitle.textContent = isGrogu ? "Petits Grogu choisis" : "Fleurs choisies";

  palette.colors.forEach((color) => {
    const swatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.style.setProperty("--color", color);
    swatch.title = color;
    swatches.append(swatch);
  });

  const listedFlowers = new Set();

  flowers.forEach((flower, index) => {
    const layout = positions[index];
    const color = isGrogu ? palette.colors[index % palette.colors.length] : isRandom ? pick(wildColors) : familyColor(palette, flower.family);
    const normalizedBloomSize = isGrogu ? clamp(flower.size, 102, 120) : clamp(flower.size, 88, 106);
    const flowerSize = normalizedBloomSize * (1.08 + randomBetween(-0.03, 0.08));
    const flowerScale = layout.scale + randomBetween(-0.035, 0.055);
    const stemCurve = layout.curve + randomBetween(-10, 10);
    const clusterX = 50 + (layout.x - 50) * headNarrowing;
    const rawTipX = (clusterX + randomBetween(-1.1, 1.1)) * stageWidth / 100;
    const rawTipY = (layout.y + randomBetween(-1.2, 1.2)) * stageHeight / 100;
    const sideMargin = clamp(flowerSize * 0.48, stageWidth * 0.13, stageWidth * 0.2);
    const tipX = clamp(rawTipX, sideMargin, stageWidth - sideMargin);
    const tipY = clamp(rawTipY, stageHeight * 0.12, stageHeight * 0.56);
    const x = clamp((tipX / stageWidth) * 100, 8, 92);
    const y = clamp((tipY / stageHeight) * 100, 8, 76);
    const baseX = stageWidth / 2 + layout.base + randomBetween(-5, 5);
    const baseY = stemBaseY + layout.lift + randomBetween(-3, 4);
    const attachRatio = 0.38;
    const stemEndX = tipX + (baseX - tipX) * attachRatio;
    const stemEndY = tipY + (baseY - tipY) * attachRatio;
    const tilt = (layout.x - 50) * 0.18 + randomBetween(-12, 12);

    const stemTemplate = document.createElement("template");
    stemTemplate.innerHTML = createStemSvg(
      stageWidth,
      stageHeight,
      { x: baseX, y: baseY },
      { x: stemEndX, y: stemEndY },
      stemCurve,
      index,
    ).trim();
    const stem = stemTemplate.content.firstElementChild;
    stem.style.zIndex = String(layout.depth);
    stemLayer.append(stem);

    const flowerWrap = document.createElement("span");
    flowerWrap.className = isGrogu ? "flower grogu-flower" : "flower";
    flowerWrap.style.setProperty("--x", `${x}%`);
    flowerWrap.style.setProperty("--y", `${y}%`);
    flowerWrap.style.setProperty("--size", `${flowerSize}px`);
    flowerWrap.style.setProperty("--tilt", `${tilt}deg`);
    flowerWrap.style.setProperty("--scale", flowerScale);
    flowerWrap.style.setProperty("--delay", `${index * 42}ms`);
    flowerWrap.style.setProperty("--bloom-color", color);
    flowerWrap.style.setProperty("--bloom-light", shadeColor(color, 12));
    flowerWrap.style.setProperty("--bloom-shadow", shadeColor(color, -18));
    if (isGrogu) {
      flowerWrap.style.setProperty("--grogu-filter", groguFilters[(index + seed) % groguFilters.length]);
    }
    flowerWrap.style.zIndex = String(20 + layout.depth);
    flowerWrap.style.opacity = String(layout.depth < 2 ? 0.9 : 1);

    const img = document.createElement("img");
    img.alt = flower.name;
    img.src = isGrogu ? flower.image : svgToDataUrl(flowerSvg(flower, color, palette, index + seed));
    flowerWrap.append(img);
    flowerLayer.append(flowerWrap);

    if (!listedFlowers.has(flower.name) && listedFlowers.size < 4) {
      listedFlowers.add(flower.name);
      const item = document.createElement("li");
      item.className = "flower-item";
      item.innerHTML = `
        <span class="flower-dot" style="--color: ${color}"></span>
        <span>
          <span class="flower-name">${flower.name}</span>
          <span class="flower-meta">${flower.meaning}</span>
        </span>
      `;
      flowerList.append(item);
    }
  });
}

regenerate.addEventListener("click", () => drawBouquet("harmonious"));
randomize.addEventListener("click", () => drawBouquet("random"));
groguize.addEventListener("click", () => drawBouquet("grogu"));
latest.addEventListener("click", () => drawBouquet("latest"));
drawBouquet();
