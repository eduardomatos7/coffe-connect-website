import { signIn } from "@/schemas/authForm";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/database";
import { verifyPassword } from "@/lib/hashPassword";
import { signJwt } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;

  if (typeof email !== "string" || typeof password !== "string")
    return NextResponse.json({ message: "Todos os campos são obrigatórios" }, { status: 400 });

  const parse = signIn.safeParse(body);
  if (!parse.success) return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ message: "Usuário não encontrado!" }, { status: 404 });
  }
  const isValidPassword = await verifyPassword(password, user.password);
  if (!isValidPassword) {
    return NextResponse.json({ message: "Senha incorreta!" }, { status: 401 });
    // para uma segurança maior, seria melhor informar apenas "usuario ou senha incorretos" para os dois casos, mas aqui nao tem nada nao
  }
  const payload = { sub: user.id.toString(), email: user.email, name: user.name! };
  const token = signJwt(payload);

  const response = NextResponse.json(
    { token, user: { id: user.id, name: user.name, email: user.email } },
    { status: 200 }
  );
  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60, // 1h para testes
  });
  return response;
}
