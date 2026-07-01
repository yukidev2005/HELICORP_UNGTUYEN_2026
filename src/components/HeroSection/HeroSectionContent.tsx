import { keyFeatureSpecs } from "@/lib/data";
import { Button } from "../ui/button";
import SubriceFormDialog from "./SubriceFormDialog";
import { useState } from "react";
import { ShoppingCart, FileText, Bell } from "lucide-react";

export default function HeroSectionContent() {
  return (
    <>
      <div className="flex flex-wrap 2xl:flex-nowrap w-dvw items-center  justify-between  px-4 md:px-8 lg:px-15 ">
        <HeroSectionLeft />
        <HeroSectionRight />
      </div>
    </>
  );
}

const HeroSectionLeft = () => {
  const [SubriceFormDialogOepn, setSubriceFormDialogOpen] = useState(false);

  return (
    <>
      <div className="text-white w-full md:text-center 2xl:text-left  space-y-4 lg:space-y-6 2xl:space-y-8">
        <AvalibleTag />
        <h1 className="text-6xl 2xl:text-9xl font-black ">PMO WAVE75</h1>
        <h2 className=" text-5xl lg:text-8xl   font-semibold text-gray-400">
          Custom keyboard
        </h2>
        <p className="px-4 2xl:w-200">
          Experience the ultimate custom keyboard with premium materials,
          hot-swappable switches, and stunning RGB lighting at an affordable
          price point.
        </p>

        <div className="flex flex-wrap md:justify-center 2xl:justify-start gap-3 my-8">
          {/* Primary CTA - Buy Now */}
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Buy Now
          </Button>

          {/* Secondary CTA - View Specs */}
          <Button 
            size="lg"
      
            className=" text-white bg-black hover:bg-black hover:text-white transition-all duration-200 font-semibold"
          >
            <FileText className="mr-2 h-5 w-5" />
            View Specs
          </Button>

          <Button
            size="lg"
            onClick={() => setSubriceFormDialogOpen(true)}
            variant="outline"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-200 font-semibold"
          >
            <Bell className="mr-2 h-5 w-5" />
            Get Notified
          </Button>
        </div>

        <KeyFeatureSpecs />
      </div>
      <SubriceFormDialog
        onClose={() => setSubriceFormDialogOpen(false)}
        isOpen={SubriceFormDialogOepn}
      />
    </>
  );
};

const HeroSectionRight = () => {
  return (
    <div className="mx-auto">
      <img
        className="w-full  h-full object-cover block"
        src="./images/hero_sub_image.webp"
        alt="hero_section_sub_image"
      />
    </div>
  );
};

const AvalibleTag = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm gap-x-3 inline-flex px-5 py-2 font-semibold items-center border border-white/20 rounded-full mb-8 hover:bg-white/20 transition-all duration-300 cursor-default group">
      <div className="relative">
        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
        <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping"></div>
      </div>
      <span className="text-sm tracking-wide group-hover:tracking-wider transition-all duration-300">
        Available 2025
      </span>
    </div>
  );
};

const KeyFeatureSpecs = () => {
  return (
    <div className="flex md:justify-center 2xl:justify-start  flex-wrap items-center gap-10">
      {keyFeatureSpecs.map(({ detal, primary }) => (
        <div key={primary} className="text-nowrap">
          <h2 className="text-2xl font-black">{primary}</h2>
          <h2 className="text-white/70">{detal}</h2>
        </div>
      ))}
    </div>
  );
};
