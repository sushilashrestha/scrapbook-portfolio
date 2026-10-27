import { HandwrittenAccent } from "@/components/ui/HandwrittenAccent";
import { PageSection } from "@/components/ui/PageSection";
import { PressedLavender } from "@/components/ui/PressedLavender";
import { profile, socialLinks } from "@/constants/profile";
import { cn } from "@/lib/utils";

import { PostcardForm } from "./PostcardForm";

export function ContactSection() {
  return (
    <PageSection id="contact">
      <div
        className={cn(
          "reveal relative grid -rotate-1 grid-cols-1 border border-line bg-sheet px-6 py-8 shadow-paper",
          "before:pointer-events-none before:absolute before:inset-2.5 before:border before:border-dashed before:border-stitch",
          "md:grid-cols-2 md:p-9 lg:p-10",
        )}
      >
        <PostcardMessage />
        <div className="relative mt-7 pt-26 md:mt-0 md:pl-10">
          <PostageStamp />
          <p className="font-hand text-2xl font-medium text-muted">
            a little note to sushi
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="block border-b border-line py-3 text-sm wrap-anywhere hover:text-plum md:text-base"
          >
            {profile.email} ↗︎
          </a>
          <PostcardForm recipient={profile.email} />
          <div className="flex flex-wrap gap-4 pt-5 text-xs">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-plum"
              >
                {link.label} ↗︎
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}

function PostcardMessage() {
  return (
    <div className="border-b border-dashed border-line pb-6 md:border-r md:border-b-0 md:border-stitch md:pr-9 md:pb-0">
      <h2 className="mb-5 text-4xl leading-tight lg:text-5xl">
        Let&apos;s make
        <br />
        something <HandwrittenAccent>lovely.</HandwrittenAccent>
      </h2>
      <p className="text-sm leading-relaxed text-muted md:text-xs">
        Have an idea, a project, or a good story?
        <br />
        I&apos;d love to hear it.
      </p>
      <p className="mt-5 font-hand text-2xl font-medium text-plum">
        with love, sushi ♡
      </p>
    </div>
  );
}

function PostageStamp() {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-2 right-0 flex h-27 w-20 rotate-8 flex-col items-center border-4 border-dotted border-sheet bg-lilac outline outline-line"
    >
      <span className="font-hand text-xl leading-none font-medium text-plum">
        hello
      </span>
      <PressedLavender sizes="60px" className="h-19 w-14" />
    </span>
  );
}
