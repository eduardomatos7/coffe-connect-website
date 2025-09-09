interface ContactCardProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonAria: string;
  align?: "left" | "right";
}

const ContactCard = ({
  title,
  description,
  buttonLabel,
  buttonAria,
  align = "left",
}: ContactCardProps) => {
  const textAlign = align === "right" ? "md:text-right" : "md:text-left";
  const buttonAlign = align === "right" ? "md:justify-end" : "md:justify-start";

  return (
    <div className={`flex-1 ${textAlign} text-center`}>
      <h3 className="mb-6 text-3xl font-semibold md:text-4xl">{title}</h3>
      <p className="mb-6 text-base md:text-lg 2xl:text-xl">{description}</p>
      <div className={`flex ${buttonAlign} justify-center`}>
        <button
          aria-label={buttonAria}
          className="rounded-full bg-[#d9b08c] px-8 py-3 text-base font-semibold text-[#47291b] shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#e0ba97]"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
