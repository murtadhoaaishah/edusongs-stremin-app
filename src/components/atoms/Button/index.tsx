import React from "react";
type ButtonProps = {
  label: string;
  outlined?: boolean;
  // variant?: "outlined" | "filled";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ label, outlined, ...props }: ButtonProps) => {
  return (
    <button
      className={`h-12 rounded-lg text-base font-semibold p-4 flex items-center ${
        outlined ? "bg-red border text-black" : "bg-green text-white"
      }`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
