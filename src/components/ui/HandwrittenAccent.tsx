import type { ReactNode } from "react";

export function HandwrittenAccent({ children }: { children: ReactNode }) {
  return (
    <span className="font-hand text-[1.15em] font-medium tracking-tight whitespace-nowrap text-plum">
      {children}
    </span>
  );
}
