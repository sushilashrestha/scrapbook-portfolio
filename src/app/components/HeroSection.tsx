import Image from "next/image";

import photo from "@/assets/profile.png";
import { HeadlineEmphasis } from "@/components/ui/HeadlineEmphasis";
import { PaperTape } from "@/components/ui/PaperTape";
import { PressedLavender } from "@/components/ui/PressedLavender";
import { inkButton } from "@/components/ui/styles";
import { profile } from "@/constants/profile";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <header
      id="home"
      className={cn(
        "relative mx-auto mt-5 mb-16 grid max-w-5xl grid-cols-1 items-center gap-10 rounded-sm border border-line bg-sheet paper-hero-grid px-6 pt-12 pb-16 shadow-page-stack",
        "md:mt-6 md:mb-24 md:min-h-140 md:grid-cols-2 md:gap-8 md:px-10 md:pt-15 md:pb-20",
        "lg:px-15 lg:pt-16",
      )}
    >
      <span className="absolute -top-4 left-3 -rotate-3 bg-lilac px-3.5 py-1 font-hand text-xl font-medium text-plum shadow-sm md:left-10 md:px-6 md:text-2xl">
        a little scrapbook of my life &amp; work
      </span>
      <HeroIntro />
      <HeroCollage />
      <div className="absolute inset-x-5 bottom-6 flex justify-between text-xs text-muted md:right-8 md:left-10">
        <span>{profile.location}</span>
        <span>Currently building @ VEEL</span>
        <span
          aria-hidden="true"
          className="hidden text-xl leading-none text-plum md:block"
        >
          ♡
        </span>
      </div>
    </header>
  );
}

function HeroIntro() {
  return (
    <div className="motion-safe:animate-rise">
      <p className="mb-5 -rotate-3 font-hand text-3xl font-medium text-plum">
        hello, internet. i&apos;m sushi!
      </p>
      <h1 className="mb-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
        A little code.
        <br />A lot of <HeadlineEmphasis>heart.</HeadlineEmphasis>
      </h1>
      <p className="text-sm leading-loose text-muted">
        {profile.role}.<br />
        Building production features with React
        <br /> and TypeScript, alongside a product team.
      </p>
      <a className={cn(inkButton, "mt-7")} href="#work">
        Explore my work <span aria-hidden="true">↗︎</span>
      </a>
    </div>
  );
}

function HeroCollage() {
  return (
    <div className="relative isolate w-full pt-2.5 pb-28 motion-safe:animate-rise-late md:w-auto md:pt-2 md:pb-15">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 h-74 w-56 max-w-full -translate-x-1/2 -rotate-7 border border-line bg-sand md:h-75 md:w-59 lg:h-84 lg:w-68"
      />
      <PressedLavender
        sizes="145px"
        className="absolute -top-4 -right-6 z-10 h-56 w-29 rotate-18 md:-top-8 md:-right-9 md:h-68 md:w-30 lg:-right-12 lg:w-36"
      />
      <figure className="relative mx-auto w-56 max-w-full rotate-5 bg-polaroid px-3 pt-3 shadow-md md:w-58 lg:w-66">
        <PaperTape className="left-1/2 -rotate-10" />
        <Image
          src={photo}
          alt="Sushila smiling and making a peace sign"
          sizes="(max-width: 640px) 240px, 300px"
          preload
          className="aspect-square w-full object-cover sepia-13"
        />
        <figcaption className="flex items-center justify-around pt-3 pb-3.5 font-hand text-2xl font-medium text-pencil">
          Sushila Shrestha <span className="text-3xl text-plum">♡</span>
        </figcaption>
      </figure>
      <KeepsakeNote />
    </div>
  );
}

function KeepsakeNote() {
  return (
    <aside
      className={cn(
        "absolute bottom-0 left-0 w-41 -rotate-6 bg-butter px-4.5 py-4 text-pencil shadow-sm clip-torn-bottom",
        "md:-bottom-6 md:-left-4.5 md:w-40 md:px-5 md:py-4.5 lg:-left-10 lg:w-45",
      )}
    >
      <span className="font-hand text-xl font-medium text-muted">
        a note to self
      </span>
      <p className="mt-2 font-hand text-xl leading-tight md:text-2xl">
        Keep learning.
        <br />
        Keep making
        <br />
        things
        <br />
        that feel like you.
      </p>
    </aside>
  );
}
