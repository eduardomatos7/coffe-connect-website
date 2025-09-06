import React from "react";

function Title() {
  return (
    <h1 className="relative mx-auto mt-12 flex w-full max-w-6xl items-center justify-center gap-4 px-4 text-center text-3xl font-bold tracking-wide text-[#f5e4d6] drop-shadow-sm md:text-4xl lg:text-5xl 2xl:text-6xl">
      <span
        className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#d9b08c]/60 to-transparent md:inline-block"
        aria-hidden="true"
      />

      <span>
        <span className="hidden sm:inline">Nosso</span>{" "}
        <span className="text-[#d9b08c]">Cardápio</span>
      </span>

      <span
        className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#d9b08c]/60 to-transparent md:inline-block"
        aria-hidden="true"
      />
    </h1>
  );
}

export default Title;
