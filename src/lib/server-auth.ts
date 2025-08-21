import { cookies } from "next/headers";
import { verifyJwt } from "./jwt";

export async function getAuthUser() {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  if (!token) return null;
  const payload = verifyJwt(token);
  return payload;
}
