import React from "react";

import InputLabel from "@/components/auth/InputLabel";
import BtnSubmit from "@/components/auth/BtnSubmit";
import LogoNoBg from "@/components/auth/LogoNoBg";
import Title from "@/components/auth/Title";
import HasAccount from "@/components/auth/HasAccount";

function Login() {
  return (
    <main className="w-full">
      <div className="flex min-h-screen w-full flex-col items-center justify-start gap-16 bg-[#F0E4DB] md:gap-5">
        <LogoNoBg />
        <div>
          <section className="flex w-full flex-col items-center gap-4">
            <Title title="Bem vindo de Volta!" />
            <form className="w-[calc(100vw-2rem)] rounded-lg bg-white p-4 shadow-md sm:w-md md:w-lg md:p-8">
              <div className="mb-4">
                <InputLabel label="Email" placeholder="Email" type="email" id="email" />
                <InputLabel label="Senha" placeholder="Senha" type="password" id="password" />
              </div>
              <BtnSubmit login />
              <HasAccount signin={false} />
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Login;
