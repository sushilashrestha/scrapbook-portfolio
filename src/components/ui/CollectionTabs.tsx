"use client";

// Adapted from haassiib's Tabs on 21st.dev (MIT, Copyright 2026 96 Group).
// https://21st.dev/@haassiib/components/tabs-roving-focus
// License: /THIRD_PARTY_NOTICES.md
import { useId, useRef, type KeyboardEvent, type ReactNode } from "react";

type CollectionTabsProps = {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
  label?: string;
};

export function CollectionTabs({ options, value, onChange, children, label = "Project categories" }: CollectionTabsProps) {
  const id = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const selected = options.indexOf(value);

  function handleKey(event: KeyboardEvent<HTMLDivElement>) {
    let next = selected;
    if (event.key === "ArrowRight") next = (selected + 1) % options.length;
    else if (event.key === "ArrowLeft") next = (selected - 1 + options.length) % options.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = options.length - 1;
    else return;
    event.preventDefault();
    onChange(options[next]);
    buttons.current[next]?.focus();
  }

  return (
    <div>
      <div className="collection-tabs" role="tablist" aria-label={label} onKeyDown={handleKey}>
        {options.map((option, index) => (
          <button
            type="button"
            key={option}
            ref={element => { buttons.current[index] = element; }}
            id={`${id}-tab-${index}`}
            role="tab"
            aria-selected={value === option}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={value === option ? 0 : -1}
            onClick={() => onChange(option)}
          >{option}</button>
        ))}
      </div>
      <div role="tabpanel" id={`${id}-panel-${selected}`} aria-labelledby={`${id}-tab-${selected}`} tabIndex={0}>
        {children}
      </div>
    </div>
  );
}
