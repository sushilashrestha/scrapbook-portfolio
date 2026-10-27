import type { SkillGroup } from "@/constants/profile";
import { cn } from "@/lib/utils";

const cardTints = ["bg-sage", "bg-blush", "bg-butter", "bg-lilac", "bg-sand"];

export function Toolbox({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="reveal pt-6 md:col-span-2">
      <p className="mb-5 font-hand text-2xl font-medium text-plum">
        my development toolkit
      </p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-5 md:gap-4">
        {groups.map((group, index) => (
          <div
            key={group.label}
            className={cn(
              "-rotate-1 px-3.5 py-4 even:rotate-1",
              cardTints[index % cardTints.length],
            )}
          >
            <h3 className="mb-2 font-hand text-xl font-semibold">
              {group.label}
            </h3>
            <p className="text-xs leading-relaxed text-muted">
              {group.skills.join(" / ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
