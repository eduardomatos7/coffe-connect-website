"use client";
import React, { createContext, useContext, useState } from "react";

export type AuthUser = { id: string; name: string; email: string } | null;

interface AuthContextValue {
  user: AuthUser;
  setUser: React.Dispatch<React.SetStateAction<AuthUser>>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({
  initialUser,
  children,
}: {
  initialUser: AuthUser;
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AuthUser>(initialUser);
  const [loading] = useState(false);

  return <AuthContext.Provider value={{ user, setUser, loading }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}
