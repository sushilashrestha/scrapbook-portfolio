"use client";

import Link from "next/link";
import { useState } from "react";
import { CollectionTabs } from "./ui/CollectionTabs";
import { projects } from "@/content/projects";

const categories = ["All projects", "Web & interfaces", "AI & experiments"] as const;
const artLabels = ["A place for every person.", "JUNU", "Reading between the lines.", "HULT PRIZE", "HACK THE CIRCLE", "Find your next clue."];
const shortNames = ["Tourist Attraction Recommender", "JUNU voice assistant", "Sentiment Analysis", "Hult Prize at KhCE", "Hack The Circle", "AR Treasure Hunt"];

export function ProjectCollection({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<string>("All projects");
  return <div className="project-collection">
    <CollectionTabs options={preview ? ["Selected projects"] : categories} value={preview ? "Selected projects" : category} onChange={setCategory}>
    <div className="project-grid" aria-live="polite">{(preview ? projects.slice(0, 2) : projects).map((project, index) => {
      const isAI = index < 3;
      if (category === "Web & interfaces" && isAI || category === "AI & experiments" && !isAI) return null;
      return <article className={`project-sheet project-${project.slug}`} key={project.slug}>
        <Link href={`/work/${project.slug}`} className="project-link" aria-label={`Read about ${project.title}`}>
          <div className={`project-art art-${index}`} aria-hidden="true"><span className="art-small">{isAI ? "AN EXPERIMENT IN AI" : "BUILT FOR THE WEB"}</span><span className="art-title">{artLabels[index]}</span>{index === 0 ? <span className="art-landscape">△ △ △</span> : index === 1 ? <span className="voice-wave">ııııııııııııııııııı</span> : index === 2 ? <span className="sentiment-marks">“ &nbsp; ”</span> : index === 3 ? <span className="art-bottom">Ideas with impact. / KhCE</span> : index === 4 ? <span className="circle-mark" /> : null}<span className="art-arrow">↗</span></div>
          <div className="project-info"><p className="project-type">{isAI ? "AI / MACHINE LEARNING" : "FRONTEND DEVELOPMENT"}</p><h3>{shortNames[index]} <span aria-hidden>↗</span></h3><p>{project.summary}</p><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>{project.award && <p className="project-award">{project.award}</p>}</div>
        </Link>
      </article>;
    })}</div>
    </CollectionTabs>
    <a className="text-link github-link" href="https://github.com/sushilashrestha" target="_blank" rel="noreferrer">More little experiments on GitHub ↗</a>
  </div>;
}
