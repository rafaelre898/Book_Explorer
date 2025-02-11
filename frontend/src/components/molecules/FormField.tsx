import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, id, type = "text", placeholder, onChange, value }) => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  );
};

export default FormField;
