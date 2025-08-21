import { signUp } from "@/schemas/authForm";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/database";
import { hashPassword } from "@/lib/hashPassword";
import { signJwt } from "@/lib/jwt";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { name, email, password } = body;
  if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string")
    return NextResponse.json({ message: "Todos os campos são obrigatórios" }, { status: 400 });
  const parse = signUp.safeParse(body);
  if (!parse.success) return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });

  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) return NextResponse.json({ message: "Usuário já cadastrado!" }, { status: 409 });

  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      phone: body.phone,
    },
  });
  if (!user) {
    return NextResponse.json({ message: "Erro ao criar usuário!" }, { status: 500 });
  }
  const payload = { sub: user.id.toString(), email: user.email, name: user.name! };
  const token = signJwt(payload);

  const userResponse = { ...user, password: undefined };

  return NextResponse.json({ userResponse, token }, { status: 201 });
};
