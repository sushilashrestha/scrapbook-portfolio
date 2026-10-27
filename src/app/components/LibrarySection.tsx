import Link from "next/link";

import { BookSpine } from "@/components/books/BookSpine";
import { HandwrittenAccent } from "@/components/ui/HandwrittenAccent";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { textLink } from "@/components/ui/styles";
import { books } from "@/constants/books";
import { cn } from "@/lib/utils";

const previewSlugs = [
  "ikigai",
  "before-the-coffee-gets-cold",
  "tales-from-the-cafe",
  "before-we-forget-kindness",
  "make-your-bed",
];
const previewBooks = books.filter((book) => previewSlugs.includes(book.slug));
const spineSizes = [
  "h-44 w-10",
  "h-40 w-11",
  "h-46 w-10",
  "h-48 w-10",
  "h-40 w-9",
];

export function LibrarySection() {
  return (
    <PageSection
      id="library"
      className="grid grid-cols-1 items-end gap-12 md:grid-cols-2"
    >
      <div className="reveal">
        <p className="mb-3 font-hand text-2xl font-medium text-plum">
          off the clock
        </p>
        <SectionHeading>
          Not everything is <HandwrittenAccent>code.</HandwrittenAccent>
        </SectionHeading>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          A little corner for the books on my nightstand: a café where time
          bends, a reason for being, and a few gentle nudges.
        </p>
        <Link href="/library" className={cn(textLink, "mt-6")}>
          Peek at the bookshelf ↗︎
        </Link>
      </div>
      <div
        aria-hidden="true"
        className="reveal flex w-full items-end gap-1 border-b-12 border-tape px-6 pt-6 shadow-shelf"
      >
        {previewBooks.map((book, index) => (
          <BookSpine
            key={book.slug}
            book={book}
            className={spineSizes[index % spineSizes.length]}
          />
        ))}
      </div>
    </PageSection>
  );
}
