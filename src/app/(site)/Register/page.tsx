import React from "react";

import InputLabel from "@/components/auth/InputLabel";
import BtnSubmit from "@/components/auth/BtnSubmit";
import LogoNoBg from "@/components/auth/LogoNoBg";
import Title from "@/components/auth/Title";
import HasAccount from "@/components/auth/HasAccount";

function Register() {
  return (
    <main className="w-full">
      <div className="flex min-h-screen w-full flex-col items-center justify-start gap-2 bg-[#F0E4DB]">
        <LogoNoBg />
        <div>
          <section className="flex w-full flex-col items-center gap-2">
            <Title title="Cadastrar" />
            <form className="w-[calc(100vw-2rem)] rounded-lg bg-white p-4 shadow-md md:w-lg md:p-8">
              <div className="mb-4">
                <InputLabel
                  label="Nome Completo"
                  placeholder="Nome Completo"
                  type="text"
                  id="name"
                />
                <InputLabel label="Email" placeholder="Email" type="email" id="email" />
                <InputLabel label="Telefone" placeholder="Telefone" type="text" id="phone" />
                <InputLabel label="Senha" placeholder="Senha" type="password" id="password" />
              </div>
              <BtnSubmit login={false} />
              <HasAccount signin />
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Register;
