"use client";

import { Product } from "@/interfaces/Product";
import ProductInCart from "./ProductInCart";
import NoProduct from "./NoProduct";

const CartMenu = ({
  isOpen,
  toggle,
  products,
}: {
  isOpen: boolean;
  toggle: () => void;
  products: Product[];
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={toggle}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[90%] transform overflow-y-auto bg-white shadow-xl transition-transform duration-300 sm:w-md ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b-[1px] border-gray-200 p-4 shadow-md">
          <h2 className="text-lg font-semibold text-[#8b5e3c]">Carrinho</h2>
          <button
            onClick={toggle}
            className="cursor-pointer text-xl text-[#8b5e3c] hover:text-[#a48974]"
          >
            ✕
          </button>
        </div>
        {products && products.length > 0 ? (
          <ProductInCart products={products} toggle={toggle} />
        ) : (
          <NoProduct toggle={toggle} />
        )}
      </div>
    </>
  );
};

export default CartMenu;
