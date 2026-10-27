export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  href: string;
  award?: string;
};

export const projects: Project[] = [
  {
    slug: "tourist-recommender",
    title: "Tourist Attraction Recommender",
    summary:
      "My final-year project: personalised recommendations for tourists, pairing Neural Collaborative Filtering with DistilBERT so it understands what places are actually like.",
    stack: ["Python", "PyTorch", "NCF", "DistilBERT"],
    href: "https://github.com/Prashamsaaa/Tourist-Attraction-Recommendation-System",
  },
  {
    slug: "junu",
    title: "JUNU",
    summary:
      "An AI voice assistant that helps citizens find their way through government office services. I built the frontend.",
    stack: ["React", "AI", "Voice"],
    href: "https://github.com/sushilashrestha/fullstop",
    award: "AI track winner · Semicolon Hackathon",
  },
  {
    slug: "sentiment-analysis",
    title: "Sentiment Analysis",
    summary:
      "A transformer model that reads beauty-product reviews and works out how people really felt.",
    stack: ["Python", "Transformers", "NLP"],
    href: "https://github.com/sushilashrestha/Sentiment-Analysis-Using-Transformer",
  },
  {
    slug: "hult-prize",
    title: "Hult Prize at KhCE",
    summary:
      "A responsive event site with interactive navigation, tuned for both phones and desktops.",
    stack: ["React", "TypeScript", "Tailwind"],
    href: "https://hultprize.khwopa.edu.np/",
  },
  {
    slug: "hack-the-circle",
    title: "Hack The Circle",
    summary:
      "The official hackathon website, built hand-in-hand with the designers to get every graphic just right.",
    stack: ["React", "Tailwind"],
    href: "https://hackthecircle.khec.edu.np/",
  },
  {
    slug: "ar-treasure-hunt",
    title: "AR Treasure Hunt",
    summary:
      "A responsive, interactive website for an augmented-reality treasure hunt, shipped on a tight event deadline.",
    stack: ["React", "Tailwind"],
    href: "https://arth24.tech/",
  },
];
