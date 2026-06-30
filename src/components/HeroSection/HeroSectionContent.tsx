import { keyFeatureSpecs } from "@/lib/data";
import { Button } from "../ui/button";

export default function HeroSectionContent() {
  return (
    <div className="flex flex-wrap 2xl:flex-nowrap w-dvw items-center  justify-between  px-4 md:px-8 lg:px-15 ">
      <HeroSectionLeft />
      <HeroSectionRight />
    </div>
  );
}

const HeroSectionLeft = () => {
  return (
    <div className="text-white w-full md:text-center 2xl:text-left  space-y-4 lg:space-y-6 2xl:space-y-8">
      <AvalibleTag />
      <h1 className="text-6xl 2xl:text-9xl font-black ">PMO WAVE75</h1>
      <h2 className=" text-5xl lg:text-8xl   font-semibold text-gray-400">
        Custom keyboard
      </h2>
      <p className="px-4 2xl:w-200">
        Experience the ultimate custom keyboard with premium materials,
        hot-swappable switches, and stunning RGB lighting at an affordable price
        point.
      </p>

      <div className="flex md:justify-center 2xl:justify-start my-8 gap-x-5">
        <Button className="hover:bg-white    font-semibold 2xl:px-4 2xl:py-4 hover:text-black">
          Buy Now
        </Button>
        <Button className="bg-black    font-semibold 2xl:px-4 2xl:py-4 text-white hover:bg-black hover:text-white">
          View Specs
        </Button>
      </div>

      <KeyFeatureSpecs />
    </div>
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
    <div className="bg-transparent gap-x-5 inline-flex px-4 font-semibold items-center border rounded-full border-white mb-8">
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
      <span>avalible 2025</span>
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
