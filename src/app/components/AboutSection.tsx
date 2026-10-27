import Image from "next/image";

import aboutPhoto from "@/assets/about.png";
import { HandwrittenAccent } from "@/components/ui/HandwrittenAccent";
import { PageSection } from "@/components/ui/PageSection";
import { PaperTape } from "@/components/ui/PaperTape";
import { PressedLavender } from "@/components/ui/PressedLavender";
import { profile, skillGroups } from "@/constants/profile";

import { Toolbox } from "./Toolbox";

export function AboutSection() {
  return (
    <PageSection
      id="about"
      className="grid grid-cols-1 items-center gap-10 pt-4 md:grid-cols-2 md:gap-12 lg:gap-x-20 lg:gap-y-14"
    >
      <div className="reveal relative isolate m-auto w-9/10 max-w-sm py-5 md:m-0 md:w-auto md:max-w-none">
        <PressedLavender
          sizes="145px"
          className="absolute -bottom-5 -left-8 z-10 h-52 w-28 -rotate-17 md:-left-13 md:h-65 md:w-36"
        />
        <figure className="relative -rotate-4 bg-polaroid px-3 pt-3 shadow-md">
          <PaperTape className="left-1/2 -rotate-5" />
          <Image
            src={aboutPhoto}
            alt="Sushila standing beneath a flowering tree"
            sizes="(max-width: 768px) 85vw, 420px"
            className="h-82 w-full object-cover md:h-85"
          />
          <figcaption className="pt-3.5 pb-4 text-center font-hand text-2xl font-medium text-pencil">
            a little sunshine, somewhere in Nepal
          </figcaption>
        </figure>
      </div>
      <div className="reveal md:py-6">
        <h2 className="mb-6 text-4xl leading-tight">
          Hi, I&apos;m Sushila.
          <br />
          <HandwrittenAccent>Sushi works, too.</HandwrittenAccent>
        </h2>
        <p className="mb-5 text-sm leading-loose text-muted">{profile.bio}</p>
        <p className="mb-5 text-sm leading-loose text-muted">
          {profile.engineeringFocus}
        </p>
      </div>
      <Toolbox groups={skillGroups} />
    </PageSection>
  );
}
