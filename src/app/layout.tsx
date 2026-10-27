import type { Metadata } from "next";
import { Caveat, DM_Sans, Fraunces } from "next/font/google";
import { profile } from "@/content/profile";
import "./globals.css";
import "./scrapbook.css";

const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.name} — scrapbook`,
  description: profile.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${dmSans.variable} ${fraunces.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-dvh font-sans text-ink bg-paper bg-dot-grid dark:bg-paper-dark dark:text-paper">
        {/* Scroll reveals start hidden; without JS nothing would ever show them. */}
        <noscript>
          <style>{".reveal { opacity: 1 !important; }"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
