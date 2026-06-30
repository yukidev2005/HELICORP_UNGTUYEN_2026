import { products } from "@/lib/data";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function ColorSection() {
  const [product, setProduct] = useState(products[2]);

  const handleChangeColor = (color: string) => {
    const newProduct = products.find((product) => product.color === color);
    if (newProduct) setProduct(newProduct);
  };

  return (
    <div
      id="colors"
      style={{ backgroundColor: product.color }}
      className="2xl:h-[calc(100dvh-80px)] gap-5 transition-colors duration-300 flex flex-col  items-center justify-center "
    >
      <img
        className="mx-auto  my-auto 2xl:h-[80%]"
        src={product.image}
        alt=""
      />

      <ColorSelector
        handleChangeColor={handleChangeColor}
        currentColor={product.color}
        colors={products.map(({ color }) => color)}
      />
    </div>
  );
}

interface iColorSelectorProps {
  colors: string[];
  handleChangeColor: (color: string) => void;
  currentColor: string;
}

const ColorSelector = ({
  colors,
  currentColor,
  handleChangeColor,
}: iColorSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-5 mb-5 justify-around">
      {colors.map((color) => {
        const isSelected = currentColor === color;
        return (
          <Button
            onClick={() => handleChangeColor(color)}
            style={{
              backgroundColor: color,
            }}
            className={cn("w-40 h-15", {
              "border-3 border-black/50": isSelected,
            })}
          ></Button>
        );
      })}
    </div>
  );
};
