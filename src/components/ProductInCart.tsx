import Image from "next/image";
import React from "react";
import { useCart } from "@/contexts/CartProvider";
import { IoBagRemoveOutline, IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import NoProduct from "./NoProduct";

function ProductInCart({ toggle }: { toggle: () => void }) {
  const { items, updateAmount, handleRemove } = useCart();

  const formatPrice = (v: number) => `R$ ${v.toFixed(2).replace(".", ",")}`;

  return (
    <div className="flex flex-col">
      {items.map((product) => (
        <div
          key={product.id}
          className={
            `flex flex-col gap-4 border-b border-gray-200 p-4 pb-4 transition-all duration-300 last:border-b-0 sm:mb-4 sm:grid sm:grid-cols-[auto_1fr] sm:items-center ` +
            `${product.removing ? "pointer-events-none scale-95 opacity-0" : "opacity-100"}`
          }
        >
          <div className="relative flex items-center space-x-4">
            <div className="h-20 w-20 overflow-hidden rounded-lg ring-1 ring-gray-100">
              <Image
                src={
                  typeof product.imageUrl === "string"
                    ? product.imageUrl
                    : product.imageUrl?.src || ""
                }
                width={80}
                height={80}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <span className="absolute -top-1 -left-1 items-center justify-center rounded-full bg-amber-400 px-2 py-0.5 text-xs font-semibold text-white shadow">
                {product.amount}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>
              <div className="mt-2 flex flex-row-reverse items-end justify-end gap-1 sm:flex-col sm:items-start sm:gap-0">
                {product.rebate ? (
                  <div className="flex items-center space-x-2 sm:mt-1">
                    <span className="text-[10px] font-semibold text-emerald-600">
                      {product.rebate}% OFF
                    </span>
                  </div>
                ) : null}
                <div className={`${!product.rebate && "sm:mt-2"} flex items-center space-x-3`}>
                  <span className="text-sm font-medium text-amber-600">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-w-full sm:justify-end">
            <div className="flex w-full items-center space-x-4 sm:w-fit">
              <div className="flex items-center rounded-md bg-gray-100 p-1 shadow-inner">
                <button
                  onClick={() => updateAmount(product.id, -1)}
                  className="flex h-6 w-6 cursor-pointer items-center justify-center text-gray-600 transition-colors hover:bg-gray-200 disabled:opacity-50 sm:h-8 sm:w-8"
                >
                  <IoRemoveOutline />
                </button>
                <div className="w-6 text-center text-sm font-medium text-gray-800 transition-transform duration-200 sm:w-8">
                  {product.amount}
                </div>
                <button
                  onClick={() => updateAmount(product.id, 1)}
                  className="flex h-6 w-6 cursor-pointer items-center justify-center text-gray-600 transition-colors hover:bg-gray-200 sm:h-8 sm:w-8"
                >
                  <IoAddOutline />
                </button>
              </div>

              <div className="flex w-full items-center justify-between sm:flex-col sm:items-end">
                <span className="text-md font-semibold text-gray-900 transition-transform duration-200 sm:mr-1 sm:text-sm">
                  {formatPrice(product.price * product.amount)}
                </span>
                <button
                  aria-label={`Remover ${product.name}`}
                  onClick={() => handleRemove(product.id)}
                  className="flex transform cursor-pointer items-center justify-center rounded px-1 py-1 text-sm text-red-600 transition duration-500 ease-out hover:scale-105 hover:bg-red-50 hover:text-red-700 sm:mt-1"
                >
                  <IoBagRemoveOutline className="text-md mr-1" /> Remover
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {items.length === 0 && <NoProduct toggle={toggle} />}
    </div>
  );
}

export default ProductInCart;
