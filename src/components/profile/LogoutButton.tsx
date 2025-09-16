"use client";
import { useState } from "react";
import { FiLogOut, FiChevronRight } from "react-icons/fi";
import { useAuth } from "@/contexts/AuthProvider";

const LogoutButton = () => {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-4 text-left text-red-500 transition hover:bg-gray-100"
      >
        <div className="flex items-center gap-3">
          <FiLogOut className="h-5 w-5" />
          <span>Sair</span>
        </div>
        <FiChevronRight className={`h-5 w-5 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>

      {open && (
        <div className="px-6 pb-4 text-sm text-gray-600">
          <p>Tem certeza que deseja sair?</p>
          <button
            onClick={handleLogout}
            className="mt-2 w-full rounded bg-red-500 py-2 text-white hover:bg-red-600"
          >
            Confirmar
          </button>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
