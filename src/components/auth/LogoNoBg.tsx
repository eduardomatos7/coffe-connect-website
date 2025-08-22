import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/assets/images/logo_coffe_connect.png";

function LogoNoBg() {
  return (
    <div className="flex w-30 items-center justify-center lg:w-40">
      <Link href="/">
        <Image src={logo} width={250} height={250} alt="Logo Coffe Connect sem Background" />
      </Link>
    </div>
  );
}

export default LogoNoBg;
