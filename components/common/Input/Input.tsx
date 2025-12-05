"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Eye, EyeOff } from 'lucide-react';

import { cn } from '../utils';

const inputVariants = cva(
  "w-full h-10 px-3.5 py-2.5 bg-white border-2 rounded-lg text-[0.875rem] text-current placeholder:text-gray-500 transition-all duration-200 focus:outline-none disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        default: "border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10",
      },
      error: {
        true: "border-danger focus:border-danger focus:ring-4 focus:ring-danger/10",
        false: "",
      },
      success: {
        true: "border-success focus:border-success focus:ring-4 focus:ring-success/10",
        false: "",
      },
      hasIcon: {
        true: "pr-10",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      error: false,
      success: false,
      hasIcon: false,
    },
  }
);

interface InputProps extends React.ComponentProps<"input">, Omit<VariantProps<typeof inputVariants>, 'error' | 'success'> {
  label?: string;
  error?: string;
  helperText?: string;
  success?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, helperText, success, variant, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;
    const hasError = !!error;
    const hasSuccess = success && !hasError;
    const hasIcon = isPassword || hasError || hasSuccess;

    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-[0.875rem] font-medium text-text">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            data-slot="input"
            className={cn(
              inputVariants({ 
                variant, 
                error: hasError, 
                success: hasSuccess, 
                hasIcon 
              }),
              className
            )}
            aria-invalid={hasError}
            {...props}
          />
          
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-text transition-colors"
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          )}
          
        </div>
        
        {error && (
          <p className="mt-1.5 text-[0.8125rem] text-danger flex items-center gap-1">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p className="mt-1.5 text-[0.8125rem] text-gray-600">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
