import { ScrapbookShell } from "@/components/ScrapbookShell";
import { ProjectCollection } from "@/components/ProjectCollection";
export const metadata = { title: "Work | Sushi's scrapbook" };
export default function WorkPage() {
  return <ScrapbookShell active="/work"><header className="chapter-header"><p className="eyebrow">THE PROJECT FOLDER</p><h1>Made with <em>curiosity.</em></h1><p>Interfaces, experiments, and ideas that made it out of my browser tabs.</p><span className="hand">open a project to take a closer look</span></header><section className="scrap-section"><ProjectCollection/></section></ScrapbookShell>;
}
