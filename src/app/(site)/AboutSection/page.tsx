import { FaMugHot } from "react-icons/fa";
import Image from "next/image";
import aboutImage from "@/public/assets/images/aboutImage.jpg";
import AboutStats from "@/components/about/AboutStats";
import AboutApproach from "@/components/about/AboutApproach";

const About = () => {
  return (
    <section
      id="about"
      className="overflow-hidden bg-gradient-to-r from-[#f5f3f3] to-[#d9b08c] py-14"
    >
      <div className="container mx-auto px-4">
        <article className="flex flex-col items-center gap-12 lg:flex-row">
          <figure className="relative lg:w-5/12">
            <div className="relative z-10 mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={aboutImage}
                alt="Café servido na Coffee Connect"
                className="aspect-[4/5] h-auto w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <span className="absolute -bottom-8 -left-8 z-0 hidden h-32 w-32 rounded-full bg-[#8b5e3c] opacity-20 lg:block" />
            <span className="absolute -top-8 -right-8 z-0 hidden h-40 w-40 rounded-full bg-[#47291b] opacity-20 lg:block" />
            <aside className="absolute -right-5 bottom-1 z-20 rounded-xl bg-white p-3 shadow-lg">
              <strong className="text-2xl font-bold text-[#8b5e3c]">10+</strong>
              <small className="block text-xs font-medium text-gray-600">Anos de Tradição</small>
            </aside>
          </figure>

          <div className="lg:w-7/12">
            <header>
              <h2 className="mb-6 text-3xl font-bold text-[#47291b] md:text-4xl">
                Sobre a <span className="text-[#8b5e3c]">Coffee Connect</span>
              </h2>
              <p className="mb-6 text-lg text-[#47291b]">
                Mais que café, criamos experiências. Cada xícara é um convite a compartilhar
                momentos únicos em um ambiente acolhedor e cheio de histórias. Acreditamos no poder
                do café para aproximar pessoas e fortalecer conexões reais.
              </p>
            </header>

            <AboutApproach />

            <AboutStats />

            <nav className="flex justify-center">
              <a
                href="#menu"
                className="inline-block rounded-full bg-[#8b5e3c] px-6 py-3 text-white shadow-md transition hover:bg-[#734c2e] focus:ring-2 focus:ring-[#47291b] focus:ring-offset-2 focus:outline-none"
              >
                Explore Nosso Cardápio
              </a>
            </nav>
          </div>
        </article>

        <aside className="relative mt-20 overflow-hidden rounded-2xl bg-white p-8 shadow-lg md:p-12">
          <span className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#d9b08c] opacity-40" />
          <div className="relative z-10">
            <h3 className="mb-6 text-2xl font-bold text-[#47291b]">Nossa Missão</h3>
            <blockquote className="mb-6 text-lg text-[#47291b]">
              "Transformar cada momento em uma experiência memorável, proporcionando cafés de
              qualidade e ambientes que aproximam pessoas."
            </blockquote>
            <figure className="flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#d9b08c]/30">
                <FaMugHot className="text-[#8b5e3c]" aria-hidden="true" />
              </div>
              <figcaption>
                <cite className="font-semibold text-[#47291b] not-italic">
                  Equipe Coffee Connect
                </cite>
                <p className="text-gray-600">Baristas & Fundadores</p>
              </figcaption>
            </figure>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
