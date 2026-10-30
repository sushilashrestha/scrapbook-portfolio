import { cn } from "@/lib/utils";

import type { Postcard } from "../postcardSchema";
import { stampOptions } from "../postcardSchema";

const stampPaper: Record<Postcard["stamp"], string> = {
  hello: "bg-lilac -rotate-3",
  "thank you": "bg-sage rotate-2",
  "let's build": "bg-peach -rotate-1",
};

export function StampPicker() {
  return (
    <fieldset className="mb-5">
      <legend className="mb-3 text-xs font-medium">Pick a stamp</legend>
      <div className="flex flex-wrap gap-4">
        {stampOptions.map((stamp, index) => (
          <label
            key={stamp}
            className={cn(
              "flex h-22 w-17 cursor-pointer items-center justify-center border-4 border-dotted border-sheet p-1 text-center font-hand text-lg leading-none font-medium text-plum outline outline-line transition duration-200",
              "hover:-translate-y-0.5 has-checked:-translate-y-1 has-checked:rotate-0 has-checked:outline-2 has-checked:outline-plum has-focus-visible:outline-offset-4",
              stampPaper[stamp],
            )}
          >
            <input
              type="radio"
              name="stamp"
              value={stamp}
              defaultChecked={index === 0}
              className="sr-only"
            />
            {stamp}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
