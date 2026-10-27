import { textLink } from "@/components/ui/styles";
import { cn } from "@/lib/utils";

type ShelfEmptyStateProps = {
  search: string;
  status: string;
  onReset: () => void;
};

export function ShelfEmptyState({
  search,
  status,
  onReset,
}: ShelfEmptyStateProps) {
  const hasSearch = search.trim() !== "";

  return (
    <div className="border border-dashed border-stitch bg-sheet px-6 py-18 text-center">
      <p className="font-hand text-3xl font-medium text-plum">
        {hasSearch
          ? "Nothing on this shelf just yet."
          : status === "Favorites"
            ? "A place for the ones that stay with me."
            : `No ${status.toLowerCase()} entries yet.`}
      </p>
      <p className="mt-3 mb-5 text-sm text-muted">
        {hasSearch
          ? "Try another title, or clear the filters."
          : "The starter picks are waiting on the list. Notes will come as I go."}
      </p>
      <button className={cn(textLink, "cursor-pointer")} onClick={onReset}>
        See the whole shelf ↗︎
      </button>
    </div>
  );
}
