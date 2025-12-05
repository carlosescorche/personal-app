import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '../utils';

const skeletonVariants = cva(
  "animate-pulse rounded-md",
  {
    variants: {
      variant: {
        default: "bg-secondary",
        muted: "bg-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Skeleton({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof skeletonVariants>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(skeletonVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Skeleton, skeletonVariants };
