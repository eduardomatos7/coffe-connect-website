import React from "react";

function Title({ title }: { title: string }) {
  return <h1 className="mb-2 text-3xl font-bold text-[#B2784A] md:text-4xl">{title}</h1>;
}

export default Title;
