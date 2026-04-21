export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  tags: string[];
  url: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "RelaExpress",
    role: "Built the entire backend",
    description:
      "Same-day errand & delivery platform based in London. Connects users with verified riders for personal errands, store collections, and business deliveries — with live tracking, real-time rider assignment, and secure payments.",
    tags: ["Node.js", "REST API", "Real-time", "Payments", "Logistics"],
    url: "https://relaexpress.com",
    gradient: "linear-gradient(135deg, #1a1a0a 0%, #2a2a00 100%)",
  },
  {
    id: 2,
    title: "MyDocki",
    role: "Built the entire backend",
    description:
      "Telemedicine platform shaping healthcare across Africa. Unites doctor consultations (video/voice), pharmacy services, lab tests, and healthy meal delivery — all in one seamless app.",
    tags: ["Node.js", "WebRTC", "Healthcare API", "Auth", "Next.js"],
    url: "https://mydocki.com",
    gradient: "linear-gradient(135deg, #0a1a12 0%, #002a14 100%)",
  },
  {
    id: 3,
    title: "Starkweb Technologies",
    role: "Built the frontend",
    description:
      "Web technology company in Nigeria offering web dev, mobile apps, training, and design. Serves clients across e-commerce, fintech, healthtech, and edutech domains.",
    tags: ["React", "TypeScript", "UI/UX", "Responsive", "Performance"],
    url: "https://starkwebtechnologies.com",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #0a0028 100%)",
  },
];
