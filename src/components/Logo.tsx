"use client";

import Image from "next/image";
import logo from "@/public/assets/images/logo.png";

const Logo = () => (
  <div className="flex w-full items-center">
    <a href="#home">
      <Image src={logo} width={80} height={80} alt="Logo Coffe Connect" />
    </a>
  </div>
);

export default Logo;
