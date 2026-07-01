import type { KeyFeature } from "@/lib/type";

const featureLabels: Record<string, string> = {
  "magnetic-touch-needle": "Magnetic Touch Needle",
  "quick-release-structure": "Quick Release Structure",
  "pcb-slotting-area": "PCB Slotting Area",
  "qmk-via-support": "QMK / VIA Support",
  "75-percent-layout": "75% Compact Layout",
  "battery-life": "8000 mAh Battery",
};

const featureNumbers: Record<string, string> = {
  "magnetic-touch-needle": "01",
  "quick-release-structure": "02",
  "pcb-slotting-area": "03",
  "qmk-via-support": "04",
  "75-percent-layout": "05",
  "battery-life": "06",
};

export default function FeatureItem({
  keyFeatur,
  index,
  reversed,
}: {
  keyFeatur: KeyFeature;
  index: number;
  reversed?: boolean;
}) {
  const label = featureLabels[keyFeatur.key] ?? keyFeatur.key;
  const num = featureNumbers[keyFeatur.key] ?? String(index + 1).padStart(2, "0");

  return (
    <div
      className={[
        "group relative flex flex-col gap-6",
        "md:flex-row md:items-stretch md:gap-8 lg:gap-12",
        reversed ? "md:flex-row-reverse" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Image card */}
      <div className="relative w-full md:w-[55%] aspect-[16/9] md:aspect-auto md:min-h-[360px] lg:min-h-[400px] flex-shrink-0 overflow-hidden rounded-2xl lg:rounded-3xl">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-violet-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <img
          src={keyFeatur.img}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Feature number badge */}
        <span className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 text-xs font-mono font-bold tracking-wider">
          {num}
        </span>
      </div>

      {/* Content card */}
      <div
        className={[
          "flex flex-col justify-center",
          "w-full md:flex-1",
          "px-1 py-2 md:py-6",
          reversed ? "md:items-end md:text-right" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* Accent line */}
        <div
          className={[
            "w-12 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 mb-6 rounded-full",
            reversed ? "md:ml-auto" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        />

        {/* Feature key slug label */}
        <p className="text-pink-500 text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-3 opacity-80">
          {keyFeatur.key.replace(/-/g, " ")}
        </p>

        {/* Main title */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5 tracking-tight">
          {label}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-base lg:text-[17px] leading-relaxed max-w-md">
          {keyFeatur.detal}
        </p>

        {/* Subtle learn more link */}
        <div
          className={[
            "mt-8 flex items-center gap-2 text-sm font-medium text-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0",
            reversed ? "md:justify-end" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span>Learn more</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Horizontal separator (not on last item) */}
      <div className="absolute -bottom-3 lg:-bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent md:hidden" />
    </div>
  );
}
