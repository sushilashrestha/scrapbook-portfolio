"use client";

import type { MouseEvent } from "react";
import { useRef, useState } from "react";

import type { ShelfEntry } from "@/constants/collections";
import { CollectionTabs } from "@/components/ui/CollectionTabs";
import { cn } from "@/lib/utils";

import { EntryDialog } from "./EntryDialog";
import { ShelfEmptyState } from "./ShelfEmptyState";
import { ShelfItem } from "./ShelfItem";

type PersonalShelfProps = {
  entries: ShelfEntry[];
  kind: "books" | "dramas";
};

export function PersonalShelf({ entries, kind }: PersonalShelfProps) {
  const [status, setStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<ShelfEntry | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const isBook = kind === "books";
  const statuses = isBook
    ? ["All", "Reading", "Finished"]
    : ["All", "Watching", "Finished"];
  const visible = entries.filter(
    (entry) =>
      matchesStatus(entry, status) &&
      `${entry.title} ${entry.creator}`
        .toLowerCase()
        .includes(search.trim().toLowerCase()),
  );

  function openEntry(entry: ShelfEntry, event: MouseEvent<HTMLButtonElement>) {
    opener.current = event.currentTarget;
    setSelected(entry);
  }

  function closeEntry() {
    setSelected(null);
    opener.current?.focus();
  }

  function resetFilters() {
    setSearch("");
    setStatus("All");
  }

  return (
    <div>
      <label className="flex w-full flex-col gap-2 text-xs text-muted md:max-w-md">
        Find a {isBook ? "book" : "drama"}
        <input
          type="search"
          placeholder={isBook ? "Title or author…" : "Title or cast…"}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="min-h-11 rounded-xs border border-line bg-sheet px-3.5 py-3 text-sm text-pencil focus:outline-2 focus:outline-offset-2 focus:outline-plum"
        />
      </label>
      <CollectionTabs
        options={statuses}
        value={status}
        onChange={setStatus}
        label={isBook ? "Reading status" : "Watching status"}
        className="my-5 gap-6 overflow-x-auto md:gap-7 md:overflow-visible"
      >
        <p className="mb-6 text-xs text-muted" role="status">
          {countLabel(visible.length, isBook, status)}
        </p>
        {visible.length ? (
          <div
            className={cn(
              "grid grid-cols-2 gap-x-6 gap-y-8 px-1 pt-1 pb-8 md:grid-cols-3 md:gap-8 md:px-2 md:pb-11 lg:gap-x-10 lg:gap-y-11",
              isBook && "border-b-12 border-tape shadow-shelf",
            )}
          >
            {visible.map((entry) => (
              <ShelfItem
                key={entry.slug}
                entry={entry}
                isBook={isBook}
                onOpen={(event) => openEntry(entry, event)}
              />
            ))}
          </div>
        ) : (
          <ShelfEmptyState
            search={search}
            status={status}
            onReset={resetFilters}
          />
        )}
      </CollectionTabs>
      <p className="mt-8 text-xs text-muted">
        Starter picks, awaiting personal notes and ratings.
      </p>
      {selected && (
        <EntryDialog entry={selected} isBook={isBook} onClose={closeEntry} />
      )}
    </div>
  );
}

function matchesStatus(entry: ShelfEntry, status: string) {
  if (status === "All") return true;
  if (status === "Favorites") return entry.favorite;
  return entry.status === status;
}

function countLabel(count: number, isBook: boolean, status: string) {
  const noun = isBook ? "book" : "drama";
  const plural = count === 1 ? noun : `${noun}s`;
  const suffix =
    status === "All" ? " on the shelf" : ` / ${status.toLowerCase()}`;
  return `${count} ${plural}${suffix}`;
}
