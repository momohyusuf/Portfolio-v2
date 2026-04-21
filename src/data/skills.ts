export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Authentication",
    ],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "Docker", "CI/CD", "AWS", "Linux", "Postman"],
  },
];
