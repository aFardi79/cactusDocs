import React from "react";

type InputProps = {
  label?: string;
  name: string;
  value?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function GeneralInput({
  label,
  name,
  value,
  placeholder,
  type = "text",
  onChange,
  error
}: InputProps) {
  return (
    <div className="form-control">
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        name={name}
        type={type}
        value={value}

        placeholder={placeholder}
        onChange={onChange}
        className="input"
      />

      {error && <span className="error">{error}</span>}
    </div>
  );
}
