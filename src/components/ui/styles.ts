import { cn } from "@/lib/utils";

export const inkButton = cn(
  "inline-flex -rotate-1 cursor-pointer items-center gap-7 rounded-xs bg-moss px-5 py-3 text-xs text-sheet shadow-press transition duration-300 *:text-lg hover:-translate-y-0.5 hover:rotate-1 hover:brightness-90",
);

export const textLink = cn(
  "inline-block border-b border-plum/45 pb-1 text-sm text-plum hover:border-dashed",
);

export const statusBadge = cn(
  "inline-block rounded-xs border border-stitch bg-sheet px-2 py-1 text-xs text-muted",
);
