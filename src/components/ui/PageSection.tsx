import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function PageSection({ id, className, children }: PageSectionProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-5xl scroll-mt-10 pb-16 md:pb-20", className)}
    >
      {children}
    </section>
  );
}
