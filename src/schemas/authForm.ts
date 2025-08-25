import z from "zod";

export const signIn = z.object({
  email: z.string().min(1, "Campo obrigatório").email("Email inválido"),
  password: z
    .string()
    .min(1, "Campo obrigatório")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export const signUp = z.object({
  name: z.string().min(1, "O nome é obrigatório").min(5, "Digite seu nome completo"),
  email: z.string().min(1, "Campo obrigatório").email("Email inválido"),
  password: z
    .string()
    .min(1, "Campo obrigatório")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  phone: z.string().optional(),
});
