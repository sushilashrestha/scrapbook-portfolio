import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ScrapbookShell } from "@/components/ScrapbookShell";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return { title: `${project?.title ?? "Project"} | Sushi's scrapbook` };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  return <ScrapbookShell active="/work"><article className="scrap-section project-detail"><Link className="text-link" href="/work">← Back to the project folder</Link><header className="chapter-header"><p className="eyebrow">FROM THE PROJECT FOLDER</p><h1>{project.title}</h1><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div></header><div className="project-detail-paper"><span className="paper-tape" aria-hidden="true"/><h2 className="hand">a little about this one</h2><p>{project.summary}</p>{project.award && <p className="project-award">{project.award}</p>}<a className="ink-button" href={project.href} target="_blank" rel="noreferrer">{project.href.includes("github.com") ? "Explore the source" : "Visit the website"} ↗</a></div></article></ScrapbookShell>;
}
