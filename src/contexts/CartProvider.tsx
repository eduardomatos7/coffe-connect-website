"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Product } from "@/interfaces/Product";

type CartItem = Product & { amount: number; removing?: boolean };

type CartContextValue = {
  products: Product[];
  items: CartItem[];
  addProductToCart: (_p: Product) => void;
  updateAmount: (_id: string | number, _delta: number) => void;
  handleRemove: (_id: string | number) => void;
  totalItemsInCart: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  const [items, setItems] = useState<CartItem[]>(
    () => products && products.map((p) => ({ ...p, amount: 1 }))
  );

  const timers = useRef<Record<string | number, ReturnType<typeof setTimeout>>>({});

  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  useEffect(() => {
    return () => {
      Object.values(timers.current).forEach(clearTimeout);
      timers.current = {};
    };
  }, []);

  const updateAmount = (id: string | number, delta: number) => {
    setItems((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, amount: it.amount + delta } : it))
        .filter((it) => it.amount > 0)
    );
    setTotalItemsInCart((prev) => prev + delta);
  };

  const addProductToCart = (product: Product) => {
    setProducts((prev) => {
      const existingProduct = prev.find((p) => p.id === product.id);
      if (existingProduct) return prev;
      return [...prev, product];
    });

    setItems((prev) => {
      const exists = prev.find((it) => it.id === product.id);
      if (exists) {
        return prev.map((it) => (it.id === product.id ? { ...it, amount: it.amount + 1 } : it));
      }
      return [...prev, { ...product, amount: 1 } as CartItem];
    });
    setTotalItemsInCart((prev) => prev + 1);
  };

  const handleRemove = (id: string | number, delay = 300) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, removing: true } : it)));
    if (timers.current[id]) clearTimeout(timers.current[id]);
    timers.current[id] = setTimeout(() => {
      setItems((prev) => prev.filter((it) => it.id !== id));
      delete timers.current[id];
    }, delay);
    const totalItemsProduct = items.find((it) => it.id === id)?.amount;
    if (totalItemsProduct) setTotalItemsInCart((prev) => prev - totalItemsProduct);
  };
  console.log(totalItemsInCart);

  return (
    <CartContext.Provider
      value={{
        products,
        items,
        addProductToCart,
        updateAmount,
        handleRemove,
        totalItemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
