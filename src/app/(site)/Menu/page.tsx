import Card from "@/components/menu-products/Card";
import React from "react";
import espresso from "@/public/assets/images/products/espresso.jpg";
import cappuccino from "@/public/assets/images/products/cappuccino.jpg";
import chai from "@/public/assets/images/products/chai_latte.jpg";
import brownie from "@/public/assets/images/products/brownie.jpg";
import donut from "@/public/assets/images/products/donut.jpg";
import smoothie from "@/public/assets/images/products/smoothie.jpg";
import Title from "@/components/menu-products/Title";

function page() {
  return (
    <div
      id="menu"
      className="flex min-h-[calc(100vh-6rem)] scroll-mt-[22rem] flex-col gap-10 bg-gradient-to-r from-[#47291b] to-[#8b5e3c] md:scroll-mt-20"
    >
      <Title />

      <section className="mx-auto flex flex-wrap justify-center gap-x-20 gap-y-10 p-8 px-4 md:px-8 lg:px-12 xl:px-20">
        <Card imageUrl={espresso} name="Espresso Clássico" price={6} rebate={15} quantity={60} />
        <Card
          imageUrl={cappuccino}
          name="Cappuccino Cremoso"
          price={12}
          rebate={20}
          quantity={180}
        />
        <Card imageUrl={chai} name="Chai Latte Especiarias" price={14} rebate={10} quantity={250} />
        <Card imageUrl={smoothie} name="Smoothie" price={18} rebate={30} quantity={300} />
        <Card imageUrl={brownie} name="Brownie de Chocolate" price={9} />
        <Card imageUrl={donut} name="Donut Glaceado" price={7} rebate={12} />
      </section>
    </div>
  );
}

export default page;
