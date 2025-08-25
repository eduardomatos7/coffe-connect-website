import React, { forwardRef } from "react";

interface InputLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  id: string;
  error?: string;
  icon?: React.ReactNode;
}

const InputLabel = forwardRef<HTMLInputElement, InputLabelProps>(
  ({ placeholder, type, id, error, icon, ...rest }, ref) => {
    return (
      <div className={` `}>
        <div
          className={`mb-3 flex items-center justify-center rounded-lg border bg-white py-2.5 ${
            error
              ? "border-red-500 focus:border-red-600"
              : "border-transparent focus:border-[#8b5e3c]"
          }`}
        >
          <span className="px-3">{icon}</span>
          <input
            ref={ref}
            type={type}
            id={id}
            className="w-full border-none bg-white placeholder:text-[#87705E] focus:outline-none"
            placeholder={placeholder}
            color="#87705E"
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            {...rest}
          />
        </div>
        {error && (
          <p id={`${id}-error`} className="-mt-2.5 mb-2 text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputLabel.displayName = "InputLabel";

export default InputLabel;
