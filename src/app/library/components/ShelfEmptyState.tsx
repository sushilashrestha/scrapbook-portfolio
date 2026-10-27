import { textLink } from "@/components/ui/styles";
import { cn } from "@/lib/utils";

export function ShelfEmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="border border-dashed border-stitch bg-sheet px-6 py-18 text-center">
      <p className="font-hand text-3xl font-medium text-plum">
        Nothing on this shelf just yet.
      </p>
      <p className="mt-3 mb-5 text-sm text-muted">
        Try another title or author.
      </p>
      <button className={cn(textLink, "cursor-pointer")} onClick={onReset}>
        See the whole shelf ↗︎
      </button>
    </div>
  );
}
