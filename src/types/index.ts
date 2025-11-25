export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  about: string[];
  email: string;
  linkedin: string;
  github: string;
  profileImage: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}



export interface SectionRefs {
  hero: React.RefObject<HTMLElement>;
  about: React.RefObject<HTMLElement>;
  projects: React.RefObject<HTMLElement>;
  skills: React.RefObject<HTMLElement>;
  contact: React.RefObject<HTMLElement>;
}