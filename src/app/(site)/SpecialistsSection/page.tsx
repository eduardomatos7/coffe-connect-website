import { employees } from "@/config/employees";
import Image from "next/image";

const SpecialistsSection = () => {
  return (
    <section
      id="specialists"
      className="overflow-hidden bg-gradient-to-r from-[#f4ebe1] to-[#e6d4c0] py-16 md:py-24 xl:py-32"
    >
      <div className="mx-auto flex flex-col gap-16 px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="text-center">
          <h2 className="mb-6 text-3xl leading-tight font-extrabold text-[#422a1f] md:text-4xl lg:text-5xl 2xl:text-6xl">
            Conheça <span className="text-[#8b5e3c]">nossos especialistas</span> apaixonados
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#5a3e2b] md:text-lg 2xl:text-xl">
            Cada membro da nossa equipe é dedicado a criar experiências únicas e memoráveis para
            você.
          </p>
        </div>

        {employees.map((emp, index) => (
          <aside
            key={emp.name}
            className={`relative flex flex-col items-center gap-8 overflow-hidden rounded-3xl bg-[#fff8f2] p-8 shadow-xl transition-transform hover:scale-[1.02] md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <span
              className={`absolute -top-12 h-56 w-56 rounded-full bg-[#d9b08c] opacity-20 md:h-72 md:w-72 ${
                index % 2 !== 0 ? "-left-16" : "-right-16"
              }`}
            />

            <figure className="relative w-full max-w-xs flex-shrink-0 lg:w-1/3">
              <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-3xl bg-[#f3e8df] shadow-2xl">
                <Image
                  src={emp.image}
                  alt={`Foto de ${emp.name}`}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  priority
                />
                <strong className="absolute right-4 bottom-4 rounded-xl bg-[#fff8f2] px-4 py-2 text-xl font-bold text-[#8b5e3c] shadow-md md:text-2xl">
                  {emp.highlight}
                </strong>
              </div>
            </figure>

            <div className="w-full lg:w-2/3">
              <h3 className="mb-2 text-2xl font-bold text-[#422a1f] md:text-3xl 2xl:text-4xl">
                {emp.name}
              </h3>
              <p className="mb-4 text-base font-semibold text-[#8b5e3c] md:text-lg 2xl:text-xl">
                {emp.role}
              </p>
              <p className="max-w-xl text-base leading-relaxed text-[#5a3e2b] md:text-lg 2xl:text-xl">
                {emp.reason}
              </p>
            </div>
          </aside>
        ))}

        <div className="mt-20 text-center">
          <h3 className="mb-4 text-2xl font-extrabold text-[#422a1f] md:text-3xl 2xl:text-4xl">
            Nossa equipe é o coração da Coffee Connect
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#5a3e2b] md:text-lg 2xl:text-xl">
            Mais do que especialistas, somos apaixonados por criar momentos memoráveis. Cada xícara
            servida reflete cuidado e dedicação.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-[#8b5e3c] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#7a4f36] md:px-8 md:py-4 md:text-lg"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
