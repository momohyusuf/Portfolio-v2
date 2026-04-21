export interface Achievement {
  id: number;
  title: string;
  organiser: string;
  description: string;
  tag: "hackathon" | "training" | "award";
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Hackathon Top 10 Finalist",
    organiser: "Pipeops",
    description:
      "Built an AI web app to assist students in Nigeria preparing for their WAEC, NECO, and JAMB examinations.",
    tag: "hackathon",
  },
  {
    id: 2,
    title: "Hackathon Winner",
    organiser: "Google Developer Group",
    description:
      "Developed a tool to help businesses automate content posting to all their social accounts at once.",
    tag: "hackathon",
  },
  {
    id: 3,
    title: "Nigeria Air Force Training Lead",
    organiser: "Gomycode",
    description:
      "Successfully led a comprehensive web development training programme for IT experts from the Nigeria Air Force.",
    tag: "training",
  },
];
