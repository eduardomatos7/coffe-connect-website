import { FaMugHot, FaUsers, FaStore } from "react-icons/fa";

type ApproachItem = {
  text: string;
};

const items: ApproachItem[] = [
  { text: "Sabores autênticos preparados com grãos selecionados." },
  { text: "Um espaço de aconchego para criar conexões reais." },
  { text: "Ambientes modernos que valorizam cada detalhe da experiência." },
];

const icons = [
  <FaMugHot className="text-[#47291b]" />,
  <FaUsers className="text-[#47291b]" />,
  <FaStore className="text-[#47291b]" />,
];

const AboutApproach = () => {
  return (
    <section className="m-8">
      <h3 className="mb-4 text-xl font-semibold text-[#47291b]">Nosso Diferencial</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <figure className="mr-3 rounded-full bg-[#d9b08c]/30 p-2">{icons[index]}</figure>
            <p className="text-[#47291b]">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutApproach;
