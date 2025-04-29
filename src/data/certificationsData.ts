
interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string; 
  credentialLink?: string;
}

export const certificationsData: Certification[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Udacity",
    date: "June 2023",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    credentialLink: "https://www.udacity.com/verify/credentials"
  },
  {
    id: 2,
    title: "Advanced React & Redux",
    issuer: "Udemy",
    date: "November 2023",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    credentialLink: "https://www.udemy.com/certificate/"
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    credentialLink: "https://aws.amazon.com/certification/verify/"
  }
];
