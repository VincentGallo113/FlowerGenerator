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
    name: "Velours violet",
    title: "Soir doux",
    mood: "Une composition plus profonde, avec des violets veloutes, du rose ancien et beaucoup de feuillage.",
    families: ["purple", "mauve", "pink", "green"],
    colors: ["#7d548e", "#bd84a7", "#e8a1aa", "#788d61", "#485f4a"],
  },
];

const flowerDatabase = [
  { name: "Rose anglaise", family: "pink", form: "rose", petals: 18, size: 112, role: "coeur", meaning: "amour doux" },
  { name: "Pivoine", family: "pink", form: "peony", petals: 22, size: 132, role: "volume", meaning: "chance" },
  { name: "Renoncule", family: "coral", form: "rose", petals: 16, size: 96, role: "detail", meaning: "charme" },
  { name: "Dahlia", family: "coral", form: "dahlia", petals: 24, size: 118, role: "etoile", meaning: "joie" },
  { name: "Cosmos", family: "mauve", form: "simple", petals: 9, size: 92, role: "legerete", meaning: "harmonie" },
  { name: "Anemone", family: "purple", form: "simple", petals: 8, size: 96, role: "contraste", meaning: "attention" },
  { name: "Lavande", family: "purple", form: "sprig", petals: 12, size: 88, role: "parfum", meaning: "calme" },
  { name: "Hortensia", family: "blue", form: "cluster", petals: 20, size: 126, role: "nuage", meaning: "gratitude" },
  { name: "Myosotis", family: "blue", form: "cluster", petals: 14, size: 84, role: "souvenir", meaning: "memoire" },
  { name: "Marguerite creme", family: "cream", form: "simple", petals: 12, size: 98, role: "lumiere", meaning: "franchise" },
  { name: "Freesia", family: "yellow", form: "sprig", petals: 9, size: 90, role: "accent", meaning: "confiance" },
  { name: "Mimosa", family: "yellow", form: "cluster", petals: 18, size: 82, role: "soleil", meaning: "tendresse" },
];

const fallbackColors = {
  pink: "#df7891",
  coral: "#ee8c70",
  mauve: "#b887b4",
  purple: "#86609a",
  blue: "#8ab4d2",
  cream: "#f7e7c8",
  yellow: "#ecc765",
  green: "#7f9769",
};

const positions = [
  { angle: -1, stem: 335, scale: 1.04 },
  { angle: -16, stem: 306, scale: 0.92 },
  { angle: 15, stem: 310, scale: 0.96 },
  { angle: -28, stem: 270, scale: 0.82 },
  { angle: 27, stem: 270, scale: 0.84 },
  { angle: -7, stem: 275, scale: 0.76 },
  { angle: 8, stem: 262, scale: 0.72 },
  { angle: -22, stem: 230, scale: 0.68 },
  { angle: 23, stem: 230, scale: 0.68 },
];

const stemBaseBottom = 110;

const flowerLayer = document.querySelector("#flowerLayer");
const stemLayer = document.querySelector("#stemLayer");
const swatches = document.querySelector("#swatches");
const flowerList = document.querySelector("#flowerList");
const regenerate = document.querySelector("#regenerate");
const paletteName = document.querySelector("#paletteName");
const bouquetNumber = document.querySelector("#bouquetNumber");
const bouquetTitle = document.querySelector("#bouquetTitle");
const bouquetMood = document.querySelector("#bouquetMood");

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

function petalPath(form) {
  if (form === "dahlia") return "M 0 -34 C 10 -30 14 -12 6 0 C 3 6 -3 6 -6 0 C -14 -12 -10 -30 0 -34";
  if (form === "rose") return "M 0 -32 C 16 -25 18 -7 6 3 C 1 8 -8 6 -10 -1 C -14 -14 -10 -27 0 -32";
  if (form === "sprig") return "M 0 -28 C 9 -24 12 -11 5 -2 C 1 4 -6 3 -8 -3 C -10 -13 -8 -24 0 -28";
  return "M 0 -34 C 15 -24 18 -8 7 3 C 2 8 -6 8 -10 2 C -18 -10 -13 -27 0 -34";
}

