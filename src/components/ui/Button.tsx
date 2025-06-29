import React from "react";
import clsx from "clsx"; // opcional, para combinar clases

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyle = "px-4 py-2 rounded font-semibold transition cursor-pointer";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={clsx(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
