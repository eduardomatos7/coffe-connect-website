import Image, { StaticImageData } from "next/image";
import React from "react";
import ButtonAddToBag from "./ButtonAddToBag";

function Card({
  imageUrl,
  name,
  price,
  rebate,
  quantity,
  onAddToCart,
}: {
  imageUrl: string | StaticImageData;
  name: string;
  price: number;
  rebate?: number;
  quantity?: number;
  onAddToCart?: () => void;
}) {
  const hasRebate = typeof rebate === "number" && rebate > 0;
  const finalPrice = hasRebate ? price - (price * (rebate as number)) / 100 : price;

  const formatBRL = (v: number) => v.toFixed(2).replace(".", ",");
  const originalPriceBR = formatBRL(price);
  const finalPriceBR = formatBRL(finalPrice);

  return (
    <div className="group relative flex w-64 flex-col overflow-hidden rounded-2xl border border-[#e4d2c4] bg-gradient-to-br from-[#fffaf6] via-[#f8efe7] to-[#f1e2d6] p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-36 w-full overflow-hidden rounded-xl md:h-44">
        <Image
          src={imageUrl || "/images/no-image.png"}
          alt={name}
          width={400}
          height={260}
          className="h-full w-full scale-105 object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />
        {hasRebate && (
          <span className="absolute top-2 left-2 rounded-full bg-gradient-to-br from-[#12703a] to-[#1d8c4a] px-3 py-1 text-xs font-semibold tracking-wide text-white shadow-md">
            -{rebate}%
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between pt-4">
        <h3 className="text-base font-semibold text-[#5c3a23] md:text-lg">
          {name}
          {quantity && (
            <span className="align-center ml-1 text-xs font-normal text-[#8b5e3c]/70">
              ({quantity}ml)
            </span>
          )}
        </h3>

        <div className={`${hasRebate ? "mt-3" : "lg:mt-8"} flex items-end justify-between`}>
          <div className="flex flex-col">
            {hasRebate && (
              <span className="text-xs font-medium text-[#8b5e3c]/50 line-through">
                R${originalPriceBR}
              </span>
            )}
            <span
              className={`font-semibold ${hasRebate ? "text-lg text-[#12703a]" : "text-lg text-[#8F532E]/95"}`}
            >
              R${finalPriceBR}
            </span>
          </div>

          {hasRebate && (
            <span className="ml-2 inline-flex items-center gap-1 rounded-md bg-[#e6f9ee] px-2 py-1 text-[10px] font-semibold tracking-wide text-[#12703a] uppercase shadow-sm">
              Economia {formatBRL(price - finalPrice)}
            </span>
          )}
        </div>
        <ButtonAddToBag onAddToCart={onAddToCart} name={name} />
      </div>
    </div>
  );
}

export default Card;
