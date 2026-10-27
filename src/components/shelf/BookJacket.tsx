import type { ShelfEntry } from "@/constants/collections";
import { cn } from "@/lib/utils";

import { shelfTones } from "./shelfTones";

export function BookJacket({ entry }: { entry: ShelfEntry }) {
  return (
    <div
      className={cn(
        "relative flex min-h-64 flex-col rounded-l-xs rounded-r-md pt-6 pr-4 pb-6 pl-6 text-sheet shadow-book transition-transform duration-300 group-hover/open:-translate-y-2 group-hover/open:-rotate-2",
        "before:pointer-events-none before:absolute before:inset-y-2.5 before:right-2 before:left-4 before:border before:border-sheet/40",
        "md:min-h-82 md:pt-7.5 md:pr-5.5 md:pb-7.5 md:pl-7.5 md:before:inset-y-4 md:before:right-4 md:before:left-6",
        "lg:min-h-89 lg:pr-7 lg:pl-8.5",
        shelfTones[entry.color],
      )}
    >
      <span className="text-xs tracking-wide md:tracking-widest">
        THE READING SHELF
      </span>
      <h2 className="my-auto py-6 text-2xl leading-tight font-normal tracking-tight wrap-anywhere md:py-9 md:text-3xl lg:text-4xl">
        {entry.title}
      </h2>
      <span className="text-xs tracking-wide">{entry.creator}</span>
    </div>
  );
}
