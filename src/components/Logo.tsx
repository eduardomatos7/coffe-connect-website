"use client";

import Image from "next/image";
import logo from "@/public/assets/images/logo.png";

const Logo = () => (
  <a
    href="#home"
    className="flex items-center"
  >
    <Image src={logo} width={80} height={80} alt="Logo Coffe Connect" />
  </a>
);

export default Logo;
