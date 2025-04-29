
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio website built with React, Tailwind CSS, and Framer Motion animations.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoLink: "#",
    codeLink: "https://github.com/yourusername/portfolio"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    demoLink: "#",
    codeLink: "https://github.com/yourusername/ecommerce"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather forecast app that provides current conditions and 5-day forecasts.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["JavaScript", "HTML/CSS", "OpenWeather API"],
    demoLink: "#",
    codeLink: "https://github.com/yourusername/weather-app"
  }
];
