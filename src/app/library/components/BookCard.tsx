import type { MouseEvent } from "react";

import type { Book } from "@/constants/books";
import { BookCover } from "@/components/books/BookCover";

type BookCardProps = {
  book: Book;
  onOpen: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function BookCard({ book, onOpen }: BookCardProps) {
  return (
    <article className="min-w-0">
      <button
        className="group block w-full cursor-pointer text-left"
        onClick={onOpen}
        aria-label={`Open ${book.title}`}
      >
        <BookCover
          book={book}
          sizes="(min-width: 1024px) 160px, (min-width: 768px) 20vw, 30vw"
          className="w-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:-rotate-2"
        />
        <p className="mt-3 text-xs text-muted">{book.genre}</p>
      </button>
    </article>
  );
}
