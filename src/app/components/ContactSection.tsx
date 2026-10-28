import { HandwrittenAccent } from "@/components/ui/HandwrittenAccent";
import { PageSection } from "@/components/ui/PageSection";
import { PressedLavender } from "@/components/ui/PressedLavender";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { profile, socialLinks } from "@/constants/profile";
import { cn } from "@/lib/utils";

import { PostcardForm } from "./PostcardForm";

const stampTilts = [
  "-rotate-6",
  "rotate-3",
  "-rotate-2",
  "rotate-6",
  "-rotate-3",
];

export function ContactSection() {
  return (
    <PageSection id="contact">
      <div
        className={cn(
          "reveal relative mx-auto grid max-w-4xl -rotate-1 grid-cols-1 border border-line bg-sheet px-6 py-8 shadow-paper",
          "before:pointer-events-none before:absolute before:inset-2.5 before:border before:border-dashed before:border-stitch",
          "md:grid-cols-2 md:p-8",
        )}
      >
        <PostcardMessage />
        <div className="relative mt-7 pt-20 md:mt-0 md:pl-8">
          <PostageStamp />
          <p className="font-hand text-xl font-medium text-muted">
            a little note to sushi
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="block border-b border-line py-2.5 text-sm wrap-anywhere hover:text-plum"
          >
            {profile.email} ↗︎
          </a>
          <PostcardForm />
        </div>
      </div>
    </PageSection>
  );
}

function PostcardMessage() {
  return (
    <div className="border-b border-dashed border-line pb-6 md:border-r md:border-b-0 md:border-stitch md:pr-8 md:pb-0">
      <h2 className="mb-4 text-3xl leading-tight md:text-4xl">
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
      <SocialStamps />
    </div>
  );
}

function PostageStamp() {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-2 right-0 flex h-22 w-17 rotate-8 flex-col items-center border-4 border-dotted border-sheet bg-lilac outline outline-line"
    >
      <span className="font-hand text-lg leading-none font-medium text-plum">
        hello
      </span>
      <PressedLavender sizes="48px" className="h-15 w-11" />
    </span>
  );
}

function SocialStamps() {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {socialLinks.map((link, index) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${link.label} (opens in a new tab)`}
            title={link.label}
            className={cn(
              "flex size-8 items-center justify-center rounded-full border border-dashed border-stitch bg-sheet text-pencil transition duration-200 hover:-translate-y-0.5 hover:rotate-0 hover:border-plum hover:text-plum focus-visible:outline-offset-2",
              stampTilts[index % stampTilts.length],
            )}
          >
            <SocialIcon name={link.icon} className="size-3.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
