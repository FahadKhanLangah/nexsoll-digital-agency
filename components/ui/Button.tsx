import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`cursor-pointer rounded duration-200 hover:opacity-65 transition-all px-3 py-1.5 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
