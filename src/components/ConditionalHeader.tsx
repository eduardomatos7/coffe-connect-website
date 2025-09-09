"use client";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { useAuth } from "../contexts/AuthProvider";

// Rotas onde o Header não deve aparecer
const HIDDEN_HEADER_PATHS = ["/login", "/Login", "/register", "/Register"];

export default function ConditionalHeader() {
  const pathname = usePathname();
  const { user } = useAuth();
  if (pathname && HIDDEN_HEADER_PATHS.includes(pathname)) return null;

  return <Header AuthenticatedUser={!!user} />;
}
