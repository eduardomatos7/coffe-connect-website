import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;
if (!SECRET) throw new Error("JWT_SECRET não definido");

export type JwtPayload = { sub: string; email: string; name: string };

export function signJwt(payload: JwtPayload) {
  const token = jwt.sign(payload, SECRET!, { expiresIn: "1h" });
  return token;
}

export function verifyJwt(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, SECRET) as JwtPayload;
  } catch {
    return null;
  }
}
