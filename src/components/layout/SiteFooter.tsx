import { profile } from "@/constants/profile";

import { Signature } from "./Signature";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 border-t border-line pt-5 pb-8 md:flex-nowrap md:gap-0">
      <Signature />
      <p className="order-3 w-full text-xs text-muted md:order-none md:w-auto">
        A scrapbook of work, stories, and everything in between.
      </p>
      <a href={`mailto:${profile.email}`} className="text-xs text-muted">
        Say hello ↗︎
      </a>
    </footer>
  );
}
