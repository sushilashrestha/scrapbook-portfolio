"use client";

import type { MouseEvent } from "react";
import { useRef, useState } from "react";

import type { Book } from "@/constants/books";

import { BookCard } from "./BookCard";
import { BookDialog } from "./BookDialog";
import { ShelfEmptyState } from "./ShelfEmptyState";

export function BookShelf({ books }: { books: Book[] }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Book | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const query = search.trim().toLowerCase();
  const visibleBooks = books.filter((book) =>
    `${book.title} ${book.author}`.toLowerCase().includes(query),
  );

  function openBook(book: Book, event: MouseEvent<HTMLButtonElement>) {
    opener.current = event.currentTarget;
    setSelected(book);
  }

  function closeBook() {
    setSelected(null);
    opener.current?.focus();
  }

  return (
    <div>
      <label className="mb-8 flex w-full flex-col gap-2 text-xs text-muted md:max-w-md">
        Find a book
        <input
          type="search"
          placeholder="Title or author…"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="min-h-11 rounded-xs border border-line bg-sheet px-3.5 py-3 text-sm text-pencil focus:outline-2 focus:outline-offset-2 focus:outline-plum"
        />
      </label>
      <p className="mb-6 text-xs text-muted" role="status">
        {visibleBooks.length} {visibleBooks.length === 1 ? "book" : "books"} on
        the shelf
      </p>
      {visibleBooks.length ? (
        <div className="grid grid-cols-3 gap-x-4 gap-y-8 border-b-12 border-tape px-1 pt-1 pb-8 shadow-shelf sm:grid-cols-4 md:grid-cols-5 md:gap-6 md:px-2 lg:grid-cols-6">
          {visibleBooks.map((book) => (
            <BookCard
              key={book.slug}
              book={book}
              onOpen={(event) => openBook(book, event)}
            />
          ))}
        </div>
      ) : (
        <ShelfEmptyState onReset={() => setSearch("")} />
      )}
      {selected && <BookDialog book={selected} onClose={closeBook} />}
    </div>
  );
}
