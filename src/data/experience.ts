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
    role: "Fullstack Engineer",
    company: "Barnksforte Technologies Limited",
    period: "2025 — Present",
    description: [
      "Delivered full-stack features for the Central Land Management Registration System (CLMRS), an enterprise-level platform developed for the Federal Ministry of Housing & Urban Development, supporting land registration and certificate of occupancy workflows",
      "Delivered full-stack features for the Enhanced Driver License Management System (EDLMS), an enterprise-level platform developed for the Federal Road Safety Corps (FRSC), supporting driver licensing and vehicle registration operations.",
      "Designed and developed Certificate of Occupancy (C of O) application architecture end-to-end",
      "Designed scalable database schemas for government-grade application workflows",
      "Collaborated with cross-functional teams to deliver production-ready features",
      "Delivered features within agile sprint cycles while maintaining clean and scalable code",
    ],
  },
  {
    id: 2,
    role: "Fullstack Instructor",
    company: "Gomycode",
    period: "2022 — 2025",
    description: [
      "Lead comprehensive web development training for IT experts from the Nigeria Air Force, covering key concepts in front-end web development",
      "Develop hands-on projects that reinforce theoretical concepts, leading to a 50% improvement in students’ practical coding skills within the first month",
      "Integrate cutting-edge technologies and industry best practices into the curriculum, ensuring students are equipped with the latest tools and methodologies.",
      "Provide personalised mentorship to 60+ trainees, resulting in an 50% success rate in students securing IT roles or advancing in their current role.",
      "Conduct daily code reviews and debugging sessions, improving code quality and reducing error rates by 80%.",
    ],
  },
  {
    id: 3,
    role: "Frontend Engineer",
    company: "Playa Music",
    period: "2023 — 2025",
    description: [
      "Collaborated on an AI-powered web application that enables users to generate personalized music playlists using natural language prompts, integrating with major streaming platforms like Spotify, YouTube Music, and Apple Music",
      "Achieved a 50% reduction in page load time by implementing performance best practices such as image optimization, code splitting, and the introduction of a content delivery network (CDN)",
      "Implemented OAuth 2.0 authentication flows for Spotify and Apple Music, allowing secure access and playlist creation in user accounts",
      "Led a redesign project that ensured consistency across devices and platforms, increasing mobile user engagement by 60% due to enhanced UI/UX",
      "Developed responsive and intuitive React.js frontend with Tailwind CSS, enabling users to input prompts, preview track lists, and redirect seamlessly to their chosen streaming platform.",
    ],
  },

  {
    id: 4,
    role: "Open Source Contributor",
    company: "Open source community Africa (OSCA)",
    period: "2020 — 2023",
    description: [
      "Contributed to multiple high-impact open source project focused on advancing technology education in Nigeria.",
      "Collaborated with a diverse team of 30+ global contributors leveraging Git and Github for efficient version control and code reviews.",
      "Utilized Github issues and notion to track and resolve bugs and feature requests",
      "Implemented industry practice for code quality and maintainability, drastically reducing bug reports after code refactoring",
    ],
  },
];
