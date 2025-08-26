import { signIn, signUp } from "@/schemas/authForm";
import z from "zod";

export type loginSchemaType = z.infer<typeof signIn>;
export type registerSchemaType = z.infer<typeof signUp>;
