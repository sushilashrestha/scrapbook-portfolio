"use client";

import type { FormEvent } from "react";
import { useId, useState, useTransition } from "react";

import { inkButton } from "@/components/ui/styles";
import { cn } from "@/lib/utils";

import type { PostcardState } from "../postcardSchema";
import { postcardSchema } from "../postcardSchema";
import { sendPostcard } from "../sendPostcard";
import { StampPicker } from "./StampPicker";

const initialState: PostcardState = { status: "idle" };

const fieldStyles =
  "px-1 py-2.5 w-full min-w-0 text-base rounded-none border-0 border-b border-stitch bg-white/25 text-pencil placeholder:text-muted placeholder:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum md:text-sm";

export function PostcardForm() {
  const id = useId();
  const [state, setState] = useState(initialState);
  const [isSending, startSending] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = postcardSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      for (const issue of result.error.issues) {
        showFieldError(form, String(issue.path[0]), issue.message);
      }
      form.reportValidity();
      return;
    }

    startSending(async () => {
      const nextState = await sendPostcard(formData);
      setState(nextState);
      if (nextState.status === "sent") form.reset();
    });
  }

  return (
    <form className="mt-5" onSubmit={handleSubmit} aria-label="Write a message">
      <StampPicker />
      <div className="mb-4 flex flex-col gap-1.5">
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
      <div className="mb-4 flex flex-col gap-1.5">
        <label htmlFor={`${id}-message`} className="text-xs font-medium">
          Your message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={3}
          placeholder="An idea, a project, or just a hello…"
          maxLength={4000}
          required
          onInput={clearFieldError}
          className={cn(
            fieldStyles,
            "max-h-105 min-h-21 resize-y paper-postcard-lines pt-px leading-7",
          )}
        />
      </div>
      <button
        className={cn(inkButton, "disabled:cursor-wait disabled:opacity-70")}
        type="submit"
        disabled={isSending}
      >
        {isSending ? "Sending…" : "Send postcard"}{" "}
        <span aria-hidden="true">↗︎</span>
      </button>
      <p aria-live="polite" className="mt-3 text-xs text-muted">
        {describeStatus(state)}
      </p>
    </form>
  );
}

function describeStatus(state: PostcardState) {
  switch (state.status) {
    case "idle":
      return "";
    case "sent":
      return "Thank you! Your note is on its way ♡";
    case "failed":
      return state.message;
  }
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
