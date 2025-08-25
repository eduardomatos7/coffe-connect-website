"use client";
import Header from "./Header";
import { usePathname } from "next/navigation";

// Rotas onde o Header não deve aparecer
const HIDDEN_HEADER_PATHS = ["/login", "/Login", "/register", "/Register"];

export default function ConditionalHeader() {
  const pathname = usePathname();
  if (HIDDEN_HEADER_PATHS.includes(pathname)) return null;
  return <Header />;
}
