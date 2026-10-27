import { PageSection } from "@/components/ui/PageSection";
import { achievements } from "@/constants/achievements";

export function AwardsSection() {
  return (
    <PageSection id="gold-stars">
      <p className="mb-8 font-hand text-2xl font-medium text-plum">
        a few proud moments
      </p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {achievements.map((item) => (
          <article
            key={item.detail}
            className="reveal -rotate-2 border border-dashed border-stitch bg-sand px-3 py-4.5 even:rotate-2 even:bg-lilac md:px-4 md:py-5.5"
          >
            <h3 className="mb-1.5 font-hand text-2xl leading-tight font-medium">
              {item.title}
            </h3>
            <p className="text-xs leading-relaxed text-muted">
              {item.detail.replace(" — ", " / ")}
            </p>
            {item.year && (
              <span className="mt-2 block text-xs text-plum">{item.year}</span>
            )}
          </article>
        ))}
      </div>
    </PageSection>
  );
}
