import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  touched?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  touched,
  className = "",
  id,
  type = "text",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className={`w-full px-4 py-3 bg-white rounded-lg border outline-none transition-all placeholder:text-gray-300 ${
            touched && error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          } ${className} ${isPassword ? "pr-12" : ""}`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
          >
            {showPassword ? (
              <EyeOff className="w-6 h-6" />
            ) : (
              <Eye className="w-6 h-6" />
            )}
          </button>
        )}
      </div>
      {touched && error && <div className="text-red-500 text-xs">{error}</div>}
    </div>
  );
};

export default Input;
