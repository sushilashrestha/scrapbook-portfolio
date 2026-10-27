import type { ReactNode } from "react";

type ShelfPageHeaderProps = {
  title: ReactNode;
  description: string;
  decoration: ReactNode;
};

export function ShelfPageHeader({
  title,
  description,
  decoration,
}: ShelfPageHeaderProps) {
  return (
    <header className="mx-auto mt-2.5 mb-8 flex max-w-5xl items-center justify-between gap-2.5 pt-5 pb-4 md:gap-9">
      <div>
        <h1 className="mb-6 max-w-2xl text-4xl leading-tight lg:text-5xl">
          {title}
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {description}
        </p>
      </div>
      {decoration}
    </header>
  );
}
