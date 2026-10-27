export const profile = {
  name: "Sushila Shrestha",
  role: "Frontend Engineer",
  tagline:
    "Computer Engineering graduate building production web interfaces with React and TypeScript.",
  bio: "I'm a Computer Engineering graduate and a frontend engineer at VEEL in Kathmandu. I build and maintain production web interfaces with React and TypeScript, collaborating with designers and backend engineers to develop, test, and ship product features.",
  engineeringFocus:
    "My toolkit includes REST, GraphQL, Resend, and Git. Alongside frontend work, I've built Python projects in recommendation systems and natural language processing.",
  location: "Kathmandu, Nepal",
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

export type SkillGroup = { label: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  },
  {
    label: "frontend",
    skills: ["React", "Next.js", "TanStack Start", "Tailwind CSS"],
  },
  { label: "APIs & integrations", skills: ["REST", "GraphQL", "Resend"] },
  {
    label: "ai / ml",
    skills: [
      "PyTorch",
      "Pandas",
      "Matplotlib",
      "BERT",
      "RAG",
      "Jupyter Notebook",
      "Google Colab",
    ],
  },
  { label: "tools", skills: ["Git", "Figma", "Canva"] },
];
