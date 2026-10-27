import type { MouseEvent } from "react";

import type { ShelfEntry } from "@/constants/collections";
import { statusBadge } from "@/components/ui/styles";

import { BookJacket } from "./BookJacket";
import { DramaTicket } from "./DramaTicket";

type ShelfItemProps = {
  entry: ShelfEntry;
  isBook: boolean;
  onOpen: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function ShelfItem({ entry, isBook, onOpen }: ShelfItemProps) {
  return (
    <article className="group/item min-w-0">
      <button
        className="group/open block w-full cursor-pointer text-left"
        onClick={onOpen}
        aria-label={`Open ${entry.title}`}
      >
        {isBook ? <BookJacket entry={entry} /> : <DramaTicket entry={entry} />}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted">
          <span className={statusBadge}>{entry.status}</span>
          <span>{entry.genre}</span>
        </div>
        <span className="mt-3.5 block text-xs font-medium text-plum">
          {isBook ? "open the book" : "open the diary"} ↗︎
        </span>
      </button>
    </article>
  );
}
