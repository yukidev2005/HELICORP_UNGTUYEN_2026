import type { KeyFeature } from "@/lib/type";
import { cn } from "@/lib/utils";

export default function FeatureItem({
  keyFeatur,
  className,
}: {
  className?: string;
  keyFeatur: KeyFeature;
}) {
  return (
    <div className={cn("", className)}>
      <div className=" w-1/2 h-100 overflow-hidden rounded-xl">
        <img
          className="object-cover w-full h-100 "
          src={keyFeatur.img}
          alt=""
        />
      </div>
      <div className="flex-1  p-5">
        <h2 className=" text-[35px] xl:text-[40px] font-semibold mb-6">
          {keyFeatur.key}
        </h2>
        <p className=" text-[18px] text-muted-foreground">{keyFeatur.detal}</p>
      </div>
    </div>
  );
}
