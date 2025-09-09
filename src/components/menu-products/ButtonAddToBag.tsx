import React from "react";
import { IoBagAddOutline } from "react-icons/io5";

function ButtonAddToBag({ onAddToCart, name }: { onAddToCart?: () => void; name: string }) {
  return (
    <button
      type="button"
      onClick={onAddToCart}
      aria-label={`Adicionar ${name} à sacola`}
      className="group relative mt-4 inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#8F532E] px-4 py-3 font-semibold text-white shadow-sm ring-1 ring-[#8F532E]/50 transition-all duration-300 hover:bg-[#7a4a2b] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#d9b08c] focus-visible:outline-none active:scale-[.98]"
    >
      <IoBagAddOutline className="absolute translate-x-[-100px] transform text-xl opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
      <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:translate-x-[50px] group-hover:opacity-0">
        Adicionar à sacola
      </span>
    </button>
  );
}

export default ButtonAddToBag;
