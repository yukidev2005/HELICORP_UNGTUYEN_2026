import type { KeyFeature } from "./type";

export const keyFeatureSpecs = [
  {
    primary: "75%",
    detal: "Compact Layout",
  },
  {
    primary: "USB-C",
    detal: "Connection",
  },
  {
    primary: "5-Pin",
    detal: "Hot-Swap",
  },
  {
    primary: "CNC",
    detal: "Aluminum",
  },
];

export const products = [
  {
    image: "./images/ban-phim-co-wave75-pink.webp",
    color: "#feece8",
    colorName: "Pink",
  },
  {
    image: "./images/ban-phim-co-wave75-black.webp",
    color: "#3a3b3f",
    colorName: "Black",
  },
  {
    image: "./images/ban-phim-co-wave75-blue.webp",
    color: "#d4edf2",
    colorName: "Blue",
  },
  {
    image: "./images/ban-phim-co-wave75-silver.webp",
    color: "#e8e8e8",
    colorName: "Silver",
  },
  {
    image: "./images/ban-phim-co-wave75-red.webp",
    color: "#da474d",
    colorName: "Red",
  },
  {
    image: "./images/ban-phim-co-wave75-milky.webp",
    color: "#f5f5dc",
    colorName: "Milky",
  },
  {
    image: "./images/ban-com-co-wave75-orange.webp",
    color: "#de8043",
    colorName: "Orange",
  },
];

export const productKeyFeatures: KeyFeature[] = [
  {
    key: "magnetic-touch-needle",
    detal:
      "Gold-plated magnetic touch needle for quick two-piece disassembly and enhanced anti-oxidation in custom keyboards.",
    img: "./images/mach-hit-nam-cham.webp",
  },
  {
    key: "quick-release-structure",
    detal:
      "Quick release structure utilizing 4 groups of custom electroplated zinc alloy bead catches, allowing for adjustable disassembly strength.",
    img: "./images/catch-ball.webp",
  },
  {
    key: "pcb-slotting-area",
    detal:
      "Specially adjusted PCB with varying horizontal slot areas and spacing at the Gasket to maintain typing consistency across key rows.",
    img: "./images/flex-cut.webp",
  },
  {
    key: "qmk-via-support",
    detal:
      "Fully supports QMK (wired mode only) and VIA, allowing open-source customization of layouts, shortcuts, and backlighting via JSON file import.",
    img: "./images/qmk-via-ready.webp",
  },
  {
    key: "75-percent-layout",
    detal:
      "Compact and simple 75% layout with 81 keys, retaining essential function keys for a characteristic user experience.",
    img: "./images/75-layout.webp",
  },
  {
    key: "battery-life",
    detal:
      "Equipped with an 8000mAh large-capacity battery and a low-power chip for long-lasting use without frequent charging (Note: Green bamboo shaft version is 4000mAh).",
    img: "./images/8000mah.webp",
  },
];
