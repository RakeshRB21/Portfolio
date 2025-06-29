export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  gradient: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ChatResponse {
  text: string;
  delay?: number;
}