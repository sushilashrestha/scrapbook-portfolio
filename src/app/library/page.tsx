import Image from "next/image";
import { ScrapbookShell } from "@/components/ScrapbookShell";
import { PersonalShelf } from "@/components/PersonalShelf";
import { books } from "@/content/collections";
export const metadata = { title: "Library | Sushi's scrapbook", description: "A reading shelf of books, stories, and notes in the margins." };
export default function LibraryPage() {
  return <ScrapbookShell active="/library"><header className="chapter-header shelf-header"><div><p className="eyebrow">LIBRARY</p><h1>A shelf full of <em>possibilities.</em></h1><p>For stories to get lost in, ideas to sit with, and notes in the margins.</p></div><Image className="shelf-botanical" src="/assets/pressed-lavender.png" alt="" width={130} height={230} sizes="130px"/></header><section className="scrap-section"><PersonalShelf entries={books} kind="books"/></section></ScrapbookShell>;
}
