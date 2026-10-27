import { HeadlineEmphasis } from "@/components/ui/HeadlineEmphasis";
import { PressedLavender } from "@/components/ui/PressedLavender";

export function LibraryHeader() {
  return (
    <header className="mx-auto mt-2.5 mb-8 flex max-w-5xl items-center justify-between gap-2.5 pt-5 pb-4 md:gap-9">
      <div>
        <h1 className="mb-6 max-w-2xl text-4xl leading-tight lg:text-5xl">
          A shelf full of <HeadlineEmphasis>possibilities.</HeadlineEmphasis>
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
          For stories to get lost in, ideas to sit with, and notes in the
          margins.
        </p>
      </div>
      <PressedLavender
        sizes="80px"
        className="h-28 w-15 rotate-12 opacity-80 md:mr-6 md:h-36 md:w-20"
      />
    </header>
  );
}
