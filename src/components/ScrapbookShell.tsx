import Link from "next/link";
import type { ReactNode } from "react";
import { profile } from "@/content/profile";
import { RevealObserver } from "./RevealObserver";

const chapters = [["/", "scrapbook"], ["/work", "work"], ["/library", "library"], ["/watch-diary", "watch diary"], ["/about", "about"]] as const;

export function ScrapbookShell({ children, active }: { children: ReactNode; active: string }) {
  return <div className="scrapbook">
    <a className="skip-link" href="#main">Skip to content</a>
    <nav className="scrap-nav" aria-label="Main"><Link href="/" className="signature" aria-label="Sushi home">sushi<span>.</span></Link><div className="nav-links">{chapters.map(([href,label]) => <Link href={href} key={href} aria-current={active === href ? "page" : undefined}>{label}</Link>)}</div><a className="nav-cv" href={profile.cvHref} download>my CV ↓</a></nav>
    <main id="main">{children}</main>
    <footer className="scrap-footer"><Link className="signature" href="/">sushi<span>.</span></Link><p>A scrapbook of work, stories, and everything in between.</p><a href={`mailto:${profile.email}`}>Say hello ↗</a></footer>
    <RevealObserver key={active}/>
  </div>;
}
