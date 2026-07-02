import type {
  KeyFeatureSpec,
  ProductVariant,
  KeyFeature,
  SpecItem,
  SwitchSpec,
} from "./types";

export const keyFeatureSpecs: KeyFeatureSpec[] = [
  { primary: "75%", detail: "Compact Layout" },
  { primary: "USB-C", detail: "Connection" },
  { primary: "5-Pin", detail: "Hot-Swap" },
  { primary: "CNC", detail: "Aluminum" },
];

export const productVariants: ProductVariant[] = [
  {
    id: "pink",
    colorName: "Pink",
    colorHex: "#feece8",
    image: "./images/ban-phim-co-wave75-pink.webp",
  },
  {
    id: "black",
    colorName: "Black",
    colorHex: "#3a3b3f",
    image: "./images/ban-phim-co-wave75-black.webp",
  },
  {
    id: "blue",
    colorName: "Blue",
    colorHex: "#d4edf2",
    image: "./images/ban-phim-co-wave75-blue.webp",
  },
  {
    id: "silver",
    colorName: "Silver",
    colorHex: "#e8e8e8",
    image: "./images/ban-phim-co-wave75-silver.webp",
  },
  {
    id: "red",
    colorName: "Red",
    colorHex: "#da474d",
    image: "./images/ban-phim-co-wave75-red.webp",
  },
  {
    id: "milky",
    colorName: "Milky",
    colorHex: "#f5f5dc",
    image: "./images/ban-phim-co-wave75-milky.webp",
  },
  {
    id: "orange",
    colorName: "Orange",
    colorHex: "#de8043",
    image: "./images/ban-phim-co-wave75-orange.webp",
  },
];

export const productKeyFeatures: KeyFeature[] = [
  {
    id: "magnetic-touch-needle",
    title: "Magnetic Touch Needle",
    detail:
      "Gold-plated magnetic touch needle for quick two-piece disassembly and enhanced anti-oxidation in custom keyboards.",
    image: "./images/mach-hit-nam-cham.webp",
  },
  {
    id: "quick-release-structure",
    title: "Quick Release Structure",
    detail:
      "Quick release structure utilizing 4 groups of custom electroplated zinc alloy bead catches, allowing for adjustable disassembly strength.",
    image: "./images/catch-ball.webp",
  },
  {
    id: "pcb-slotting-area",
    title: "PCB Slotting Area",
    detail:
      "Specially adjusted PCB with varying horizontal slot areas and spacing at the Gasket to maintain typing consistency across key rows.",
    image: "./images/flex-cut.webp",
  },
  {
    id: "qmk-via-support",
    title: "QMK / VIA Support",
    detail:
      "Fully supports QMK (wired mode only) and VIA, allowing open-source customization of layouts, shortcuts, and backlighting via JSON file import.",
    image: "./images/qmk-via-ready.webp",
  },
  {
    id: "75-percent-layout",
    title: "75% Layout",
    detail:
      "Compact and simple 75% layout with 81 keys, retaining essential function keys for a characteristic user experience.",
    image: "./images/75-layout.webp",
  },
  {
    id: "battery-life",
    title: "Long Battery Life",
    detail:
      "Equipped with an 8000mAh large-capacity battery and a low-power chip for long-lasting use without frequent charging (Note: Green bamboo shaft version is 4000mAh).",
    image: "./images/8000mah.webp",
  },
];

export const wave75Specs: SpecItem[] = [
  { title: "Layout", details: "75% Layout (81 keys), pre-built" },
  { title: "Structure", details: "PCB Gasket Mount Structure" },
  { title: "Body", details: "CNC 6063 Aluminum Body" },
  { title: "Assembly System", details: "Quick Assembly System (ball-catch)" },
  { title: "Base Weight", details: "Mirrored / Stainless Steel PVD" },
  {
    title: "Colors",
    details:
      "Anodized (Black, Silver, Red) / e-Coating (Purple) / Spray coated (Other)",
  },
  {
    title: "PCB & Plate",
    details: "1.2 Flex cut, hot swappable PCB & PP/FR4 Plate",
  },
  { title: "Software Support", details: "QMK/VIA Support" },
  { title: "Sound Dampening", details: "PORON/PET plate & bottom" },
  { title: "Connectivity", details: "USB-C / 2.4G / Bluetooth" },
  { title: "Switch", details: "Linear, Bamboo (HMX) / Snow (Kailh)" },
  {
    title: "Keycaps",
    details: "Color matching double shot PBT Cherry profile",
  },
  { title: "Disclaimer", details: "Actual color may vary from photo" },
];

export const switchSpecs: SwitchSpec[] = [
  {
    id: "green-bamboo ",
    name: "Green bamboo shaft (HMX)",
    brand: "HMX",
    axis: "POM modified",
    upperCover: "PC",
    bottomShell: "Nylon modified",
    springLength: "21mm",
    actuationForce: "45g",
    travelDistance: "3.6mm",
    imageUrl: "./images/hmx-1.png",
  },
  {
    id: "xueqing",
    name: "Xueqing shaft (Kaihua)",
    brand: "Kaihua",
    axis: "DuPont MXPom",
    upperCover: "modified PC",
    bottomShell: "Thickened Pa66",
    springLength: "21mm",
    actuationForce: "45g",
    travelDistance: "3.6mm",
    imageUrl: "./images/hmx-2.png",
  },
];
