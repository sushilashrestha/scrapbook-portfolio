import { AboutSection } from "./components/AboutSection";
import { AwardsSection } from "./components/AwardsSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { JourneySection } from "./components/JourneySection";
import { LibrarySection } from "./components/LibrarySection";
import { RevealObserver } from "./components/RevealObserver";
import { WorkSection } from "./components/WorkSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <JourneySection />
      <AwardsSection />
      <LibrarySection />
      <ContactSection />
      <RevealObserver />
    </>
  );
}
