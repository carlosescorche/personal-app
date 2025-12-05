import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from '../utils';

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        primary:
          "bg-linear-to-bl from-primary to-primary-600 text-gray-50 border-transparent [a&]:hover:from-primary [a&]:hover:to-primary",
        accent:
          "bg-accent text-primary border-2 border-accent [a&]:hover:border-primary [a&]:hover:text-primary-800",
        secondary:
          "bg-secondary text-secondary-foreground border-2 border-secondary [a&]:hover:bg-gray-50 [a&]:hover:border-secondary",
        outline:
          "bg-transparent text-primary border-2 border-primary [a&]:hover:bg-primary-50",
        destructive:
          "bg-coral text-white border-transparent [a&]:hover:bg-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
