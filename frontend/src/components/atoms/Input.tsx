import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const Input: React.FC<InputProps> = ({ id, ...props }) => {
  return <input id={id} {...props} className="border p-2 rounded w-full" />;
};

export default Input;
