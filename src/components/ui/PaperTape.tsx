import { cn } from "@/lib/utils";

export function PaperTape({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute -top-3.5 h-8 w-28 -translate-x-1/2 bg-tape/60 backdrop-blur-xs clip-torn-tape",
        className,
      )}
    />
  );
}
