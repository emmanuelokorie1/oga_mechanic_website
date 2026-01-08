import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed",
          // Size variations
          size === "sm" && "px-4 py-2 text-xs",
          size === "md" && "px-6 py-3 text-sm",
          size === "lg" && "px-8 py-4 text-base",
          
          // Variant variations
          variant === "primary" && 
            "bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]",
          variant === "secondary" && 
            "bg-zinc-800 text-white hover:bg-zinc-700",
          variant === "outline" && 
            "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
          variant === "ghost" && 
            "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
            
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
