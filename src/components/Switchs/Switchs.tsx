import { switchSpecs } from "@/lib/data";
import { Card, CardContent } from "../ui/card";
import type { SwitchSpec } from "@/lib/types";
import { Fragment } from "react/jsx-runtime";
import { Separator } from "../ui/separator";

export default function Switchs() {
  return (
    <div id="switchs" className="py-12 px-4 sm:px-6 lg:px-8">
      <SwitchsHeader />
      <div className="flex flex-wrap sm:flex-nowrap gap-5 w-full xl:max-w-7xl mx-auto">
        {switchSpecs.map((switchData) => (
          <SwitchBox key={switchData.id} switchData={switchData} />
        ))}
      </div>
    </div>
  );
}

const transfomText = (text: string) =>
  text.replace(/([A-Z])/g, " $1").replace(/^./, (text) => text.toUpperCase());

const SwitchsHeader = () => {
  return (
    <div className="text-center mb-16 xl:mb-20">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/5 text-violet-500 text-sm font-medium tracking-wide mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
        SWITCH
      </span>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
        <span className="text-foreground">Wave75 </span>
        <span className="bg-linear-to-r from-pink-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">
          Switch
        </span>
      </h2>
      <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
        Pre-lubed switch, smooth, high sound, etc...
      </p>
    </div>
  );
};

const SwitchBox = ({ switchData }: { switchData: SwitchSpec }) => {
  return (
    <Card className=" w-full sm:w-1/2 relative">
      {/* Background decorative image */}
      <img
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="object-cover scale-180 opacity-30 z-1 absolute translate-x-1/2 top-0 translate-y-1/2 right-1/2 bottom-0 xl:hidden"
        src={switchData.imageUrl}
        alt=""
        width={200}
        height={200}
      />

      <CardContent className="flex gap-5 flex-col md:flex-row">
        {/* image  */}
        <div className="bg-accent xl:block hidden w-50 rounded-xl px-2 py-4">
          <img
            loading="lazy"
            decoding="async"
            width={160}
            height={160}
            className="mx-auto object-contain"
            src={switchData.imageUrl}
            alt={switchData.name}
          />
          <h3 className="mt-8 text-center font-semibold text-lg">
            {switchData.name}
          </h3>
        </div>

        {/* content */}
        <div className="flex-1 ">
          <h3 className="font-bold text-center text-xl">{switchData.name}</h3>
          <div className="my-4">
            {Object.entries(switchData)
              .filter((items) => items[0] !== "id" && items[0] !== "imageUrl")
              .map((items) => (
                <Fragment key={items[0]}>
                  <div className="flex group items-center justify-between">
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors font-bold duration-300">
                      {transfomText(items[0])}
                    </p>
                    <p>{items[1]}</p>
                  </div>
                  <Separator className="my-1" />
                </Fragment>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

