import type { StaticImageData } from "next/image";

import beforeIKnewILovedYouCover from "@/assets/books/before-i-knew-i-loved-you.jpg";
import beforeTheCoffeeGetsColdCover from "@/assets/books/before-the-coffee-gets-cold.jpg";
import beforeWeForgetKindnessCover from "@/assets/books/before-we-forget-kindness.jpg";
import beforeWeSayGoodbyeCover from "@/assets/books/before-we-say-goodbye.jpg";
import beforeYourMemoryFadesCover from "@/assets/books/before-your-memory-fades.jpg";
import ikigaiCover from "@/assets/books/ikigai.jpg";
import makeYourBedCover from "@/assets/books/make-your-bed.jpg";
import talesFromTheCafeCover from "@/assets/books/tales-from-the-cafe.jpg";

export type Book = {
  slug: string;
  title: string;
  author: string;
  genre: string;
  color: "sage" | "lavender" | "rose";
  overview: string;
  notes?: string;
  spoilerNotes?: string;
  rating?: number;
  volume?: number;
  cover?: StaticImageData;
  pagesRead?: { current: number; total: number };
};

export const books: Book[] = [
  {
    slug: "ikigai",
    cover: ikigaiCover,
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    genre: "Wellbeing",
    color: "sage",
    overview:
      "The Japanese idea of a reason for being, drawn from the everyday habits of Okinawa's long-lived residents.",
  },
  {
    slug: "before-the-coffee-gets-cold",
    cover: beforeTheCoffeeGetsColdCover,
    volume: 1,
    title: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    genre: "Magical realism",
    color: "lavender",
    overview:
      "In a small Tokyo café, customers can travel back in time, but only until their coffee gets cold.",
  },
  {
    slug: "tales-from-the-cafe",
    cover: talesFromTheCafeCover,
    volume: 2,
    title: "Tales from the Cafe",
    author: "Toshikazu Kawaguchi",
    genre: "Magical realism",
    color: "rose",
    overview:
      "More visitors to the Funiculi Funicula café return to the people and moments they can't let go of.",
  },
  {
    slug: "before-your-memory-fades",
    cover: beforeYourMemoryFadesCover,
    volume: 3,
    title: "Before Your Memory Fades",
    author: "Toshikazu Kawaguchi",
    genre: "Magical realism",
    color: "sage",
    overview:
      "The story moves to a sister café in Hakodate, where new travellers revisit what they left unsaid.",
  },
  {
    slug: "before-we-say-goodbye",
    cover: beforeWeSayGoodbyeCover,
    volume: 4,
    title: "Before We Say Goodbye",
    author: "Toshikazu Kawaguchi",
    genre: "Magical realism",
    color: "lavender",
    overview:
      "Four more stories from the Tokyo café about love, regret, and saying goodbye properly.",
  },
  {
    slug: "before-we-forget-kindness",
    cover: beforeWeForgetKindnessCover,
    volume: 5,
    title: "Before We Forget Kindness",
    author: "Toshikazu Kawaguchi",
    genre: "Magical realism",
    color: "rose",
    overview:
      "New guests at the café go back to the moments that taught them about kindness and loss.",
  },
  {
    slug: "before-i-knew-i-loved-you",
    cover: beforeIKnewILovedYouCover,
    volume: 6,
    title: "Before I Knew I Loved You",
    author: "Toshikazu Kawaguchi",
    genre: "Magical realism",
    color: "sage",
    overview:
      "The sixth visit to the café, with more stories of love and memory across time.",
  },
  {
    slug: "make-your-bed",
    cover: makeYourBedCover,
    title: "Make Your Bed",
    author: "William H. McRaven",
    genre: "Personal growth",
    color: "lavender",
    overview:
      "A Navy SEAL admiral's ten life lessons from training, built on his well-known commencement speech.",
  },
];
