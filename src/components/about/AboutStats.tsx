import { FaAward, FaUsers, FaMugHot, FaStore } from "react-icons/fa";

type Stat = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

const stats: Stat[] = [
  {
    value: "10+",
    label: "Anos de Tradição",
    icon: <FaAward className="text-[#8b5e3c]" aria-hidden="true" />,
  },
  {
    value: "2k+",
    label: "Clientes Satisfeitos",
    icon: <FaUsers className="text-[#8b5e3c]" aria-hidden="true" />,
  },
  {
    value: "50+",
    label: "Receitas Exclusivas",
    icon: <FaMugHot className="text-[#8b5e3c]" aria-hidden="true" />,
  },
  {
    value: "5",
    label: "Unidades Ativas",
    icon: <FaStore className="text-[#8b5e3c]" aria-hidden="true" />,
  },
];

const AboutStats = () => {
  return (
    <section className="grid grid-cols-2 gap-4 mb-8">
      {stats.map((item, index) => (
        <article
          key={index}
          className="bg-white p-4 rounded-lg shadow-sm flex items-center"
        >
          <figure className="mr-3">{item.icon}</figure>
          <div>
            <strong className="text-xl font-bold text-[#8b5e3c]">
              {item.value}
            </strong>
            <p className="text-gray-600 text-sm">{item.label}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default AboutStats;
