"use client";
import Card from "@/components/menu-products/Card";
import React, { useEffect, useState } from "react";
import Title from "@/components/menu-products/Title";
import { Product } from "@/interfaces/Product";
import { devProducts } from "@/config/products";

function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (process.env.NODE_ENV === "development") {
          setProducts(devProducts);
          return;
        }
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Falha ao carregar produtos.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div
      id="menu"
      className="flex min-h-[calc(100vh-6rem)] scroll-mt-[22rem] flex-col gap-10 bg-gradient-to-r from-[#47291b] to-[#8b5e3c] pb-14 md:scroll-mt-20 md:pb-20 xl:pb-28"
    >
      <Title />
      {loading && (
        <div className="flex h-screen items-center justify-center pb-4 text-center text-white">
          Carregando produtos...
        </div>
      )}
      {error && !loading && (
        <div className="flex h-[50vh] items-center justify-center pb-4 text-center text-red-400">
          {error}
        </div>
      )}
      {!loading && !error && products.length === 0 && (
        <div className="pb-4 text-center text-white">Nenhum produto disponível.</div>
      )}
      <section className="mx-auto grid grid-cols-1 justify-items-center gap-x-20 gap-y-10 p-8 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-8 lg:px-12 xl:grid-cols-4 xl:px-20">
        {products.map((product) => (
          <Card
            id={product.id}
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            rebate={product.rebate}
            quantity={product.quantity}
          />
        ))}
      </section>
    </div>
  );
}

export default Page;
