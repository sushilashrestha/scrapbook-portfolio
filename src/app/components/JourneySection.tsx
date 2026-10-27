import { HandwrittenAccent } from "@/components/ui/HandwrittenAccent";
import { PageSection } from "@/components/ui/PageSection";
import { PaperTape } from "@/components/ui/PaperTape";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, experience } from "@/constants/journey";
import { cn } from "@/lib/utils";

import { JourneyEntry } from "./JourneyEntry";

export function JourneySection() {
  return (
    <PageSection id="journey">
      <SectionHeading className="reveal">
        The story <HandwrittenAccent>so far.</HandwrittenAccent>
      </SectionHeading>
      <div
        className={cn(
          "reveal relative mt-8 grid -rotate-[0.5deg] grid-cols-1 gap-6 border border-line bg-sheet paper-journal-lines pt-9 pr-6 pb-4 pl-10 shadow-paper",
          "before:absolute before:inset-y-0 before:left-6 before:w-px before:bg-plum/30",
          "md:grid-cols-[1.3fr_1fr] md:gap-16 md:pt-11 md:pr-10 md:pb-5 md:pl-16 md:before:left-11",
        )}
      >
        <PaperTape className="left-2/3 -rotate-5" />
        <div>
          <ColumnTitle>where I&apos;ve been building</ColumnTitle>
          {experience.map((item) => (
            <JourneyEntry
              key={item.title + item.place}
              title={item.title}
              when={item.when}
            >
              <p className="mb-1 text-xs leading-relaxed text-plum">
                {item.place}
              </p>
              <p className="text-xs leading-relaxed text-muted">{item.note}</p>
            </JourneyEntry>
          ))}
        </div>
        <div>
          <ColumnTitle>where it started</ColumnTitle>
          {education.map((item) => (
            <JourneyEntry key={item.title} title={item.title} when={item.when}>
              <p className="text-xs leading-relaxed text-muted">{item.place}</p>
            </JourneyEntry>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

function ColumnTitle({ children }: { children: string }) {
  return (
    <h3 className="mb-8 font-hand text-3xl font-medium text-plum">
      {children}
    </h3>
  );
}
