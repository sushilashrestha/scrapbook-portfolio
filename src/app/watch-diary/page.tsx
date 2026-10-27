import type { Metadata } from "next";

import { PersonalShelf } from "@/components/shelf/PersonalShelf";
import { ShelfPageHeader } from "@/components/shelf/ShelfPageHeader";
import { HeadlineEmphasis } from "@/components/ui/HeadlineEmphasis";
import { PageSection } from "@/components/ui/PageSection";
import { dramas } from "@/constants/collections";

import { AdmitOneTicket } from "./components/AdmitOneTicket";

export const metadata: Metadata = {
  title: "Watch diary | Sushi's scrapbook",
  description:
    "A collection of dramas, watchlist picks, and room for episode notes.",
};

export default function WatchDiaryPage() {
  return (
    <>
      <ShelfPageHeader
        title={
          <>
            Just one more <HeadlineEmphasis>episode.</HeadlineEmphasis>
          </>
        }
        description="A little diary for the stories on screen, and the thoughts they leave behind."
        decoration={<AdmitOneTicket />}
      />
      <PageSection>
        <PersonalShelf entries={dramas} kind="dramas" />
      </PageSection>
    </>
  );
}
