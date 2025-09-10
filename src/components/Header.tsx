"use client";

import { useState } from "react";
import { navLinks } from "@/config/nav";
import { IoBagOutline } from "react-icons/io5";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import DesktopActions from "./DesktopActions";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import CartMenu from "./CartMenu";
import { useCart } from "@/contexts/CartProvider";

const Header = ({ AuthenticatedUser }: { AuthenticatedUser: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const { totalItemsInCart } = useCart();
  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs">
      <div className="flex h-24 items-center justify-between gap-2 px-4 md:px-20">
        <Logo />
        <NavLinks links={navLinks} />
        <DesktopActions
          AuthenticatedUser={AuthenticatedUser}
          toggleCart={toggleCart}
          totalItemsInCart={totalItemsInCart}
        />
        <div className="flex items-center justify-center gap-3 font-medium text-[#8b5e3c] lg:hidden">
          <div className="relative">
            <IoBagOutline
              onClick={() => {
                toggleCart();
                setIsMenuOpen(false);
              }}
              className="cursor-pointer text-2xl text-[#8b5e3c] transition-colors duration-400 hover:text-[#a48974]"
            />
            {totalItemsInCart > 0 && (
              <span className="absolute -top-2 -right-2 items-center justify-center rounded-full bg-red-400 px-[6px] py-[1px] text-[10px] font-semibold text-white shadow">
                {totalItemsInCart}
              </span>
            )}
          </div>
          <MobileMenuButton isOpen={isMenuOpen} toggle={toggleMenu} />
        </div>
      </div>
      <MobileMenu
        links={navLinks}
        toggleMenu={toggleMenu}
        isOpen={isMenuOpen}
        AuthenticatedUser={AuthenticatedUser}
      />
      <CartMenu isOpen={isCartOpen} toggle={toggleCart} />
    </header>
  );
};

export default Header;
