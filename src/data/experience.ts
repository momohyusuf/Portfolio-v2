export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Fullstack Engineer",
    company: "Your Company Name",
    period: "2023 — Present",
    description: [
      "Replace this with your actual achievement or responsibility.",
      "Replace this with another key contribution or impact.",
      "Replace this with a measurable result or technology highlight.",
    ],
  },
  {
    id: 2,
    role: "Fullstack Engineer",
    company: "Your Previous Company",
    period: "2021 — 2023",
    description: [
      "Replace this with your actual achievement or responsibility.",
      "Replace this with another key contribution or impact.",
      "Replace this with a measurable result or technology highlight.",
    ],
  },
  {
    id: 3,
    role: "Junior Backend Developer",
    company: "Your Earlier Company",
    period: "2019 — 2021",
    description: [
      "Replace this with your actual achievement or responsibility.",
      "Replace this with another key contribution or impact.",
    ],
  },
];
