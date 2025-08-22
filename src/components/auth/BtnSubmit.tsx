"use client";
import React from "react";

function BtnSubmit({ login }: { login: boolean }) {
  const handleSubmitLogin = () => {
    alert("Logado com sucesso!");
  };
  const handleSubmitRegister = () => {
    alert("Cadastro realizado com sucesso!");
  };
  return (
    <div className="flex items-center justify-center">
      <button
        type="submit"
        onClick={login ? handleSubmitLogin : handleSubmitRegister}
        className="w-fit cursor-pointer rounded-lg bg-[#B2784A] px-10 py-2 text-white transition-colors duration-400 hover:bg-[#70442a] focus:outline-none"
      >
        Cadastrar
      </button>
    </div>
  );
}

export default BtnSubmit;
