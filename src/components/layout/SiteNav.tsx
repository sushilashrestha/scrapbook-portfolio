import Link from "next/link";

import { chapters } from "@/constants/navigation";
import { profile } from "@/constants/profile";
import { cn } from "@/lib/utils";

import { Signature } from "./Signature";

const navItem = cn(
  "relative inline-flex items-center justify-center gap-1.5 px-1 font-hand font-medium text-pencil",
  "after:absolute after:inset-x-1 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-plum after:transition-transform hover:after:scale-x-100",
  "focus-visible:text-plum focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-8 focus-visible:outline-none focus-visible:after:scale-x-0",
);

export function SiteNav() {
  return (
    <nav
      aria-label="Main"
      className={cn(
        "mx-auto flex min-h-28 max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-1.5 pt-3 pb-5",
        "md:h-25 md:min-h-0 md:flex-nowrap md:justify-between md:gap-0 md:p-0",
      )}
    >
      <Signature className="mb-3 w-full justify-center leading-none md:mb-0 md:w-auto md:justify-start md:leading-normal" />
      <div className="flex w-full justify-center gap-5 whitespace-nowrap md:w-auto md:justify-start md:gap-8 md:pl-9">
        {chapters.map((chapter) => (
          <Link
            key={chapter.href}
            href={chapter.href}
            className={cn(
              navItem,
              "min-h-11 text-xl leading-tight md:text-2xl",
            )}
          >
            {chapter.label}
            {"arrow" in chapter && <NavArrow>{chapter.arrow}</NavArrow>}
          </Link>
        ))}
      </div>
      <a
        href={profile.cvHref}
        download="Sushila-Shrestha-CV.pdf"
        className={cn(
          navItem,
          "min-h-9 text-xl leading-tight md:min-h-11 md:text-2xl",
        )}
      >
        my CV <NavArrow>↓︎</NavArrow>
      </a>
    </nav>
  );
}

function NavArrow({ children }: { children: string }) {
  return (
    <span
      aria-hidden="true"
      className="font-sans text-sm leading-none font-normal"
    >
      {children}
    </span>
  );
}
