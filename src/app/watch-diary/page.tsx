import { ScrapbookShell } from "@/components/ScrapbookShell";
import { PersonalShelf } from "@/components/PersonalShelf";
import { dramas } from "@/content/collections";
export const metadata = { title: "Watch diary | Sushi's scrapbook", description: "A collection of dramas, watchlist picks, and room for episode notes." };
export default function WatchDiaryPage() {
  return <ScrapbookShell active="/watch-diary"><header className="chapter-header shelf-header"><div><p className="eyebrow">WATCH DIARY</p><h1>Just one more <em>episode.</em></h1><p>A little diary for the stories on screen, and the thoughts they leave behind.</p></div><div className="header-ticket" aria-hidden="true"><span>WATCH DIARY</span><b className="hand">a seat for<br/>a new story</b><span>ADMIT ONE</span></div></header><section className="scrap-section"><PersonalShelf entries={dramas} kind="dramas"/></section></ScrapbookShell>;
}
