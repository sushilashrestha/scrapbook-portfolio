"use client";

import { useState } from "react";

import { CollectionTabs } from "@/components/ui/CollectionTabs";
import { textLink } from "@/components/ui/styles";
import { projects } from "@/constants/projects";

import { ProjectNote } from "./ProjectNote";

const ALL_PROJECTS = "All projects";
const categories = [
  ALL_PROJECTS,
  "At work",
  "Web & interfaces",
  "AI & experiments",
] as const;

export function ProjectCollection() {
  const [category, setCategory] = useState<string>(ALL_PROJECTS);
  const visibleProjects = projects.filter(
    (project) => category === ALL_PROJECTS || project.category === category,
  );

  return (
    <div>
      <CollectionTabs
        options={categories}
        value={category}
        onChange={setCategory}
        label="Project categories"
        className="mt-6 mb-6 gap-5 md:mt-7 md:gap-8"
      >
        <div
          aria-live="polite"
          className="grid grid-cols-1 items-start gap-9 px-1 pt-4 md:grid-cols-2 md:gap-x-10 md:gap-y-11"
        >
          {visibleProjects.map((project) => (
            <ProjectNote key={project.slug} project={project} />
          ))}
        </div>
      </CollectionTabs>
      <div className="mt-10 text-center">
        <a
          className={textLink}
          href="https://github.com/sushilashrestha"
          target="_blank"
          rel="noreferrer"
        >
          More on GitHub ↗︎
        </a>
      </div>
    </div>
  );
}
