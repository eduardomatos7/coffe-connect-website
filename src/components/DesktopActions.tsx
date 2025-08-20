"use client";

import { FiShoppingCart } from "react-icons/fi";

const DesktopActions = () => (
  <div className="hidden items-center gap-3 lg:flex">
    <a
      href="#signup"
      className="border border-[#8b5e3c] px-6 py-2 text-[#8b5e3c] transition-colors duration-200 hover:bg-[#e8d6c0] hover:text-[#27140b] focus:outline-none"
    >
      Cadastrar
    </a>
    <a
      href="#login"
      className="bg-[#8b5e3c] px-6 py-2 text-white transition-colors duration-200 hover:bg-[#70442a] focus:outline-none"
    >
      Entrar
    </a>
    <FiShoppingCart className="cursor-pointer text-3xl text-gray-800" />
  </div>
);

export default DesktopActions;
