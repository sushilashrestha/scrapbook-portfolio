export type Project = {
  slug: string;
  category: "Web & interfaces" | "AI & experiments";
  noteLabel: string;
  title: string;
  summary: string;
  stack: string[];
  href: string;
  award?: string;
};

export const projects: Project[] = [
  {
    slug: "tourist-recommender",
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
    category: "Web & interfaces",
    noteLabel: "an interactive event website",
    title: "AR Treasure Hunt",
    summary:
      "A responsive, interactive website for an augmented-reality treasure hunt, shipped on a tight event deadline.",
    stack: ["React", "Tailwind"],
    href: "https://github.com/sushilashrestha/theWebsite",
  },
];
