import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h2 className={cn("max-w-2xl text-4xl leading-tight", className)}>
      {children}
    </h2>
  );
}
