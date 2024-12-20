import React from "react";

const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <button
      className="bg-green h-12 rounded-lg text-base text-white font-semibold p-4 flex items-center"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
