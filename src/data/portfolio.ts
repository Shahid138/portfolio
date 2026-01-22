import { Project, SkillCategory, About } from '../types';

export const portfolioData: About = {
  name: "Shahid",
  title: "Full-Stack Developer",
  bio: "I build accessible, pixel-perfect, performant, and engaging digital experiences for the web.",
  email: "shahidsaifi138@gmail.com",
  github: "https://github.com/Shahid138",
  linkedin: "https://www.linkedin.com/in/shahid-saifi/",
  twitter: "https://twitter.com/example",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment processing, inventory management, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/example/project1",
    liveUrl: "https://project1.com",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and drag-and-drop interface.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    githubUrl: "https://github.com/example/project2",
    liveUrl: "https://project2.com",
    featured: true,
  },
  {
    id: "3",
    title: "AI Image Generator",
    description: "Web application that uses machine learning models to generate images from text descriptions.",
    technologies: ["Python", "Flask", "React", "TensorFlow"],
    githubUrl: "https://github.com/example/project3",
    liveUrl: "https://project3.com",
    featured: true,
  },
];

export const skills: SkillCategory[] = [
  {
    id: "1",
    category: "Languages",
    skills: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "Python", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    id: "2",
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    id: "3",
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    id: "4",
    category: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 70 },
    ],
  },
];
