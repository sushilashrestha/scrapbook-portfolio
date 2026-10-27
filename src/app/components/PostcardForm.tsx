"use client";

import type { FormEvent } from "react";
import { useId } from "react";
import { z } from "zod";

import { inkButton } from "@/components/ui/styles";
import { cn } from "@/lib/utils";

const postcardSchema = z.object({
  email: z.email("Please enter a valid email address.").max(254),
  message: z
    .string()
    .trim()
    .min(1, "Please write a message before opening your draft.")
    .max(4000),
});

const fieldStyles =
  "px-1 py-2.5 w-full min-w-0 text-base rounded-none border-0 border-b border-stitch bg-white/25 text-pencil placeholder:text-muted placeholder:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum md:text-sm";

export function PostcardForm({ recipient }: { recipient: string }) {
  const id = useId();

  function openDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const result = postcardSchema.safeParse(
      Object.fromEntries(new FormData(form)),
    );

    if (!result.success) {
      for (const issue of result.error.issues) {
        showFieldError(form, String(issue.path[0]), issue.message);
      }
      form.reportValidity();
      return;
    }

    const { email, message } = result.data;
    const subject = encodeURIComponent(`Portfolio enquiry from ${email}`);
    const body = encodeURIComponent(`Reply to: ${email}\r\n\r\n${message}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="mt-6" onSubmit={openDraft} aria-label="Write a message">
      <div className="mb-5 flex flex-col gap-2">
        <label htmlFor={`${id}-email`} className="text-xs font-medium">
          Your email
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          maxLength={254}
          required
          onInput={clearFieldError}
          className={cn(fieldStyles, "leading-relaxed")}
        />
      </div>
      <div className="mb-5 flex flex-col gap-2">
        <label htmlFor={`${id}-message`} className="text-xs font-medium">
          Your message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={4}
          placeholder="An idea, a project, or just a hello…"
          maxLength={4000}
          required
          onInput={clearFieldError}
          className={cn(
            fieldStyles,
            "max-h-105 min-h-29 resize-y paper-postcard-lines pt-px leading-7",
          )}
        />
      </div>
      <button className={inkButton} type="submit">
        Open email draft <span aria-hidden="true">↗︎</span>
      </button>
    </form>
  );
}

function showFieldError(form: HTMLFormElement, name: string, message: string) {
  const field = form.elements.namedItem(name);
  if (
    field instanceof HTMLInputElement ||
    field instanceof HTMLTextAreaElement
  ) {
    field.setCustomValidity(message);
  }
}

function clearFieldError(
  event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
) {
  event.currentTarget.setCustomValidity("");
}
