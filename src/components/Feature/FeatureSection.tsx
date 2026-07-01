import { productKeyFeatures } from "@/lib/data";
import FeatureItem from "./FeatureItem";

export default function FeatureSection() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/5 text-pink-500 text-sm font-medium tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            WHY WAVE75
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-foreground">Engineered for</span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">
              Perfection
            </span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Every detail crafted with precision — from the silky-smooth keystrokes
            to the premium CNC aluminum chassis.
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-6 lg:space-y-8">
          {productKeyFeatures.map((keyFeatur, i) => (
            <FeatureItem
              key={keyFeatur.key}
              keyFeatur={keyFeatur}
              index={i}
              reversed={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
