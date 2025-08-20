"use client";

import { useState } from "react";
import { navLinks } from "@/config/nav";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import DesktopActions from "./DesktopActions";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Logo />
        <NavLinks links={navLinks} />
        <DesktopActions />
        <MobileMenuButton isOpen={isMenuOpen} toggle={toggleMenu} />
      </div>

      {isMenuOpen && <MobileMenu links={navLinks} toggleMenu={toggleMenu} />}
    </header>
  );
};

export default Header;
