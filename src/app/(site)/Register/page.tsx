"use client";
import React, { useState } from "react";
import InputLabel from "@/components/auth/InputLabel";
import BtnSubmit from "@/components/auth/BtnSubmit";
import Title from "@/components/auth/Title";
import HasAccount from "@/components/auth/HasAccount";
import { useForm } from "react-hook-form";
import { registerSchemaType } from "@/types/auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "@/schemas/authForm";
import { signUpUser } from "@/services/auth-service";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { toast } from "react-toastify";
import Logo from "@/components/Logo";
import { FiUser } from "react-icons/fi";
import { MdLockOutline, MdOutlineLocalPhone, MdOutlineMail } from "react-icons/md";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerSchemaType>({
    resolver: zodResolver(signUp),
    mode: "onSubmit",
  });

  const router = useRouter();
  const { setUser } = useAuth();

  const [loading, setLoading] = useState(false);
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const onSubmit = async (data: registerSchemaType) => {
    setLoading(true);
    toast.info("Registrando...", { toastId: "signup-loading", autoClose: false });
    const start = Date.now();
    const result = await signUpUser(data);
    const elapsed = Date.now() - start;
    const min = 900;
    if (elapsed < min) await delay(min - elapsed);
    toast.dismiss("signup-loading");
    if (result.ok) {
      toast.success("Cadastro realizado!");
      if (result.user) {
        setUser({
          id: String(result.user.id),
          name: result.user.name ?? "",
          email: result.user.email,
        });
      }
      router.replace("/");
      router.refresh();
    } else {
      toast.error(result.message || "Falha no cadastro");
    }
    setLoading(false);
  };
  return (
    <main className="w-full">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-16 bg-[#F0E4DB] md:gap-5">
        <div className="absolute top-4 md:top-8 lg:top-3 lg:right-4 2xl:right-auto">
          <Logo />
        </div>
        <div>
          <section className="flex w-full flex-col items-center">
            <Title title="Cadastrar" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-[calc(100vw-2rem)] flex-col items-center pt-8 md:w-lg md:px-8"
            >
              <div className="mb-5 w-full">
                <InputLabel
                  placeholder="Nome Completo"
                  type="text"
                  id="name"
                  icon={<FiUser size={20} color="#87705E" />}
                  error={errors.name?.message}
                  {...register("name")}
                />
                <InputLabel
                  placeholder="Email"
                  type="email"
                  id="email"
                  icon={<MdOutlineMail size={20} color="#87705E" />}
                  error={errors.email?.message}
                  {...register("email")}
                />
                <InputLabel
                  placeholder="Telefone"
                  type="text"
                  id="phone"
                  icon={<MdOutlineLocalPhone size={20} color="#87705E" />}
                  error={errors.phone?.message}
                  {...register("phone")}
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
              <BtnSubmit login={false} disabled={loading} loading={loading} />
              <HasAccount signin />
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Register;
