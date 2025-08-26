"use client";

import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import Profile from "./Profile";

const DesktopActions = ({ AuthenticatedUser }: { AuthenticatedUser: boolean }) => (
  <div className="hidden w-full items-center justify-end gap-3 lg:flex">
    {AuthenticatedUser ? (
      <Profile />
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
    <IoBagOutline className="cursor-pointer text-3xl text-[#8b5e3c] transition-colors duration-400 hover:text-[#a48974]" />
  </div>
);

export default DesktopActions;
