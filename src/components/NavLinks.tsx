"use client";

import { IconType } from "react-icons";

interface NavLink {
  href: string;
  label: string;
  icon?: IconType;
}

interface NavLinksProps {
  links: NavLink[];
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, onClick, isMobile }) => (
  <div className="flex min-w-fit items-center lg:mb-0">
    <ul
      className={
        isMobile
          ? "flex flex-col space-y-4 font-medium text-[#8b5e3c]"
          : "hidden space-x-8 font-medium text-[#8b5e3c] lg:flex"
      }
    >
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.href} className="flex items-center gap-2">
            {isMobile && Icon && <Icon className="text-xl text-[#8b5e3c]" />}
            <a
              href={link.href}
              onClick={onClick}
              className="transition-colors duration-200 hover:text-[#4e2c1e] focus:outline-none"
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

export default NavLinks;
