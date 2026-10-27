import type { ReactNode } from "react";

type JourneyEntryProps = {
  title: string;
  when: string;
  children: ReactNode;
};

export function JourneyEntry({ title, when, children }: JourneyEntryProps) {
  return (
    <article className="mb-8">
      <span className="text-xs tracking-wider text-muted uppercase">
        {when.replaceAll("–", "-")}
      </span>
      <h4 className="mt-1 mb-0.5 text-base font-semibold">{title}</h4>
      {children}
    </article>
  );
}
