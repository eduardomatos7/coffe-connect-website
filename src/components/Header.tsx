"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import { FiShoppingCart } from "react-icons/fi";

interface NavLink {
  href: string;
  label: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navLinks: NavLink[] = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre Nós" },
    { href: "#specialists", label: "Nossos Especialistas" },
    { href: "#menu", label: "Cardápio" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center focus:ring-2 focus:ring-[#8b5e3c] focus:outline-none"
        >
          <Image src={logo} width={80} height={80} alt="Logo Coffe Connect" />
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation">
          <ul className="hidden lg:flex space-x-8 font-medium text-[#8b5e3c]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-200 hover:text-[#4e2c1e] focus:outline-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#signup"
            className="border border-[#8b5e3c] px-6 py-2 text-[#8b5e3c] hover:bg-[#f5f3f3] focus:outline-none"
          >
            Cadastrar
          </a>
          <a
            href="#login"
            className="bg-[#8b5e3c] px-6 py-2 text-white hover:bg-[#47291b] focus:outline-none"
          >
            Entrar
          </a>
          <FiShoppingCart className="text-gray-800 text-3xl" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 focus:ring-2 focus:ring-[#8b5e3c] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="h-6 w-6 text-[#8b5e3c]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <aside
          id="mobile-menu"
          className="lg:hidden bg-white px-4 py-6 shadow-md"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col space-y-4 font-medium text-[#8b5e3c]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[#4e2c1e] focus:outline-none"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col space-y-3">
              <a
                href="#signup"
                className="border border-[#8b5e3c] px-6 py-2 text-center text-[#8b5e3c] focus:outline-none"
                onClick={toggleMenu}
              >
                Cadastrar
              </a>
              <a
                href="#login"
                className="bg-[#8b5e3c] px-6 py-2 text-center text-white focus:outline-none"
                onClick={toggleMenu}
              >
                Entrar
              </a>
              <FiShoppingCart className="text-gray-800 text-3xl mx-auto" />
            </div>
          </nav>
        </aside>
      )}
    </header>
  );
};

export default Header;
