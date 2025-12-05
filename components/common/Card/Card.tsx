import * as React from "react";

import { cn } from "../utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 p-6",
        className
      )}
      {...props}
    />
  );
}

export { Card };
