"use client";

import Image from "next/image";
import logo from "@/public/assets/images/logo_coffe_connect.png";
import Link from "next/link";

const Logo = () => (
  <div className="flex h-24 w-full items-center">
    <Link href="/" className="flex h-full items-center">
      <Image
        src={logo}
        width={160}
        height={96}
        alt="Logo Coffe Connect"
        priority
        className="h-full max-h-[80%] w-auto object-contain"
      />
    </Link>
  </div>
);

export default Logo;
