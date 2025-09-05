import ContactBackgroundCarousel from "@/components/contact/ContactBackgroundCarousel";
import ContactCard from "@/components/contact/ContactCard";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#8b5e3c] py-20"
      aria-labelledby="contact-heading"
    >
      <ContactBackgroundCarousel />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-[25vh] text-white md:pt-[45vh]">
        <header className="mb-16 text-center" id="contact-heading">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl 2xl:text-6xl">
            Quer nos <span className="text-[#d9b08c]">conhecer melhor?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base md:text-lg 2xl:text-xl">
            Estamos aqui para compartilhar momentos únicos com você. Conheça um pouco mais sobre a{" "}
            <strong>Coffee Connect</strong> e como podemos tornar sua experiência inesquecível.
          </p>
        </header>

        <div className="flex flex-col items-stretch gap-12 md:flex-row">
          <ContactCard
            title="Envie seu Feedback"
            description="Quer nos enviar uma sugestão ou compartilhar sua experiência? Adoramos ouvir nossos clientes!"
            buttonLabel="Enviar Mensagem"
            buttonAria="Abrir formulário de feedback"
            align="right"
          />

          <div className="hidden w-px bg-white/40 md:block" />

          <ContactCard
            title="Conheça Nossas Experiências"
            description="Descubra nossos cafés especiais, eventos exclusivos e tudo que fazemos para tornar cada visita memorável."
            buttonLabel="Saiba Mais"
            buttonAria="Explorar experiências da cafeteria"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
