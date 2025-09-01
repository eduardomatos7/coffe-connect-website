"use client";

import NavLinks from "./NavLinks";
import Link from "next/link";
import Profile from "./Profile";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  toggleMenu: () => void;
  isOpen: boolean;
  AuthenticatedUser: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  links,
  toggleMenu,
  isOpen,
  AuthenticatedUser,
}) => (
  <aside
    id="mobile-menu"
    aria-hidden={!isOpen}
    className={`overflow-hidden bg-white px-4 shadow-md duration-300 ease-out md:px-20 lg:hidden ${
      isOpen
        ? "max-h-[500px] translate-y-0 py-6 opacity-100"
        : "max-h-0 -translate-y-2 py-0 opacity-0"
    }`}
  >
    <nav aria-label="Mobile navigation" className="flex flex-col">
      {AuthenticatedUser && (
        <div className="mb-5 flex flex-col gap-2">
          <Profile />
        </div>
      )}

      <NavLinks links={links} onClick={toggleMenu} isMobile />

      {!AuthenticatedUser && (
        <div
          className={`mt-5 flex w-full gap-3 transition-opacity duration-200 ${
            isOpen ? "opacity-100 delay-100" : "opacity-0"
          }`}
        >
          <Link
            href="/Register"
            onClick={toggleMenu}
            className="w-full border border-[#8b5e3c] px-6 py-2 text-center text-[#8b5e3c] transition-colors duration-200 hover:bg-[#e8d6c0] hover:text-[#27140b] focus:outline-none"
          >
            Cadastrar
          </Link>
          <Link
            href="/Login"
            className="w-full bg-[#8b5e3c] px-6 py-2 text-center text-white transition-colors duration-200 hover:bg-[#70442a] focus:outline-none"
            onClick={toggleMenu}
          >
            Entrar
          </Link>
        </div>
      )}
    </nav>
  </aside>
);

export default MobileMenu;
