"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  withArrow?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-maroa-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-sm min-h-[40px]",
    md: "px-5 py-2.5 text-base min-h-[44px]",
    lg: "px-7 py-3.5 text-lg min-h-[48px]",
  };

  const variantStyles = {
    primary:
      "bg-maroa-red hover:bg-maroa-red-dark text-maroa-white shadow-sm focus-visible:outline-maroa-red",
    secondary:
      "bg-maroa-white hover:bg-maroa-gray-100 text-maroa-charcoal border border-maroa-charcoal/30 hover:border-maroa-charcoal focus-visible:outline-maroa-charcoal",
    ghost:
      "bg-transparent hover:bg-maroa-gray-100 text-maroa-charcoal focus-visible:outline-maroa-charcoal",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
