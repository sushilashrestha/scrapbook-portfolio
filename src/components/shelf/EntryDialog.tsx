"use client";

import { useEffect, useRef } from "react";

import type { ShelfEntry } from "@/constants/collections";
import { statusBadge, textLink } from "@/components/ui/styles";
import { cn } from "@/lib/utils";

type EntryDialogProps = {
  entry: ShelfEntry;
  isBook: boolean;
  onClose: () => void;
};

export function EntryDialog({ entry, isBook, onClose }: EntryDialogProps) {
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
      aria-labelledby="entry-title"
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
        className="mt-4.5 mr-5 ml-auto block min-h-10 cursor-pointer px-3 py-2 text-sm text-plum"
        onClick={close}
        autoFocus
        aria-label="Close entry"
      >
        Close ×
      </button>
      <div className="px-6 pt-1 pb-8 md:px-10 md:pt-2.5 md:pb-10">
        <h2
          id="entry-title"
          className="mb-3 text-3xl leading-tight md:text-4xl"
        >
          {entry.title}
        </h2>
        <p className="mb-4 text-muted">{entry.creator}</p>
        <span className={statusBadge}>{entry.status}</span>
        <p className="mt-6 border-t border-line pt-6 text-sm leading-relaxed">
          {entry.overview}
        </p>
        {entry.progress && (
          <p className="leading-relaxed">
            {entry.progress.current} / {entry.progress.total}{" "}
            {entry.progress.unit}
          </p>
        )}
        {entry.rating != null && (
          <p className="leading-relaxed">My rating: {entry.rating} / 5</p>
        )}
        <h3 className="mt-7 mb-2.5 font-hand text-3xl font-medium text-plum">
          {isBook ? "in the margins" : "after the episode"}
        </h3>
        <p className="text-sm leading-relaxed whitespace-pre-line text-muted">
          {entry.notes ||
            "No personal notes yet. This is a starter pick on the list."}
        </p>
        {entry.spoilerNotes && (
          <details className="mt-5 border border-dashed border-line p-4">
            <summary className="cursor-pointer">
              Show notes with spoilers
            </summary>
            <p className="mt-4 leading-relaxed whitespace-pre-line">
              {entry.spoilerNotes}
            </p>
          </details>
        )}
        <a
          className={cn(textLink, "mt-7")}
          href={entry.source}
          target="_blank"
          rel="noreferrer"
        >
          {isBook ? "About the book" : "About the drama"} ↗︎
        </a>
      </div>
    </dialog>
  );
}
