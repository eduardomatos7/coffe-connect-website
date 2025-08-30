import { FaMugHot, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import aboutImage from "@/public/assets/images/aboutImage.jpg";
import { employees } from "@/config/employees";
import AboutStats from "@/components/about/AboutStats";
import AboutApproach from "@/components/about/AboutApproach";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="overflow-hidden bg-gradient-to-r from-[#f5f3f3] to-[#d9b08c] py-14 md:py-20 xl:py-28"
    >
      <div className="mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        <article className="flex flex-col items-center gap-16 md:gap-24 lg:flex-row lg:items-start xl:gap-28">
          <figure className="relative w-full max-w-md lg:w-1/3">
            <div className="relative z-10 mx-auto w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={aboutImage}
                alt="Café servido na Coffee Connect"
                className="aspect-[4/5] h-auto max-h-[500px] w-full object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <span className="absolute -bottom-8 -left-8 z-0 hidden h-24 w-24 rounded-full bg-[#8b5e3c] opacity-20 md:h-32 md:w-32 lg:block" />
            <span className="absolute -top-8 -right-8 z-0 hidden h-28 w-28 rounded-full bg-[#47291b] opacity-20 md:h-40 md:w-40 lg:block" />

            <aside className="absolute -right-3 bottom-2 z-20 rounded-xl bg-white p-2 shadow-lg md:-right-5 md:bottom-1 md:p-3">
              <strong className="text-xl font-bold text-[#8b5e3c] md:text-2xl">10+</strong>
              <small className="block text-[0.65rem] font-medium text-gray-600 md:text-xs">
                Anos de Tradição
              </small>
            </aside>
          </figure>

          <div className="w-full lg:w-2/3">
            <header>
              <h2 className="mb-6 text-3xl font-bold text-[#47291b] md:text-4xl lg:text-5xl 2xl:text-6xl">
                Sobre a <span className="text-[#8b5e3c]">Coffee Connect</span>
              </h2>
              <p className="mb-6 text-base text-[#47291b] md:text-lg 2xl:text-xl">
                Mais que café, criamos experiências. Cada xícara é um convite a compartilhar
                momentos únicos em um ambiente acolhedor e cheio de histórias. Acreditamos no poder
                do café para aproximar pessoas e fortalecer conexões reais.
              </p>
            </header>

            <AboutApproach />
            <AboutStats />
          </div>
        </article>

        <section className="mt-16">
          <header className="relative mb-16 text-center xl:mb-8">
            <h2 className="mb-4 text-3xl font-bold text-[#47291b] md:text-4xl lg:text-5xl 2xl:text-6xl">
              Conheça <span className="text-[#8b5e3c]">nossos especialistas</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[#47291b] md:text-lg 2xl:text-xl">
              Cada membro da nossa equipe é dedicado a criar experiências únicas e memoráveis para
              você.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {employees.map((emp) => (
              <li key={emp.name} className="group relative">
                <article className="h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                  <figure className="relative h-70 overflow-hidden">
                    <Image
                      src={emp.image}
                      alt={emp.name}
                      className="h-full w-full object-cover object-[50%_30%] transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {emp.highlight && (
                      <aside className="absolute right-2 bottom-8 rounded-full bg-[#8b5e3c]/90 px-3 py-1 font-semibold text-white shadow-sm">
                        {emp.highlight}
                      </aside>
                    )}
                  </figure>

                  <div className="relative -mt-10 p-6">
                    <div className="relative rounded-lg bg-[#f4ebe1] p-6 shadow-md">
                      <figure className="absolute -top-6 left-6 rounded-full bg-[#8b5e3c] p-3 text-white shadow-lg">
                        <FaQuoteLeft className="text-lg" />
                      </figure>

                      <header className="mb-3">
                        <h3 className="text-xl font-bold text-[#47291b] md:text-2xl">{emp.name}</h3>
                        <p className="font-medium text-[#8b5e3c] md:text-lg">{emp.role}</p>
                      </header>
                      <p className="text-base text-[#47291b] md:text-lg">{emp.reason}</p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <aside className="relative mt-20 overflow-hidden rounded-2xl bg-white p-6 shadow-lg md:mt-28 md:p-10 xl:p-12">
          <span className="absolute -top-14 -right-14 h-48 w-48 rounded-full bg-[#d9b08c] opacity-40 md:-top-20 md:-right-20 md:h-64 md:w-64" />
          <div className="relative z-10">
            <h3 className="mb-6 text-2xl font-bold text-[#47291b] md:text-3xl 2xl:text-4xl">
              Nossa Missão
            </h3>
            <blockquote className="mb-6 text-base text-[#47291b] md:text-lg 2xl:text-xl">
              &ldquo;Transformar cada momento em uma experiência memorável, proporcionando cafés de
              qualidade e ambientes que aproximam pessoas.&rdquo;
            </blockquote>
            <figure className="flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#d9b08c]/30 md:h-14 md:w-14">
                <FaMugHot className="text-xl text-[#8b5e3c] md:text-2xl" aria-hidden="true" />
              </div>
              <figcaption>
                <cite className="font-semibold text-[#47291b] not-italic">
                  Equipe Coffee Connect
                </cite>
                <p className="text-sm text-gray-600 md:text-base">Baristas & Fundadores</p>
              </figcaption>
            </figure>
          </div>
        </aside>

        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="mt-4 text-center text-base text-[#47291b] md:text-lg 2xl:text-xl">
            Venha nos visitar e descubra o sabor que conecta pessoas!
          </p>
          <nav className="flex flex-wrap justify-center gap-4">
            <a
              href="#menu"
              className="inline-block rounded-full bg-[#8b5e3c] px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#734c2e] md:px-8 md:py-4 md:text-base 2xl:px-10 2xl:py-5 2xl:text-lg"
            >
              Explore Nosso Cardápio
            </a>

            <a
              href="#contact"
              className="inline-block rounded-full border-2 border-[#8b5e3c] px-6 py-3 text-base font-semibold text-[#47291b] shadow-md transition hover:bg-[#8b5e3c] hover:text-white md:px-8 md:py-4 md:text-base 2xl:px-10 2xl:py-5 2xl:text-lg"
            >
              Entre em Contato
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
