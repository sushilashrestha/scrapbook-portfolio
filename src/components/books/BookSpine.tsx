import type { Book } from "@/constants/books";
import { cn } from "@/lib/utils";

import { bookTones } from "./bookTones";

export function BookSpine({
  book,
  className,
}: {
  book: Book;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center gap-2 rounded-t-xs px-1 pt-3 pb-7 text-sheet shadow-book",
        "before:absolute before:inset-x-0 before:top-1.5 before:h-1 before:border-y before:border-sheet/35",
        "after:absolute after:inset-x-0 after:bottom-2.5 after:h-1.5 after:border-y after:border-sheet/35",
        bookTones[book.color],
        className,
      )}
    >
      {book.volume && (
        <span className="rounded-full border border-sheet/50 px-1 text-xs leading-tight">
          {book.volume}
        </span>
      )}
      <span className="min-h-0 flex-1 rotate-180 overflow-hidden text-center font-display text-xs leading-tight [writing-mode:vertical-rl]">
        {book.title}
      </span>
    </div>
  );
}
