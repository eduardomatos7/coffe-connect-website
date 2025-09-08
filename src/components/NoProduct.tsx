import React from "react";
import { IoBagOutline } from "react-icons/io5";

function NoProduct({ toggle }: { toggle: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 p-6 text-center">
      <IoBagOutline className="h-12 w-12 text-[#8b5e3c]" />

      <h3 className="text-lg font-semibold text-gray-800">Seu carrinho está vazio</h3>
      <p className="text-gray-600">
        Parece que você ainda não adicionou nenhum produto. Que tal dar uma olhada em nossos
        destaques?
      </p>
      <a
        href="#menu"
        onClick={toggle}
        className="mt-2 inline-block rounded-md bg-[#8b5e3c] px-4 py-2 text-white transition-colors hover:bg-[#a48974]"
      >
        Explorar Produtos
      </a>
    </div>
  );
}

export default NoProduct;
