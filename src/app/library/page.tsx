import type { Metadata } from "next";

import { PersonalShelf } from "@/components/shelf/PersonalShelf";
import { ShelfPageHeader } from "@/components/shelf/ShelfPageHeader";
import { HeadlineEmphasis } from "@/components/ui/HeadlineEmphasis";
import { PageSection } from "@/components/ui/PageSection";
import { PressedLavender } from "@/components/ui/PressedLavender";
import { books } from "@/constants/collections";

export const metadata: Metadata = {
  title: "Library | Sushi's scrapbook",
  description: "A reading shelf of books, stories, and notes in the margins.",
};

export default function LibraryPage() {
  return (
    <>
      <ShelfPageHeader
        title={
          <>
            A shelf full of <HeadlineEmphasis>possibilities.</HeadlineEmphasis>
          </>
        }
        description="For stories to get lost in, ideas to sit with, and notes in the margins."
        decoration={
          <PressedLavender
            sizes="80px"
            className="h-28 w-15 rotate-12 opacity-80 md:mr-6 md:h-36 md:w-20"
          />
        }
      />
      <PageSection>
        <PersonalShelf entries={books} kind="books" />
      </PageSection>
    </>
  );
}
