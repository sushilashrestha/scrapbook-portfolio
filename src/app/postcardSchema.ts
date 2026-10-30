import { z } from "zod";

export const stampOptions = ["hello", "thank you", "let's build"] as const;

export const postcardSchema = z.object({
  stamp: z.enum(stampOptions, "Please pick a stamp."),
  email: z.email("Please enter a valid email address.").max(254),
  message: z
    .string()
    .trim()
    .min(1, "Please write a message before sending.")
    .max(4000),
});

export type Postcard = z.infer<typeof postcardSchema>;

export type PostcardState =
  | { status: "idle" }
  | { status: "sent" }
  | { status: "failed"; message: string };
