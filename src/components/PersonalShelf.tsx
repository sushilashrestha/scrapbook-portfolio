"use client";

import { useEffect, useRef, useState } from "react";
import type { ShelfEntry } from "@/content/collections";
import { CollectionTabs } from "./ui/CollectionTabs";

export function PersonalShelf({ entries, kind }: { entries: ShelfEntry[]; kind: "books" | "dramas" }) {
  const [status, setStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<ShelfEntry | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const isBook = kind === "books";
  const statuses = isBook ? ["All", "Reading", "Finished"] : ["All", "Watching", "Finished"];
  const visible = entries.filter(entry => (status === "All" || (status === "Favorites" ? entry.favorite : entry.status === status)) && `${entry.title} ${entry.creator}`.toLowerCase().includes(search.trim().toLowerCase()));

  useEffect(() => {
    if (selected) dialog.current?.showModal();
  }, [selected]);

  function closeEntry() {
    dialog.current?.close();
    setSelected(null);
    opener.current?.focus();
  }

  return <div className={`personal-shelf ${isBook ? "book-shelf" : "drama-shelf"}`}>
    <div className="shelf-tools"><label>Find a {isBook ? "book" : "drama"}<input type="search" placeholder={isBook ? "Title or author…" : "Title or cast…"} value={search} onChange={event => setSearch(event.target.value)}/></label></div>
    <CollectionTabs options={statuses} value={status} onChange={setStatus} label={isBook ? "Reading status" : "Watching status"}>
      <p className="shelf-count" role="status">{visible.length} {isBook ? (visible.length === 1 ? "book" : "books") : (visible.length === 1 ? "drama" : "dramas")}{status !== "All" ? ` / ${status.toLowerCase()}` : " on the shelf"}</p>
      {visible.length ? <div className="shelf-grid">{visible.map(entry => <article key={entry.slug} className={`shelf-item tone-${entry.color}`}><button className="shelf-open" onClick={event => { opener.current = event.currentTarget; setSelected(entry); }} aria-label={`Open ${entry.title}`}>
        <div className={isBook ? "book-jacket" : "drama-ticket"}><span className="jacket-category">{isBook ? "THE READING SHELF" : "SUSHI'S WATCH DIARY"}</span><h2>{entry.title}</h2><span className="jacket-author">{entry.creator}</span>{!isBook && <span className="ticket-admit">ADMIT ONE / A NEW STORY</span>}</div>
        <div className="shelf-caption"><span className="entry-status">{entry.status}</span><span>{entry.genre}</span></div><span className="hand shelf-open-note">{isBook ? "open the book" : "open the diary"} ↗</span>
      </button></article>)}</div> : <div className="shelf-empty"><p className="hand">{search.trim() ? "Nothing on this shelf just yet." : status === "Favorites" ? "A place for the ones that stay with me." : `No ${status.toLowerCase()} entries yet.`}</p><p>{search.trim() ? "Try another title, or clear the filters." : "The starter picks are waiting on the list. Notes will come as I go."}</p><button className="text-link" onClick={() => { setSearch(""); setStatus("All"); }}>See the whole shelf ↗</button></div>}
    </CollectionTabs>
    <p className="shelf-disclaimer">Starter picks, awaiting personal notes and ratings.</p>
    {selected && <dialog ref={dialog} className="entry-dialog" onCancel={event => { event.preventDefault(); closeEntry(); }} onClick={event => { if (event.target === event.currentTarget) closeEntry(); }} aria-labelledby="entry-title"><button className="dialog-close" onClick={closeEntry} autoFocus aria-label="Close entry">Close ×</button><div className={`entry-paper tone-${selected.color}`}><p className="eyebrow">{isBook ? "A PAGE FROM THE LIBRARY" : "A PAGE FROM THE WATCH DIARY"}</p><h2 id="entry-title">{selected.title}</h2><p className="entry-creator">{selected.creator}</p><span className="entry-status">{selected.status}</span><p className="entry-overview">{selected.overview}</p>{selected.progress && <p>{selected.progress.current} / {selected.progress.total} {selected.progress.unit}</p>}{selected.rating != null && <p>My rating: {selected.rating} / 5</p>}<h3 className="hand">{isBook ? "in the margins" : "after the episode"}</h3><p className="personal-notes">{selected.notes || "No personal notes yet. This is a starter pick on the list."}</p>{selected.spoilerNotes && <details className="spoiler-notes"><summary>Show notes with spoilers</summary><p>{selected.spoilerNotes}</p></details>}<a className="text-link" href={selected.source} target="_blank" rel="noreferrer">{isBook ? "About the book" : "About the drama"} ↗</a></div></dialog>}
  </div>;
}
