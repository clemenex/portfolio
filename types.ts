export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  features?: string[];
  screenshots?: string[];
  tags: string[];
  link?: string;
  codeLink?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: React.ReactNode;
}