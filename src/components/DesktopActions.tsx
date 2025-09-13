"use client";

import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import Profile from "./Profile";

interface DesktopActionsProps {
  AuthenticatedUser: boolean;
  toggleCart: () => void;
  toggleProfile: () => void;
  totalItemsInCart: number;
}

const DesktopActions = ({
  AuthenticatedUser,
  toggleCart,
  toggleProfile,
  totalItemsInCart,
}: DesktopActionsProps) => (
  <div className="hidden w-full items-center justify-end gap-3 lg:flex">
    {AuthenticatedUser ? (
      <Profile toggleProfile={toggleProfile} />
    ) : (
      <>
        <Link
          href="/Register"
          className="rounded-lg border border-[#8b5e3c] px-4 py-1.5 text-[#8b5e3c] transition-colors duration-400 hover:bg-[#e8d6c0] hover:text-[#734726] focus:outline-none"
        >
          Cadastrar
        </Link>
        <Link
          href="/Login"
          className="mr-3 rounded-lg bg-[#8b5e3c] px-4 py-1.5 text-white transition-colors duration-400 hover:bg-[#70442a] focus:outline-none"
        >
          Entrar
        </Link>
      </>
    )}
    <div className="relative">
      <IoBagOutline
        onClick={toggleCart}
        className="cursor-pointer text-3xl text-[#8b5e3c] transition-colors duration-400 hover:text-[#a48974]"
      />
      {totalItemsInCart > 0 && (
        <span className="absolute -top-2 -right-2 items-center justify-center rounded-full bg-red-400 px-2 py-0.5 text-xs font-semibold text-white shadow">
          {totalItemsInCart}
        </span>
      )}
    </div>
  </div>
);

export default DesktopActions;
