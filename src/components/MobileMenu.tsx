"use client";

import { FiShoppingCart } from "react-icons/fi";
import NavLinks from "./NavLinks";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links, toggleMenu }) => (
  <aside id="mobile-menu" className="bg-white px-4 py-6 shadow-md lg:hidden">
    <nav aria-label="Mobile navigation">
      <NavLinks links={links} onClick={toggleMenu} isMobile />

      <div className="mt-6 flex flex-col space-y-3">
        <a
          href="#signup"
          className="border border-[#8b5e3c] px-6 py-2 text-[#8b5e3c] transition-colors duration-200 hover:bg-[#e8d6c0] hover:text-[#27140b] focus:outline-none"
          onClick={toggleMenu}
        >
          Cadastrar
        </a>
        <a
          href="#login"
          className="bg-[#8b5e3c] px-6 py-2 text-white transition-colors duration-200 hover:bg-[#70442a] focus:outline-none"
          onClick={toggleMenu}
        >
          Entrar
        </a>
        <FiShoppingCart className="mx-auto text-3xl text-gray-800 cursor-pointer" />
      </div>
    </nav>
  </aside>
);

export default MobileMenu;
