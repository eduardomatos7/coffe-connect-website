"use client";
import React from "react";

interface BtnSubmitProps {
  login: boolean;
  loading?: boolean;
  disabled?: boolean;
}

function BtnSubmit({ login, loading, disabled }: BtnSubmitProps) {
  const label = loading
    ? login
      ? "Entrando..."
      : "Cadastrando..."
    : login
      ? "Entrar"
      : "Cadastrar";
  return (
    <div className="flex items-center justify-center">
      <button
        type="submit"
        disabled={disabled || loading}
        className="w-fit cursor-pointer rounded-lg bg-[#B2784A] px-10 py-2 text-white transition-colors duration-400 hover:bg-[#70442a] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
      >
        {label}
      </button>
    </div>
  );
}

export default BtnSubmit;
