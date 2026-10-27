import type { Metadata } from "next";
import { Caveat, DM_Sans, Fraunces } from "next/font/google";

import { ScrapbookShell } from "@/components/layout/ScrapbookShell";
import { profile } from "@/constants/profile";

import "./globals.css";

const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.name} — scrapbook`,
  description: profile.tagline,
  icons: { icon: "/icon.jpg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${dmSans.variable} ${fraunces.variable} antialiased motion-safe:scroll-smooth`}
    >
      <body className="paper-grain min-h-dvh bg-page font-sans text-sm text-pencil">
        <noscript>
          <style>{".reveal { opacity: 1 !important; }"}</style>
        </noscript>
        <ScrapbookShell>{children}</ScrapbookShell>
      </body>
    </html>
  );
}
