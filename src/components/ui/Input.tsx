import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder: string;
}

const Input = ({ label, className, ...props }: InputProps) => {
  const baseInputStyle =
    "border border-gray-300 w-full rounded px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500 text-black";
  const labelStyle = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="mb-4">
      <label htmlFor={props.id} className={labelStyle}>
        {label}
      </label>
      <input className={clsx(baseInputStyle, className)} {...props} />
    </div>
  );
};

export default Input;
