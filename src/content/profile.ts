
export const profile = {
  name: "Sushila Shrestha",
  nickname: "sushi",
  role: "Frontend engineer, UI at heart",
  currently: "currently @ VEEL",
  tagline:
    "Nepal-rooted, design-driven. Weaving color, shape, and silence into visuals :)",
  bio: "I'm a junior frontend engineer at VEEL in Kathmandu, building production interfaces with React and TypeScript alongside designers and backend engineers. I care a little too much about the details — the spacing, the hover state, the empty screen nobody designed — and I've got a soft spot for AI/ML side quests.",
  location: "Kathmandu, Nepal",
  timezone: "GMT +5:45",
  email: "sushilasht22@gmail.com",
  cvHref: "/Sushila-Shrestha-CV.pdf",
} as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/sushilashrestha" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sushilashrestha" },
  { label: "Instagram", href: "https://www.instagram.com/__susshhh__/" },
  { label: "Twitter", href: "https://twitter.com/_sushhi_" },
  { label: "Facebook", href: "https://www.facebook.com/sushhi.01" },
] as const;

export const interests = ["Web development", "AI / ML", "Designing"] as const;

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  },
  {
    label: "frontend",
    skills: ["React", "Next.js", "TanStack Start", "Tailwind CSS"],
  },
  { label: "apis", skills: ["REST", "GraphQL", "Resend"] },
  {
    label: "ai / ml",
    skills: ["PyTorch", "Pandas", "Matplotlib", "BERT", "RAG", "Jupyter Notebook", "Google Colab"],
  },
  { label: "tools", skills: ["Git", "Figma", "Canva"] },
];
