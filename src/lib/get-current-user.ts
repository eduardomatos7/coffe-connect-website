import { cookies } from "next/headers";
import { verifyJwt } from "./jwt";
import { prisma } from "../../prisma/database";

export async function getCurrentUser() {
  // faz o fetch nunca ser cacheado entre usuarios
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;
  const payload = verifyJwt(token);
  if (!payload) return null;
  const user = await prisma.user.findUnique({
    where: { id: Number(payload.sub) },
    select: { id: true, name: true, email: true },
  });
  if (!user) return null;
  return { id: String(user.id), name: user.name ?? "", email: user.email };
}
