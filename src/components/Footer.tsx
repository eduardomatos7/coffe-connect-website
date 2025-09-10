"use client";

import SocialLinks from "./contact/SocialLinks";
import LogoNoBg from "./auth/LogoNoBg";
import { navLinks } from "@/config/nav";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-[#fefefe] py-8 md:py-12 xl:py-16">
      <div className="mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
          <div className="flex justify-center md:justify-start">
            <LogoNoBg />
          </div>

          <nav className="flex justify-center">
            <ul className="flex flex-col items-center gap-4 font-medium text-[#8b5e3c] md:flex-row md:gap-8 md:max-lg:flex-col">
              {navLinks.map((link) => {
                return (
                  <li key={link.href} className="flex items-center gap-2">
                    <a
                      href={link.href}
                      className="whitespace-nowrap transition-colors duration-200 hover:text-[#4e2c1e]"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex flex-col items-center justify-center gap-4 md:justify-end">
            <SocialLinks />
            <a
              href="#"
              className="flex items-center gap-2 rounded-3xl border border-[#8b5e3c] px-6 py-2 text-[#8b5e3c] transition-colors duration-200 hover:border-[#d9b08c] hover:bg-[#d9b08c] hover:text-[#fff]"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400 md:text-base">
          © {new Date().getFullYear()} Coffee Connect. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
