"use client";
import React from "react";
import { useAuth } from "@/contexts/AuthProvider";
import ChangeNameForm from "./profile/ChangeNameForm";
import ChangePasswordForm from "./profile/ChangePasswordForm";
import LogoutButton from "./profile/LogoutButton";

const ProfileMenu = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => {
  const { user } = useAuth();
  if (!user || !user.name) return null;
  const firstLetter = user.name.charAt(0).toUpperCase();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={toggle}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[90%] transform bg-white shadow-xl transition-transform duration-300 sm:w-md ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 p-4 shadow-md">
          <h2 className="text-lg font-semibold text-[#8b5e3c]">Meu Perfil</h2>
          <button
            onClick={toggle}
            className="cursor-pointer text-xl text-[#8b5e3c] hover:text-[#a48974]"
          >
            ✕
          </button>
        </div>

        <div className="flex items-center gap-4 p-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8d6c0] text-lg font-semibold text-[#8b5e3c]">
            {firstLetter}
          </div>
          <div className="flex flex-col">
            <span className="text-base font-medium text-[#8b5e3c]">{user.name}</span>
            <span className="text-sm text-gray-500">{user.email}</span>
          </div>
        </div>

        <div className="flex flex-col divide-y text-[#8b5e3c]">
          <ChangeNameForm />
          <ChangePasswordForm />
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
