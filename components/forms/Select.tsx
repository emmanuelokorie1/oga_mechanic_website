"use client";

import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: (e: any) => void;
  name: string;
  options: Option[];
  placeholder: string;
  error?: string;
  touched?: boolean;
  label?: string;
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  onBlur,
  name,
  options,
  placeholder,
  error,
  touched,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">{label}</label>
      )}
      <div className="relative">
        <button
          type="button"
          name={name}
          onBlur={onBlur} // Important for tracking touched state
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-3 bg-white rounded-lg border focus:ring-1 outline-none transition-all text-left flex items-center justify-between group ${
            touched && error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-200 focus:border-red-500 focus:ring-red-500"
          }`}
        >
          <span className={value ? "text-gray-900" : "text-gray-400"}>
            {value ? options.find((opt) => opt.value === value)?.label : placeholder}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 cursor-pointer transition-colors flex items-center justify-between"
              >
                {option.label}
                {value === option.value && <Check className="w-4 h-4 text-red-600" />}
              </div>
            ))}
          </div>
        )}
        {touched && error && <div className="text-red-500 text-xs mt-1">{error}</div>}
      </div>
    </div>
  );
};

export default Select;
