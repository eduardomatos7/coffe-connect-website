"use client";

import Image from "next/image";
import logo from "@/public/assets/images/logo.png";

const Logo = () => (
  <a
    href="#home"
    className="flex items-center focus:ring-2 focus:ring-[#8b5e3c] focus:outline-none"
  >
    <Image src={logo} width={80} height={80} alt="Logo Coffe Connect" />
  </a>
);

export default Logo;
