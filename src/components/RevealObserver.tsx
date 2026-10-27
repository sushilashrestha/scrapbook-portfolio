"use client";

import { useEffect } from "react";

/**
 * One shared IntersectionObserver for every `.reveal` element on the page,
 * so the sections themselves can stay Server Components. Each element is
 * revealed once and then unobserved.
 */
export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      // Wait until things are a little way into view so the motion is seen.
      { rootMargin: "0px 0px -12% 0px" },
    );

    document
      .querySelectorAll(".reveal:not([data-revealed])")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
