"use client";
import React, { useState } from "react";
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
import { useAuth } from "@/components/providers/AuthProvider";
import { toast } from "react-toastify";
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
  const { setUser } = useAuth();

  const [loading, setLoading] = useState(false);
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const onSubmit = async (data: loginSchemaType) => {
    setLoading(true);
    toast.info("Autenticando...", { toastId: "login-loading", autoClose: false });
    const start = Date.now();
    const result = await signInUser(data);
    const elapsed = Date.now() - start;
    const min = 800;
    if (elapsed < min) await delay(min - elapsed);
    toast.dismiss("login-loading");
    if (result.ok) {
      toast.success("Login realizado com sucesso!");
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
      toast.error(result.message || "Falha no login");
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
              <BtnSubmit login disabled={loading} loading={loading} />
              <HasAccount signin={false} />
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Login;
