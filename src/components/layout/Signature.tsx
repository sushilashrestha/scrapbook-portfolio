import Link from "next/link";

import { cn } from "@/lib/utils";

import { DoodleHeart } from "./DoodleHeart";

export function Signature({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Sushi home"
      className={cn(
        "inline-flex items-center gap-1.5 font-hand text-4xl font-bold tracking-tighter",
        className,
      )}
    >
      sushi
      <DoodleHeart />
    </Link>
  );
}
