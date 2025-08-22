"use client";

import { IoBagOutline } from "react-icons/io5";

interface NavLink {
  href: string;
  label: string;
}

interface NavLinksProps {
  links: NavLink[];
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, onClick, isMobile }) => (
  <div className="flex min-w-fit items-center pr-7 md:justify-center">
    <ul
      className={
        isMobile
          ? "flex flex-col space-y-4 font-medium text-[#8b5e3c]"
          : "hidden space-x-8 font-medium text-[#8b5e3c] lg:flex"
      }
    >
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={onClick}
            className="transition-colors duration-200 hover:text-[#4e2c1e] focus:outline-none"
          >
            {link.label}
          </a>
        </li>
      ))}
      <div className="flex items-center justify-start gap-2 font-medium text-[#8b5e3c] md:hidden">
        Minha sacola
        <IoBagOutline className="cursor-pointer text-xl text-[#8b5e3c] transition-colors duration-400 hover:text-[#a48974]" />
      </div>
    </ul>
  </div>
);

export default NavLinks;
