import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
}

const buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50",
  ghost: "bg-transparent hover:bg-blue-50 text-blue-600",
  link: "underline text-blue-600 hover:text-blue-800 bg-transparent p-0 h-auto min-w-0"
};

const sizeVariants = {
  default: "px-4 py-2 text-base",
  sm: "px-3 py-1 text-sm",
  lg: "px-6 py-3 text-lg"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium",
          buttonVariants[variant],
          sizeVariants[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
