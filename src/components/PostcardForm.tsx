"use client";

import { useId, type FormEvent } from "react";

export function PostcardForm({ recipient }: { recipient: string }) {
  const id = useId();

  function openDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const messageField = form.elements.namedItem("message") as HTMLTextAreaElement;
    const emailField = form.elements.namedItem("email") as HTMLInputElement;
    const message = messageField.value.trim();
    messageField.setCustomValidity(message ? "" : "Please write a message before opening your draft.");
    if (!form.reportValidity()) return;

    const email = emailField.value.trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${email}`);
    const body = encodeURIComponent(`Reply to: ${email}\r\n\r\n${message}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="postcard-form" onSubmit={openDraft} aria-label="Write a message">
      <div className="postcard-field">
        <label htmlFor={`${id}-email`}>Your email</label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required />
      </div>
      <div className="postcard-field">
        <label htmlFor={`${id}-message`}>Your message</label>
        <textarea id={`${id}-message`} name="message" rows={4} placeholder="An idea, a project, or just a hello…" maxLength={4000} required onInput={event => event.currentTarget.setCustomValidity("")} />
      </div>
      <button className="ink-button" type="submit">Open email draft <span aria-hidden="true">↗︎</span></button>
    </form>
  );
}
