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
      "My final-year project: personalised recommendations for tourists, pairing Neural Collaborative Filtering with DistilBERT so it understands what places are actually like.",
    stack: ["Python", "PyTorch", "NCF", "DistilBERT"],
    href: "https://github.com/Prashamsaaa/Tourist-Attraction-Recommendation-System",
  },
  {
    slug: "junu",
    category: "AI & experiments",
    noteLabel: "a hackathon project",
    title: "JUNU voice assistant",
    summary:
      "An AI voice assistant that helps citizens find their way through government office services. I built the frontend.",
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
      "A transformer model that reads beauty-product reviews and works out how people really felt.",
    stack: ["Python", "Transformers", "NLP"],
    href: "https://github.com/sushilashrestha/Sentiment-Analysis-Using-Transformer",
  },
  {
    slug: "hult-prize",
    category: "Web & interfaces",
    noteLabel: "built for Hult Prize at KhCE",
    title: "Hult Prize at KhCE",
    summary:
      "A responsive event site with interactive navigation, tuned for both phones and desktops.",
    stack: ["React", "TypeScript", "Tailwind"],
    href: "https://hultprize.khwopa.edu.np/",
  },
  {
    slug: "hack-the-circle",
    category: "Web & interfaces",
    noteLabel: "made with the event team",
    title: "Hack The Circle",
    summary:
      "The official hackathon website, built hand-in-hand with the designers to get every graphic just right.",
    stack: ["React", "Tailwind"],
    href: "https://hackthecircle.khec.edu.np/",
  },
  {
    slug: "ar-treasure-hunt",
    category: "Web & interfaces",
    noteLabel: "an interactive event website",
    title: "AR Treasure Hunt",
    summary:
      "A responsive, interactive website for an augmented-reality treasure hunt, shipped on a tight event deadline.",
    stack: ["React", "Tailwind"],
    href: "https://arth24.tech/",
  },
];
