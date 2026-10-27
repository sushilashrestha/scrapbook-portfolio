import Image from "next/image";

import type { Book } from "@/constants/books";
import { cn } from "@/lib/utils";

import { bookTones } from "./bookTones";

type BookCoverProps = {
  book: Book;
  sizes: string;
  className?: string;
};

export function BookCover({ book, sizes, className }: BookCoverProps) {
  return (
    <div
      className={cn(
        "relative aspect-2/3 overflow-hidden rounded-l-xs rounded-r-sm shadow-book",
        className,
      )}
    >
      {book.cover ? (
        <Image
          src={book.cover}
          alt=""
          fill
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <div
          className={cn(
            "flex h-full flex-col justify-between p-3 text-sheet",
            bookTones[book.color],
          )}
        >
          <span className="font-display text-sm leading-tight">
            {book.title}
          </span>
          <span className="text-xs">{book.author}</span>
        </div>
      )}
      <span className="absolute inset-y-0 left-0 w-2 bg-linear-to-r from-black/25 to-transparent" />
    </div>
  );
}
