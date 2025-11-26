export interface Education {
  id: string;
  college_image: string;
  name: string;
  course: string;
  website: string;
  start_date: string;
  end_date: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface User {
  name: string;
  talent_description: string;
  email: string;
  resume: string;
  linkedIn_account: string;
  education: Education[];
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
  user: User;
  projects: Project[];
}