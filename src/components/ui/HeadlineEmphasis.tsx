import type { ReactNode } from "react";

export function HeadlineEmphasis({ children }: { children: ReactNode }) {
  return (
    <em className="relative text-plum italic after:absolute after:inset-x-0 after:-bottom-1 after:h-1.5 after:-rotate-3 after:rounded-[50%] after:border-b after:border-plum/60">
      {children}
    </em>
  );
}
