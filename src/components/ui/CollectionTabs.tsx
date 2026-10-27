"use client";

import type { KeyboardEvent, ReactNode } from "react";
import { useId, useRef } from "react";

import { cn } from "@/lib/utils";

type CollectionTabsProps = {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
  label: string;
  className?: string;
};

export function CollectionTabs({
  options,
  value,
  onChange,
  children,
  label,
  className,
}: CollectionTabsProps) {
  const id = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const selected = options.indexOf(value);

  function handleKey(event: KeyboardEvent<HTMLDivElement>) {
    let next = selected;
    if (event.key === "ArrowRight") next = (selected + 1) % options.length;
    else if (event.key === "ArrowLeft")
      next = (selected - 1 + options.length) % options.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = options.length - 1;
    else return;
    event.preventDefault();
    onChange(options[next]);
    buttons.current[next]?.focus();
  }

  return (
    <div>
      <div
        className={cn("flex border-b border-dashed border-line", className)}
        role="tablist"
        aria-label={label}
        onKeyDown={handleKey}
      >
        {options.map((option, index) => (
          <button
            type="button"
            key={option}
            ref={(element) => {
              buttons.current[index] = element;
            }}
            id={`${id}-tab-${index}`}
            role="tab"
            aria-selected={value === option}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={value === option ? 0 : -1}
            onClick={() => onChange(option)}
            className="-mb-px min-h-11 cursor-pointer border-b-2 border-transparent px-1 pt-2.5 pb-3 text-xs whitespace-nowrap text-muted transition-colors hover:text-plum aria-selected:border-plum aria-selected:text-plum"
          >
            {option}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${id}-panel-${selected}`}
        aria-labelledby={`${id}-tab-${selected}`}
        tabIndex={0}
        className="focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-plum"
      >
        {children}
      </div>
    </div>
  );
}
