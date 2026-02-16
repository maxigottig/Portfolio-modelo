
export interface Agency {
  id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  skills: Skill[];
  agencies: Agency[];
  projects: Project[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
