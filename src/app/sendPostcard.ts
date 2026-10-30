"use server";

import { profile } from "@/constants/profile";

import type { PostcardState } from "./postcardSchema";
import { renderPostcardEmail, renderPostcardText } from "./postcardEmail";
import { postcardSchema } from "./postcardSchema";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const SENDER = "Portfolio <onboarding@resend.dev>";

export async function sendPostcard(formData: FormData): Promise<PostcardState> {
  const result = postcardSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    return {
      status: "failed",
      message: "Please check your stamp, email and message.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set; cannot send postcard email.");
  }

  const postcard = result.data;
  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: SENDER,
      to: profile.email,
      reply_to: postcard.email,
      subject: `A "${postcard.stamp}" postcard from ${postcard.email}`,
      html: renderPostcardEmail(postcard),
      text: renderPostcardText(postcard),
    }),
  });

  if (!response.ok) {
    return {
      status: "failed",
      message: "Your note couldn't be sent. Please try again in a moment.",
    };
  }

  return { status: "sent" };
}
