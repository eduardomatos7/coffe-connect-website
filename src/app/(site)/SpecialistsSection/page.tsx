import { employees } from "@/config/employees";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const SpecialistsSection = () => {
  return (
    <section
      id="specialists"
      className="overflow-hidden bg-gradient-to-r from-[#f4f1ed] to-[#d9b08c]/70 py-14 md:py-20 xl:py-28"
    >
      <div className="mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        <header className="relative mb-16 text-center xl:mb-8">
          <h2 className="mb-4 text-3xl font-bold text-[#422a1f] md:text-4xl lg:text-5xl 2xl:text-6xl">
            Conheça <span className="text-[#8b5e3c]">nossos especialistas</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#5a3e2b] md:text-lg 2xl:text-xl">
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
                      <h3 className="text-xl font-bold text-[#422a1f] md:text-2xl">{emp.name}</h3>
                      <p className="font-medium text-[#8b5e3c] md:text-lg">{emp.role}</p>
                    </header>
                    <p className="text-base text-[#5a3e2b] md:text-lg">{emp.reason}</p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <aside className="relative mt-16 overflow-hidden p-8 text-center md:p-12">
          <h3 className="mb-6 text-2xl font-bold text-[#422a1f] md:text-3xl">
            Pronto para conhecer nossos especialistas?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-base text-[#5a3e2b] md:text-lg">
            Entre em contato e descubra como podemos proporcionar experiências únicas e memoráveis
            com nossa equipe.
          </p>
          <nav className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#8b5e3c] px-8 py-3 text-white shadow-lg transition hover:bg-[#734c2e]"
            >
              Fale Conosco
            </a>
          </nav>
        </aside>
      </div>
    </section>
  );
};

export default SpecialistsSection;
