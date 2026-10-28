import { z } from "zod";

export const postcardSchema = z.object({
  email: z.email("Please enter a valid email address.").max(254),
  message: z
    .string()
    .trim()
    .min(1, "Please write a message before sending.")
    .max(4000),
});

export type PostcardState =
  | { status: "idle" }
  | { status: "sent" }
  | { status: "failed"; message: string };
