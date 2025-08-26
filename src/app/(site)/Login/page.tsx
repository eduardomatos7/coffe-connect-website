"use client";
import React from "react";
import InputLabel from "@/components/auth/InputLabel";
import BtnSubmit from "@/components/auth/BtnSubmit";
import Title from "@/components/auth/Title";
import HasAccount from "@/components/auth/HasAccount";
import { useForm } from "react-hook-form";
import { loginSchemaType } from "@/types/auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "@/schemas/authForm";
import Logo from "@/components/Logo";
import { MdLockOutline, MdOutlineMail } from "react-icons/md";
import { signInUser } from "@/services/auth-service";
import { useRouter } from "next/navigation";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(signIn),
    mode: "onSubmit",
  });

  const router = useRouter();

  const onSubmit = async (data: loginSchemaType) => {
    const result = await signInUser(data);
    if (result.ok) {
      router.push("/");
    } else {
      alert(`Erro de login: ${result.message}`);
    }
  };
  return (
    <main className="w-full">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-16 bg-[#F0E4DB] md:gap-5">
        <div className="absolute top-4 md:top-8 lg:top-3 lg:right-4 2xl:right-auto">
          <Logo />
        </div>
        <div>
          <section className="flex w-full flex-col items-center">
            <Title title="Bem vindo de Volta!" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-[calc(100vw-2rem)] flex-col items-center pt-8 md:w-lg md:px-8"
            >
              <div className="mb-5 w-full">
                <InputLabel
                  placeholder="Email"
                  type="email"
                  id="email"
                  icon={<MdOutlineMail size={20} color="#87705E" />}
                  error={errors.email?.message}
                  {...register("email")}
                />
                <InputLabel
                  placeholder="Senha"
                  type="password"
                  id="password"
                  icon={<MdLockOutline size={20} color="#87705E" />}
                  error={errors.password?.message}
                  {...register("password")}
                />
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
