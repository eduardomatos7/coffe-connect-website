import React from "react";

function InputLabel({
  label,
  placeholder,
  type,
  id,
}: {
  label: string;
  placeholder: string;
  type: string;
  id: string;
}) {
  return (
    <>
      <label htmlFor={id} className="mb-1 block text-sm font-bold text-[#B2784A]">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="mb-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-[#8b5e3c] focus:outline-none"
        placeholder={placeholder}
      />
    </>
  );
}

export default InputLabel;
