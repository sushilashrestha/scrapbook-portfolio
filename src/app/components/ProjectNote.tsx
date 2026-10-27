import type { Project } from "@/constants/projects";
import { cn } from "@/lib/utils";

const paperStyles: Record<Project["paper"], string> = {
  lined: "bg-sheet paper-note-lines",
  grid: "bg-sheet paper-note-grid",
  lilac: "bg-lilac",
  sage: "bg-sage",
  peach: "bg-peach",
};

export function ProjectNote({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        "group relative -rotate-1 border border-line pt-7.5 pr-6 pb-6 pl-8 shadow-sm even:rotate-1",
        "after:pointer-events-none after:absolute after:inset-y-0 after:left-5 after:w-px after:bg-plum/25",
        "md:pt-9 md:pr-8 md:pb-7 md:pl-10 md:after:left-6 md:even:mt-6",
        paperStyles[project.paper],
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -top-3 left-8 h-7 w-24 -rotate-5 bg-tape/55 clip-torn-tape group-even:right-8 group-even:left-auto group-even:rotate-6"
      />
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} (opens in a new tab)`}
        className="group/link block"
      >
        <p className="mb-3 text-xs text-muted">{project.noteLabel}</p>
        <h3 className="mb-5 max-w-sm font-hand text-4xl font-semibold text-pencil">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-5 text-xs leading-relaxed text-muted">
          <span className="mb-0.5 block font-hand text-xl font-medium">
            made with
          </span>
          {project.stack.join(" / ")}
        </p>
        {project.award && (
          <p className="mt-5 w-fit -rotate-2 border border-dashed border-plum/60 px-3 py-2 text-xs leading-relaxed text-plum">
            {project.award}
          </p>
        )}
        <span className="mt-6 inline-flex items-center gap-3 font-hand text-2xl leading-snug font-medium text-plum underline decoration-1 underline-offset-4 group-hover/link:decoration-wavy group-hover/link:brightness-75">
          take a closer look <span aria-hidden="true">↗︎</span>
        </span>
      </a>
    </article>
  );
}
