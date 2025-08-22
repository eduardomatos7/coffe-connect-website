"use client";

import NavLinks from "./NavLinks";
import Link from "next/link";

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
    <nav aria-label="Mobile navigation" className="container mx-auto">
      <NavLinks links={links} onClick={toggleMenu} isMobile />

      <div className="mt-6 flex flex-col space-y-3">
        <Link
          href="/Register"
          onClick={toggleMenu}
          className="border border-[#8b5e3c] px-6 py-2 text-center text-[#8b5e3c] transition-colors duration-200 hover:bg-[#e8d6c0] hover:text-[#27140b] focus:outline-none"
        >
          Cadastrar
        </Link>
        <Link
          href="/Login"
          className="bg-[#8b5e3c] px-6 py-2 text-center text-white transition-colors duration-200 hover:bg-[#70442a] focus:outline-none"
          onClick={toggleMenu}
        >
          Entrar
        </Link>
      </div>
    </nav>
  </aside>
);

export default MobileMenu;
