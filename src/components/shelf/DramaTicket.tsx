import type { ShelfEntry } from "@/constants/collections";
import { cn } from "@/lib/utils";

import { shelfTones } from "./shelfTones";

export function DramaTicket({ entry }: { entry: ShelfEntry }) {
  return (
    <div
      className={cn(
        "relative flex min-h-70 -rotate-2 flex-col justify-between border-4 border-sheet px-4 py-5 text-sheet shadow-md outline outline-line transition-transform duration-300 group-even/item:rotate-2 group-hover/open:-translate-y-1 group-hover/open:rotate-0",
        "md:min-h-84 md:border-8 md:p-5 lg:p-7",
        shelfTones[entry.color],
      )}
    >
      <span className="text-xs tracking-widest">SUSHI&apos;S WATCH DIARY</span>
      <h2 className="py-8 text-2xl leading-tight font-normal tracking-tight md:text-3xl lg:text-4xl">
        {entry.title}
      </h2>
      <span className="text-xs tracking-wide">{entry.creator}</span>
      <span className="mt-6 border-t border-dashed border-sheet/45 pt-5 text-xs tracking-widest">
        ADMIT ONE / A NEW STORY
      </span>
    </div>
  );
}
