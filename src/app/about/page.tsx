import { ScrapbookShell } from "@/components/ScrapbookShell";
import { AboutPages, JourneyPages, AwardPages, ContactPostcard } from "@/components/ScrapbookPages";
export const metadata = { title: "About | Sushi's scrapbook" };
export default function AboutPage() {
  return <ScrapbookShell active="/about"><header className="chapter-header"><p className="eyebrow">A PAGE ABOUT ME</p><h1>Beyond the <em>pixels.</em></h1><p>A little background, a few milestones, and the things I bring to my work.</p></header><AboutPages/><JourneyPages/><AwardPages/><ContactPostcard/></ScrapbookShell>;
}
