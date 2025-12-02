import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={`px-4 py-2 rounded-md font-medium shadow-sm hover:shadow-md transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
