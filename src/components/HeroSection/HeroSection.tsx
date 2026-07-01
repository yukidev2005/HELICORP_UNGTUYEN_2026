import HeroSectionContent from "./HeroSectionContent";

export default function HeroSection() {
  return (
    <section className="relative  2xl:h-[calc(100dvh-80px)] flex items-center overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0">
        <img
          fetchPriority="high"
          className="w-full h-full object-cover scale-105"
          src="./images/ban-phim-co-wave75-4.webp"
          alt="PMO Wave75 Custom Keyboard"
        />
        {/* Gradient overlay - lighter for better visibility */}
        <div className="absolute inset-0 bg-black/70 " />
      </div>

      {/* Content */}
      <div className="grid z-10  place-items-center">
        <HeroSectionContent />
      </div>
    </section>
  );
}
