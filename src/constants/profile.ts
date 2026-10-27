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

export type SocialIconName =
  "github" | "linkedin" | "instagram" | "x" | "facebook";

export const socialLinks: {
  label: string;
  icon: SocialIconName;
  href: string;
}[] = [
  {
    label: "GitHub",
    icon: "github",
    href: "https://github.com/sushilashrestha",
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/sushilashrestha",
  },
  {
    label: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/__susshhiii__/",
  },
  { label: "X (Twitter)", icon: "x", href: "https://twitter.com/_sushhi_" },
  {
    label: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/sushhi.01",
  },
];

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
