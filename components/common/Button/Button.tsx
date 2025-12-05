import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm cursor-pointer font-medium transition-all ease-out disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-linear-to-bl from-primary to-primary-800 text-gray-50 hover:from-primary hover:to-primary shadow-sm",
        secondary:
          "bg-secondary text-secondary-foreground border-2 border-secondary hover:border-gray-300 hover:bg-gray-300 shadow-sm",
        outline:
          "bg-transparent text-secondary-foreground border-2 border-secondary hover:bg-secondary/70",
        destructive: "bg-coral text-white hover:bg-red-500 shadow-sm",
        ghost: "bg-transparent text-muted-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        md: "h-10 px-6 text-base has-[>svg]:px-4",
        lg: "h-11 px-6 text-md font-semibold has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  isLoading = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
  }) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {props.children}
    </button>
  );
}

export { Button, buttonVariants };
