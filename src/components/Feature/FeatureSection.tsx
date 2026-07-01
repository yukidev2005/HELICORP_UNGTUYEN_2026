import { productKeyFeatures } from "@/lib/data";
import FeatureItem from "./FeatureItem";
import { cn } from "@/lib/utils";

export default function FeatureSection() {
  return (
    <section id="features" className="min-h-[calc(100dvh-80px)] px-2 py-4">
      <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-white to-pink-500">
        Key Feature
      </h2>
      <div className="my-8 2xl:w-[80%] space-y-8 mx-auto">
        {productKeyFeatures.map((keyFeatur, i) => (
          <FeatureItem
            className={cn("flex 2xl:gap-20 items-center  flex-nowrap", {
              "flex-row-reverse": i % 2 != 0,
            })}
            key={keyFeatur.key}
            keyFeatur={keyFeatur}
          />
        ))}
      </div>
    </section>
  );
}
