import { cn } from "@/lib/utils";

export default function SectionWrapper({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative  2xl:h-[calc(100dvh-80px)] overflow-hidden",
        className,
      )}
    ></section>
  );
}
