"use client";
import { useState } from "react";
import { FiUser, FiChevronRight } from "react-icons/fi";
import { useAuth } from "@/contexts/AuthProvider";

const ChangeNameForm = () => {
  const { updateName } = useAuth();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      updateName(name);
      setName("");
      setOpen(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-4 text-left text-[#8b5e3c] transition hover:bg-gray-100"
      >
        <div className="flex items-center gap-3">
          <FiUser className="h-5 w-5" />
          <span>Alterar Nome</span>
        </div>
        <FiChevronRight className={`h-5 w-5 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>

      {open && (
        <div className="px-6 pb-4">
          <input
            type="text"
            placeholder="Novo nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border border-gray-300 p-2 focus:border-[#8b5e3c] focus:outline-none"
          />
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

export default ChangeNameForm;
