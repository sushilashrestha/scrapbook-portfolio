import type { Metadata } from "next";

import { PageSection } from "@/components/ui/PageSection";
import { books } from "@/constants/books";

import { BookShelf } from "./components/BookShelf";
import { LibraryHeader } from "./components/LibraryHeader";

export const metadata: Metadata = {
  title: "Library | Sushi's scrapbook",
  description: "A reading shelf of books, stories, and notes in the margins.",
};

export default function LibraryPage() {
  return (
    <>
      <LibraryHeader />
      <PageSection>
        <BookShelf books={books} />
      </PageSection>
    </>
  );
}
