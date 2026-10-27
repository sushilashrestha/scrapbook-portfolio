import type { ReactNode } from "react";

import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

export function ScrapbookShell({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-clip px-5 md:px-8 lg:px-12">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-30 focus:bg-sheet focus:px-5 focus:py-3"
        href="#main"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
