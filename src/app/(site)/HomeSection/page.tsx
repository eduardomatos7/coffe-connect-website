import React from "react";
import Image from "next/image";
import homeImage1 from "@/public/assets/images/homeImage1.png";
import homeImage2 from "@/public/assets/images/homeImage2.png";
import { stats } from "@/config/statsHome";

const HomeSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-6rem)] w-full scroll-mt-72 items-stretch justify-between overflow-hidden bg-gradient-to-r from-[#47291b] to-[#8b5e3c] sm:scroll-mt-28 2xl:h-auto"
    >
      <article className="relative z-10 flex w-full flex-col items-center justify-start px-4 py-10 md:items-center md:px-20 lg:flex-row lg:items-start xl:mt-24 xl:justify-start xl:py-0 2xl:mt-0 2xl:items-center">
        <div className="relative mb-10 lg:mb-0 lg:w-1/2">
          <header>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-[3.75rem] 2xl:text-6xl">
              Mais que Café, <mark className="bg-transparent text-[#d9b08c]">Conexões Reais</mark>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-[#f5f3f3] 2xl:max-w-full 2xl:text-2xl">
              Na <strong>Coffee Connect</strong>, acreditamos que cada encontro merece ser especial.
              Mais do que café, oferecemos um espaço de aconchego, sabores autênticos e momentos que
              fortalecem laços e criam memórias.
            </p>
          </header>

          <nav className="mb-8 flex flex-col gap-4 sm:flex-row 2xl:text-xl">
            <a
              href="#menu"
              className="rounded-full bg-[#d9b08c] px-8 py-3 text-center font-semibold text-[#47291b] shadow-lg transition hover:scale-105 hover:bg-[#e0ba97] hover:shadow-xl"
            >
              Explore Nossos Cafés
            </a>
            <a
              href="#about"
              className="rounded-full border border-[#d9b08c] px-8 py-3 text-center font-medium text-[#f5f3f3] transition hover:bg-[#8b5e3c] hover:text-[#fff] hover:shadow-lg"
              aria-label="Sobre a Coffee Connect"
            >
              Conheça a Coffee Connect
            </a>
          </nav>

          <aside className="w-full py-4">
            <ul className="flex flex-wrap justify-center gap-4 text-center md:gap-8 lg:justify-start">
              {stats.map((stat, index) => (
                <li key={index} className="px-2 lg:px-0">
                  <strong className="text-2xl font-bold text-[#d9b08c]">{stat.value}</strong>
                  <small className="block text-sm text-[#f5f3f3]">{stat.label}</small>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <figure className="flex justify-center md:w-1/2">
          <div className="relative h-60 w-60 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96">
            <Image
              src={homeImage2}
              alt="Imagem de café secundária"
              className="absolute top-8 left-8 h-full w-full rounded-4xl border-4 border-[#d9b08c] object-cover shadow-lg md:top-12 md:left-14"
              width={500}
              height={500}
              priority
            />
            <Image
              src={homeImage1}
              alt="Imagem de café principal"
              className="relative h-full w-full rounded-4xl border-4 border-[#d9b08c] object-cover shadow-xl"
              width={500}
              height={500}
              priority
            />
          </div>
        </figure>
      </article>
    </section>
  );
};

export default HomeSection;
