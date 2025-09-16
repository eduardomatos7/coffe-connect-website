"use client";
import React, { createContext, useContext, useState } from "react";

export type AuthUser = { id: string; name: string; email: string } | null;

interface AuthContextValue {
  user: AuthUser;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<AuthUser>>;
  login: (user: AuthUser) => void;
  logout: () => void;
  updateName: (name: string) => void;
  updatePassword: (password: string) => void;
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

  const login = (newUser: AuthUser) => setUser(newUser);

  const logout = () => setUser(null);

  const updateName = (name: string) => {
    if (!user) return;
    setUser({ ...user, name });
  };

  const updatePassword = (password: string) => {
    console.log("Nova senha:", password);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, setUser, login, logout, updateName, updatePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}
