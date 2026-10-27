export type ExperienceEntry = {
  title: string;
  place: string;
  when: string;
  note: string;
};

export type EducationEntry = Omit<ExperienceEntry, "note">;

export const experience: ExperienceEntry[] = [
  {
    title: "Frontend Engineer",
    place: "VEEL · Kathmandu",
    when: "Aug 2025 – now",
    note: "Build and maintain production interfaces with React and TypeScript. Work with designers and backend engineers to develop, test, and ship product features.",
  },
  {
    title: "Frontend Intern",
    place: "VEEL · Kathmandu",
    when: "May – Jul 2025",
    note: "Built UI components and improved the product interface as part of the frontend team.",
  },
  {
    title: "Volunteer",
    place: "LOCUS Open Source Team",
    when: "Dec 2024",
    note: "Built and maintained the team's official website with React and Tailwind CSS.",
  },
  {
    title: "Organizer",
    place: "Hack The Circle",
    when: "Nov – Dec 2024",
    note: "Built the official hackathon website with React and Tailwind CSS, working with the team on functionality and design requirements.",
  },
  {
    title: "Frontend Developer",
    place: "AR Treasure Hunt",
    when: "Oct – Dec 2024",
    note: "Developed a responsive, interactive website with React and Tailwind CSS. Collaborated with the team to meet project milestones.",
  },
];

export const education: EducationEntry[] = [
  {
    title: "Bachelor's in Computer Engineering",
    place: "Khwopa College of Engineering (TU) · Bhaktapur",
    when: "2021 – 2025",
  },
  {
    title: "NEB (+2)",
    place: "United Academy",
    when: "2018 – 2020",
  },
];
