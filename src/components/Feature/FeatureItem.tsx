import { cn } from "@/lib/utils";
import type { KeyFeature } from "@/lib/type";

export default function FeatureItem({
  keyFeatur,
  reversed,
}: {
  keyFeatur: KeyFeature;
  reversed?: boolean;
}) {
  const label = keyFeatur.key;

  return (
    <div
      className={cn(
        "relative flex flex-col gap-6",
        "md:flex-row md:items-stretch md:gap-8 lg:gap-12",
        reversed && "md:flex-row-reverse",
      )}
    >
      {/* Image card */}
      <div className="relative w-full md:w-[55%] aspect-video md:aspect-auto md:min-h-90 lg:min-h-100 shrink-0 overflow-hidden rounded-2xl lg:rounded-3xl">
        <img
          src={keyFeatur.img}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      {/* Content card */}
      <div
        className={cn(
          "flex flex-col justify-center",
          "w-full md:flex-1",
          "px-1 py-2 md:py-6",
          reversed && "md:items-end md:text-right",
        )}
      >
        {/* Main title */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5 tracking-tight">
          {label}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-base lg:text-[17px] leading-relaxed max-w-md">
          {keyFeatur.detal}
        </p>
      </div>
    </div>
  );
}
