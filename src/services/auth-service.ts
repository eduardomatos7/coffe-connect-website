"use client";
import { loginSchemaType, registerSchemaType } from "@/types/auth.types";
import axios from "axios";
import api from "./api";

export type SignInResult =
  | { ok: true; token?: string; user?: { id: number; name: string | null; email: string } }
  | { ok: false; status: number; message: string };

export async function signInUser({ email, password }: loginSchemaType): Promise<SignInResult> {
  try {
    const response = await api.post("/auth/signin", { email, password });
    return { ok: true, token: response.data?.token, user: response.data?.user };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const status = err.response?.status ?? 500;
      type ErrorPayload = { message?: string; error?: string } | undefined;
      const payload: ErrorPayload = err.response?.data as unknown as ErrorPayload;
      const message = payload?.message || payload?.error || err.message || "Erro ao autenticar";
      return { ok: false, status, message };
    }
    return { ok: false, status: 500, message: "Erro inesperado" };
  }
}

export async function signUpUser(data: registerSchemaType): Promise<SignInResult> {
  try {
    const response = await api.post("/auth/signup", data);
    return { ok: true, token: response.data?.token, user: response.data?.user };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const status = err.response?.status ?? 500;
      type ErrorPayload = { message?: string; error?: string } | undefined;
      const payload: ErrorPayload = err.response?.data as unknown as ErrorPayload;
      const message = payload?.message || payload?.error || err.message || "Erro ao registrar";
      return { ok: false, status, message };
    }
    return { ok: false, status: 500, message: "Erro inesperado" };
  }
}