function flowerSvg(flower, color, palette) {
  const petal = petalPath(flower.form);
  const center = flower.family === "cream" ? "#c78b3e" : "#f1c86e";
  const inner = palette.colors[1] || color;
  const rotateStep = 360 / flower.petals;
  const petals = Array.from({ length: flower.petals }, (_, index) => {
    const rotate = index * rotateStep;
    const scale = flower.form === "cluster" ? 0.54 + (index % 3) * 0.07 : 1;
    const distance = flower.form === "cluster" ? 14 + (index % 5) * 4 : 0;
    const opacity = 0.9 - (index % 4) * 0.035;
    return `<path d="${petal}" fill="${index % 2 ? color : inner}" opacity="${opacity}" transform="rotate(${rotate}) translate(0 ${distance}) scale(${scale})"/>`;
  }).join("");

  if (flower.form === "sprig") {
    const blossoms = Array.from({ length: flower.petals }, (_, index) => {
      const x = index % 2 ? 14 : -14;
      const y = -44 + index * 8;
      const scale = 0.28 + (index % 3) * 0.03;
      return `<g transform="translate(${x} ${y}) scale(${scale})">${petals}</g>`;
    }).join("");

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -90 140 150" role="img" aria-label="${flower.name}">
      <path d="M0 62 C -6 20 4 -18 0 -70" fill="none" stroke="#657f58" stroke-width="5" stroke-linecap="round"/>
      ${blossoms}
    </svg>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -70 140 140" role="img" aria-label="${flower.name}">
    <g>
      ${petals}
      <circle r="15" fill="${center}"/>
      <circle r="7" fill="#6f5334" opacity="0.5"/>
    </g>
  </svg>`;
}

function svgToDataUrl(svg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function drawBouquet() {
  const palette = pick(palettes);
  const flowers = chooseFlowers(palette);
  const seed = Math.floor(Math.random() * 9000) + 1000;
  const stageBox = document.querySelector(".bouquet-stage").getBoundingClientRect();
  const stageWidth = stageBox.width || 720;
  const stageHeight = stageBox.height || 500;
  const stemBaseY = stageHeight - stemBaseBottom;

  flowerLayer.replaceChildren();
  stemLayer.replaceChildren();
  swatches.replaceChildren();
  flowerList.replaceChildren();

  paletteName.textContent = palette.name;
  bouquetNumber.textContent = `#${seed}`;
  bouquetTitle.textContent = palette.title;
  bouquetMood.textContent = palette.mood;

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
    const color = familyColor(palette, flower.family);
    const stemAngle = layout.angle + randomBetween(-3, 3);
    const stemHeight = layout.stem + randomBetween(-14, 14);
    const radians = (stemAngle * Math.PI) / 180;
    const tipX = stageWidth / 2 + Math.sin(radians) * stemHeight;
    const tipY = stemBaseY - Math.cos(radians) * stemHeight;
    const x = clamp((tipX / stageWidth) * 100, 8, 92);
    const y = clamp((tipY / stageHeight) * 100, 8, 76);
    const tilt = randomBetween(-14, 14);

    const stem = document.createElement("span");
    stem.className = "stem";
    stem.style.setProperty("--angle", `${stemAngle}deg`);
    stem.style.setProperty("--stem-height", `${stemHeight}px`);
    stemLayer.append(stem);

    const flowerWrap = document.createElement("span");
    flowerWrap.className = "flower";
    flowerWrap.style.setProperty("--x", `${x}%`);
    flowerWrap.style.setProperty("--y", `${y}%`);
    flowerWrap.style.setProperty("--size", `${flower.size}px`);
    flowerWrap.style.setProperty("--tilt", `${tilt}deg`);
    flowerWrap.style.setProperty("--scale", layout.scale);
    flowerWrap.style.setProperty("--delay", `${index * 42}ms`);

    const img = document.createElement("img");
    img.alt = flower.name;
    img.src = svgToDataUrl(flowerSvg(flower, color, palette));
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

regenerate.addEventListener("click", drawBouquet);
drawBouquet();
