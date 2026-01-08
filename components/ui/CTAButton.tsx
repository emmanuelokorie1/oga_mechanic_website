"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  classNameIcon?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

export const CTAButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, CTAButtonProps>(
  (
    {
      text = "Get Started For Free",
      href,
      size = "md",
      className = "",
      classNameIcon = "",
      onClick,
      type = "button",
      disabled,
      variant = "primary",
    },
    ref
  ) => {
    const sizeStyles = {
      sm: {
        container: "gap-2 p-1 pl-3 text-xs",
        iconBox: "p-2",
        iconSize: 18,
      },
      md: {
        container: "gap-4 p-1 pl-4 text-sm",
        iconBox: "p-2.5",
        iconSize: 20,
      },
      lg: {
        container: "gap-4 p-1 pl-4 text-base",
        iconBox: "p-3",
        iconSize: 22,
      },
    };

    const styles = sizeStyles[size];

    const variantStyles = {
      primary: "bg-primary text-white",
      secondary: "bg-white hover:bg-gray-50 text-primary border-2 border-red-100",
    };

    const iconVariantStyles = {
      primary: "text-primary bg-white hover:bg-white",
      secondary: "text-white bg-primary hover:bg-red-700",
    };

    const commonClasses = cn(
      "flex justify-between cursor-pointer items-center transition-all duration-300 rounded-xl font-semibold group hover:scale-105 hover:shadow-lg",
      styles.container,
      variantStyles[variant],
      disabled && "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none bg-gray-400 hover:bg-gray-400",
      className
    );

    if (href) {
      return (
        <Link href={href} className={commonClasses}>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {text}
          </span>
          <div
            className={cn(
              styles.iconBox,
              iconVariantStyles[variant],
              "rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
              classNameIcon
            )}
          >
            <MdArrowOutward
              size={styles.iconSize}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </div>
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={commonClasses}
      >
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {text}
        </span>
        <div
          className={cn(
            styles.iconBox,
            iconVariantStyles[variant],
            "rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
            classNameIcon
          )}
        >
          <MdArrowOutward
            size={styles.iconSize}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </div>
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";