import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
}

export function Card({ children, hoverable = true, className = "", ...props }: CardProps) {
  return (
    <div
      className={`bg-maroa-white border border-maroa-gray-300/80 rounded-maroa-md p-6 lg:p-8 shadow-card ${
        hoverable ? "hover-lift" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
