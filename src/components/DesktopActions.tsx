"use client";

import { IoBagOutline } from "react-icons/io5";

const DesktopActions = () => (
  <div className="hidden w-full items-center justify-end gap-3 lg:flex">
    <a
      href="#signup"
      className="rounded-lg border border-[#8b5e3c] px-4 py-1.5 text-[#8b5e3c] transition-colors duration-400 hover:bg-[#e8d6c0] hover:text-[#734726] focus:outline-none"
    >
      Cadastrar
    </a>
    <a
      href="#login"
      className="mr-3 rounded-lg bg-[#8b5e3c] px-4 py-1.5 text-white transition-colors duration-400 hover:bg-[#70442a] focus:outline-none"
    >
      Entrar
    </a>
    <IoBagOutline className="cursor-pointer text-3xl text-[#8b5e3c] transition-colors duration-400 hover:text-[#a48974]" />
  </div>
);

export default DesktopActions;
