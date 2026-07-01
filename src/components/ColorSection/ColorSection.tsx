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
      style={{
        background: product.color,
      }}
      className="min-h-screen 2xl:h-[calc(100dvh-80px)] relative overflow-hidden transition-colors duration-300 "
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/2 -left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-blob transition-colors duration-700"
          style={{ backgroundColor: product.color }}
        />
        <div
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000 transition-colors duration-700"
          style={{ backgroundColor: product.color }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000 transition-colors duration-700"
          style={{ backgroundColor: product.color }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8 px-4 py-12">
        {/* Glassmorphism card cho product */}
        <div className="relative">
          {/* Glass card */}
          <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl transition-all duration-500">
            <img
              className="mx-auto w-full max-w-2xl h-125 object-contain drop-shadow-2xl transition-all duration-700"
              src={product.image}
              alt={product.colorName}
            />

            {/* Color name badge */}
            <div className="absolute top-4 right-4 backdrop-blur-md bg-white/20 px-6 py-3 rounded-full border border-white/30 shadow-lg transition-all duration-500">
              <span className="text-white font-semibold text-lg tracking-wide">
                {product.colorName}
              </span>
            </div>
          </div>
        </div>

        {/* Color Selector với glassmorphism */}
        <ColorSelector
          handleChangeColor={handleChangeColor}
          currentColor={product.color}
          colors={products.map(({ color, colorName }) => ({
            color,
            colorName,
          }))}
        />
      </div>

      {/* CSS Animation keyframes */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

interface iColorSelectorProps {
  colors: { color: string; colorName: string }[];
  handleChangeColor: (color: string) => void;
  currentColor: string;
}

const ColorSelector = ({
  colors,
  currentColor,
  handleChangeColor,
}: iColorSelectorProps) => {
  return (
    <div className="backdrop-blur-2xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl transition-all duration-500">
      <div className="flex flex-wrap gap-4 justify-center items-center max-w-4xl">
        {colors.map(({ color, colorName }) => {
          const isSelected = currentColor === color;
          return (
            <div key={color} className="relative group">
              {/* Glow ring effect */}
              <div
                className={cn(
                  "absolute -inset-1 rounded-2xl blur-lg transition-all duration-500",
                  isSelected ? "opacity-100" : "opacity-0",
                )}
                style={{ backgroundColor: color }}
              />

              {/* Button */}
              <Button
                onClick={() => handleChangeColor(color)}
                style={{ backgroundColor: color }}
                className={cn(
                  "relative w-20 h-20 rounded-2xl border-2 transition-all duration-500",
                  "active:scale-95",
                  isSelected
                    ? "border-white shadow-2xl scale-110"
                    : "border-white/40",
                )}
              >
                {/* Inner highlight */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/30 to-transparent transition-all duration-500" />

                {/* Checkmark for selected */}
                {isSelected && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white drop-shadow-lg animate-in zoom-in duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
              </Button>

              {/* Tooltip - chỉ hiện khi không được select */}
              {!isSelected && (
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="backdrop-blur-md bg-white/90 px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-800">
                      {colorName}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected color indicator */}
      <div className="mt-6 text-center transition-all duration-500">
        <p className="text-white/80 text-sm font-medium tracking-wide">
          Choose your perfect color
        </p>
      </div>
    </div>
  );
};
