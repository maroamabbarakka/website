import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "red" | "dark" | "gray" | "outline";
  className?: string;
}

export function Badge({ children, variant = "gray", className = "" }: BadgeProps) {
  const variantStyles = {
    red: "bg-maroa-red/10 text-maroa-red border-maroa-red/20",
    dark: "bg-maroa-charcoal text-maroa-white border-transparent",
    gray: "bg-maroa-gray-100 text-maroa-gray-700 border-maroa-gray-300",
    outline: "bg-transparent text-maroa-charcoal border-maroa-gray-300",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
