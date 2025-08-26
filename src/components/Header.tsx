"use client";

import { useState } from "react";
import { navLinks } from "@/config/nav";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import DesktopActions from "./DesktopActions";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import { IoBagOutline } from "react-icons/io5";
import Profile from "./Profile";

const Header = ({ AuthenticatedUser }: { AuthenticatedUser: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex h-24 items-center justify-between gap-2 px-4 md:px-20">
        <Logo />
        <NavLinks links={navLinks} />
        <DesktopActions AuthenticatedUser={AuthenticatedUser} />
        <div className="flex items-center justify-center gap-3 font-medium text-[#8b5e3c] lg:hidden">
          {AuthenticatedUser && <Profile />}
          <IoBagOutline className="cursor-pointer text-2xl text-[#8b5e3c] transition-colors duration-400 hover:text-[#a48974]" />
          <MobileMenuButton isOpen={isMenuOpen} toggle={toggleMenu} />
        </div>
      </div>
      <MobileMenu
        links={navLinks}
        toggleMenu={toggleMenu}
        isOpen={isMenuOpen}
        AuthenticatedUser={AuthenticatedUser}
      />
    </header>
  );
};

export default Header;
