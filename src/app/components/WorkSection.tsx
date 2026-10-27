import { HandwrittenAccent } from "@/components/ui/HandwrittenAccent";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { ProjectCollection } from "./ProjectCollection";

export function WorkSection() {
  return (
    <PageSection id="work">
      <SectionHeading>
        Made with <HandwrittenAccent>curiosity.</HandwrittenAccent>
      </SectionHeading>
      <ProjectCollection />
    </PageSection>
  );
}
