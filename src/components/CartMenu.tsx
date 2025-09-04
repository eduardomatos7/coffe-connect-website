"use client";

import { IoBagOutline } from "react-icons/io5";

const CartMenu = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={toggle}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 transform bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold text-[#8b5e3c]">Carrinho</h2>
          <button
            onClick={toggle}
            className="cursor-pointer text-xl text-[#8b5e3c] hover:text-[#a48974]"
          >
            ✕
          </button>
        </div>

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
      </div>
    </>
  );
};

export default CartMenu;
