import type { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  category: "At work" | "Web & interfaces" | "AI & experiments";
  noteLabel: string;
  paper: "lined" | "grid" | "lilac" | "sage" | "peach";
  title: string;
  summary: string;
  stack: string[];
  href?: string;
  award?: string;
  image?: StaticImageData;
};

export const projects: Project[] = [
  {
    slug: "content-sites",
    paper: "peach",
    category: "At work",
    noteLabel: "dozens of pages, one design language",
    title: "Content-driven websites",
    summary:
      "Built page by page from a shared set of sections, rendered with Server Components from a headless CMS and kept fresh with ISR and on-demand revalidation.",
    stack: ["Next.js App Router", "Headless CMS", "ISR"],
  },
  {
    slug: "feature-work",
    paper: "grid",
    category: "At work",
    noteLabel: "features, end to end",
    title: "Feature implementations",
    summary:
      "Shipped product features from design to release: multi-step creation flows, AI-assisted search with filters, review and approval workflows, and payment history with search and sorting.",
    stack: ["React", "TanStack Start", "GraphQL", "Apollo Client"],
  },
  {
    slug: "component-library",
    paper: "lilac",
    category: "At work",
    noteLabel: "a shared component library",
    title: "Reusable UI components",
    summary:
      "Accessible, composable components like a custom video player with seek previews, chapters and keyboard shortcuts, plus animated tabs, sidebars and cards, each documented in Storybook and tested.",
    stack: ["Radix UI", "Storybook", "Vitest", "Tailwind"],
  },
  {
    slug: "payments-integrations",
    paper: "sage",
    category: "At work",
    noteLabel: "money and third-party APIs",
    title: "Payments and integrations",
    summary:
      "A Stripe checkout that runs inside an iframe and talks to its host over postMessage, plus subscriptions and social logins.",
    stack: ["Stripe Elements", "OAuth", "postMessage"],
  },
  {
    slug: "cms-tools",
    paper: "lined",
    category: "At work",
    noteLabel: "tools for the team",
    title: "CMS and admin tooling",
    summary:
      "Content collections, custom form fields, branded HTML emails with a live preview, and hooks that turn form submissions into records.",
    stack: ["Payload CMS", "TypeScript", "Unit tests"],
  },
  {
    slug: "tourist-recommender",
    paper: "lined",
    category: "AI & experiments",
    noteLabel: "from my final year",
    title: "Tourist Attraction Recommender",
    summary:
      "Built a personalised recommendation system using Neural Collaborative Filtering and DistilBERT, combining location descriptions with user ratings to predict tourist preferences.",
    stack: ["Python", "PyTorch", "NCF", "DistilBERT"],
    href: "https://github.com/Prashamsaaa/Tourist-Attraction-Recommendation-System",
  },
  {
    slug: "junu",
    paper: "lilac",
    category: "AI & experiments",
    noteLabel: "a hackathon project",
    title: "JUNU voice assistant",
    summary:
      "Developed the React frontend for an AI voice assistant that helps citizens navigate government services, building features to make those interactions easier.",
    stack: ["React", "AI", "Voice"],
    href: "https://github.com/Zdrlfx/fullstop",
    award: "AI track winner · Semicolon Hackathon",
  },
  {
    slug: "sentiment-analysis",
    paper: "sage",
    category: "AI & experiments",
    noteLabel: "an experiment with language",
    title: "Sentiment Analysis",
    summary:
      "Built a transformer-based model to classify sentiment in beauty-product reviews, applying natural language processing to understand the review text.",
    stack: ["Python", "Transformers", "NLP"],
    href: "https://github.com/sushilashrestha/Sentiment-Analysis-Using-Transformer",
  },
  {
    slug: "hult-prize",
    paper: "grid",
    category: "Web & interfaces",
    noteLabel: "built for Hult Prize at KhCE",
    title: "Hult Prize at KhCE",
    summary:
      "Designed and developed an event website with React and TypeScript, including interactive navigation and responsive layouts for mobile and desktop.",
    stack: ["React", "TypeScript", "Tailwind"],
    href: "https://github.com/sushilashrestha/hultprizeatkhce",
  },
  {
    slug: "hack-the-circle",
    paper: "lined",
    category: "Web & interfaces",
    noteLabel: "made with the event team",
    title: "Hack The Circle",
    summary:
      "Built the official hackathon website with React and Tailwind CSS, working with designers and the event team on interface requirements and site functionality.",
    stack: ["React", "Tailwind"],
    href: "https://github.com/sushilashrestha/hackthewebsite",
  },
  {
    slug: "ar-treasure-hunt",
    paper: "peach",
    category: "Web & interfaces",
    noteLabel: "an interactive event website",
    title: "AR Treasure Hunt",
    summary:
      "A responsive, interactive website for an augmented-reality treasure hunt, shipped on a tight event deadline.",
    stack: ["React", "Tailwind"],
    href: "https://github.com/sushilashrestha/theWebsite",
  },
];
