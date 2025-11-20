export interface About {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}

export interface Education {
  name: string;
  course: string;
  start_date: string;
  end_date: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface User {
  name: string;
  email: string;
  linkedIn_account: string;
  education: Education[];
  about: About;
  skills: SkillGroup[];
}

export interface Project {
  id: string;
  title: string;
  timeline: string;
  description: string;
  technologies: string[];
  codebase: string;
}

export interface ZustandPortfolioData {
  user: User | null;
  projects: Project[] | null;
  setUser: (user: User) => void;
  setProjects: (projects: Project[]) => void;
}