"use client";

import { useEffect, useRef } from "react";

import type { Book } from "@/constants/books";
import { BookCover } from "@/components/books/BookCover";

type BookDialogProps = {
  book: Book;
  onClose: () => void;
};

export function BookDialog({ book, onClose }: BookDialogProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialog.current?.showModal();
  }, []);

  function close() {
    dialog.current?.close();
    onClose();
  }

  return (
    <dialog
      ref={dialog}
      aria-labelledby="book-title"
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2.5rem)] max-w-2xl overflow-y-auto border border-line bg-sheet p-0 text-pencil shadow-2xl backdrop:bg-pencil/50 backdrop:backdrop-blur-xs"
    >
      <button
        className="absolute top-3 right-3 flex size-10 cursor-pointer items-center justify-center rounded-full text-2xl leading-none text-plum transition-colors hover:bg-plum/10 focus-visible:outline-offset-2"
        onClick={close}
        autoFocus
        aria-label="Close book"
      >
        <span aria-hidden="true">×</span>
      </button>
      <div className="grid gap-8 px-6 pt-14 pb-8 sm:grid-cols-[9rem_1fr] md:px-10 md:pt-14 md:pb-10">
        <BookCover
          book={book}
          sizes="144px"
          className="w-32 -rotate-2 sm:w-36"
        />
        <div>
          <h2
            id="book-title"
            className="mb-3 text-3xl leading-tight md:text-4xl"
          >
            {book.title}
          </h2>
          <p className="mb-4 text-muted">
            {book.author}
            {book.volume && ` · Book ${book.volume} of the series`}
          </p>
          <p className="mt-6 border-t border-line pt-6 text-sm leading-relaxed">
            {book.overview}
          </p>
          {book.pagesRead && (
            <p className="leading-relaxed">
              {book.pagesRead.current} / {book.pagesRead.total} pages
            </p>
          )}
          {book.rating != null && (
            <p className="leading-relaxed">My rating: {book.rating} / 5</p>
          )}
          <h3 className="mt-7 mb-2.5 font-hand text-3xl font-medium text-plum">
            in the margins
          </h3>
          <p className="text-sm leading-relaxed whitespace-pre-line text-muted">
            {book.notes || "No personal notes yet."}
          </p>
          {book.spoilerNotes && (
            <details className="mt-5 border border-dashed border-line p-4">
              <summary className="cursor-pointer">
                Show notes with spoilers
              </summary>
              <p className="mt-4 leading-relaxed whitespace-pre-line">
                {book.spoilerNotes}
              </p>
            </details>
          )}
        </div>
      </div>
    </dialog>
  );
}
