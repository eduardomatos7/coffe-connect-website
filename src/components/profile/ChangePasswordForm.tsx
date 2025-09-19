"use client";
import { useState } from "react";
import { FiKey, FiChevronRight } from "react-icons/fi";
import { useAuth } from "@/contexts/AuthProvider";

const ChangePasswordForm = () => {
  const { updatePassword } = useAuth();
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = () => {
    if (password.trim()) {
      updatePassword(password);
      setPassword("");
      setSuccessMessage("Senha alterada com sucesso!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-4 text-left text-[#8b5e3c] transition hover:bg-gray-100"
      >
        <div className="flex items-center gap-3">
          <FiKey className="h-5 w-5" />
          <span>Alterar Senha</span>
        </div>
        <FiChevronRight className={`h-5 w-5 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>

      {open && (
        <div className="px-6 pb-4">
          <input
            type="password"
            placeholder="Nova senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border border-gray-300 p-2 focus:border-[#8b5e3c] focus:outline-none"
          />
          {successMessage && <p className="mt-2 text-sm text-green-600">{successMessage}</p>}
          <button
            onClick={handleSubmit}
            className="mt-2 w-full rounded bg-[#8b5e3c] py-2 text-white hover:bg-[#a48974]"
          >
            Salvar
          </button>
        </div>
      )}
    </div>
  );
};

export default ChangePasswordForm;
