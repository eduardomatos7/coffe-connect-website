import Link from "next/link";
import React from "react";

function HasAccount({ signin }: { signin?: boolean }) {
  return (
    <p className="mt-4 text-center text-sm text-gray-600">
      Já tem uma conta?{" "}
      <Link
        href={signin ? "/Login" : "/Register"}
        className="font-semibold text-[#8b5e3c] hover:underline"
      >
        {signin ? "Entrar" : "Cadastre-se"}
      </Link>
    </p>
  );
}

export default HasAccount;
