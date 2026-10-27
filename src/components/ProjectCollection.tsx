"use client";

import { useState, type ReactNode } from "react";
import { CollectionTabs } from "./ui/CollectionTabs";
import { projects } from "@/content/projects";

const categories = ["All projects", "Web & interfaces", "AI & experiments"] as const;

function ProjectTabs({ preview, category, onChange, children }: { preview: boolean; category: string; onChange: (category: string) => void; children: ReactNode }) {
  return preview ? <>{children}</> : <CollectionTabs options={categories} value={category} onChange={onChange}>{children}</CollectionTabs>;
}

export function ProjectCollection({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState("All projects");
  const visible = projects.filter(project => category === "All projects" || project.category === category).slice(0, preview ? 2 : projects.length);

  return <div className="project-collection project-notebook">
    <ProjectTabs preview={preview} category={category} onChange={setCategory}>
      <div className="project-notes-grid" aria-live="polite">
        {visible.map(project => <article className={`project-note note-${project.slug}`} key={project.slug}>
          <span className="note-tape" aria-hidden="true"/>
          <a href={project.href} target="_blank" rel="noreferrer" className="project-note-link" aria-label={`View ${project.title} (opens in a new tab)`}>
            <p className="project-note-label">{project.noteLabel}</p>
            <h3>{project.title}</h3>
            <p className="project-note-summary">{project.summary}</p>
            <p className="project-note-stack"><span className="hand">made with</span> {project.stack.join(" / ")}</p>
            {project.award && <p className="project-note-award">{project.award}</p>}
            <span className="project-note-cta hand">take a closer look <span aria-hidden="true">↗︎</span></span>
          </a>
        </article>)}
      </div>
    </ProjectTabs>
    {!preview && <a className="text-link github-link" href="https://github.com/sushilashrestha" target="_blank" rel="noreferrer">More on GitHub ↗︎</a>}
  </div>;
}
