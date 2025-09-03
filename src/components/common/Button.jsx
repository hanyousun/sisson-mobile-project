import React from "react";
import { cn } from "@/lib/utils/cn";

function Button({ variant = "default", size = "default", className = "", children, ...props }) {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    primary:
      "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    outline:
      "border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  };

  const sizes = {
    icon: "size-9",
    default: "h-9 px-4 py-2",
    sm: "h-7 rounded-md gap-1.5 px-3 text-sm",
    lg: "h-10 rounded-md px-6",
    sideIcon: "size-12",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
