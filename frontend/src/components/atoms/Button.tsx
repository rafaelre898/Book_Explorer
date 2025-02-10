import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      {children}
    </button>
  );
};

export default Button;
