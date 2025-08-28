import { FaMugHot, FaUsers, FaStore } from "react-icons/fa";
import { ReactNode } from "react";

type ApproachItem = {
  text: string;
  icon: ReactNode;
  id: string;
};

const items: ApproachItem[] = [
  {
    id: "authentic-flavors",
    text: "Sabores autênticos preparados com grãos selecionados.",
    icon: <FaMugHot className="text-[#47291b]" aria-hidden="true" />,
  },
  {
    id: "cozy-space",
    text: "Um espaço de aconchego para criar conexões reais.",
    icon: <FaUsers className="text-[#47291b]" aria-hidden="true" />,
  },
  {
    id: "modern-environment",
    text: "Ambientes modernos que valorizam cada detalhe da experiência.",
    icon: <FaStore className="text-[#47291b]" aria-hidden="true" />,
  },
];

const AboutApproach = () => {
  return (
    <section className="m-8">
      <h3 className="mb-4 text-xl font-semibold text-[#47291b]">Nosso Diferencial</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex items-start">
            <figure className="mr-3 rounded-full bg-[#d9b08c]/30 p-2">{item.icon}</figure>
            <p className="text-[#47291b]">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutApproach;
