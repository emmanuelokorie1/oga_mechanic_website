import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-gray-900">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all placeholder:text-gray-400 resize-none ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-200 focus:border-primary focus:ring-primary"
          } ${className}`}
          {...props}
        />
        {error && typeof error === "string" && (
          <p className="text-sm text-red-500 mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
