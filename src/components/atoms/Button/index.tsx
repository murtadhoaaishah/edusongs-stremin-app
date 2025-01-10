import React from 'react';

const Button = ({
  label,
  ...props
}: { label: string } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      className="bg-green h-12 rounded-lg text-base text-white font-semibold p-4 flex items-center"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
