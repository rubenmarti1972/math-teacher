export interface SocialLink {
  label: string;
  url: string;
  icon: 'linkedin' | 'youtube' | 'x' | 'github' | 'instagram';
}

export interface StudyArea {
  id: number;
  title: string;
  description: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
}

export interface Article {
  id: number;
  title: string;
  summary: string;
  area: string;
  readTime: string;
}

export interface VideoResource {
  id: number;
  title: string;
  provider: 'YouTube' | 'Vimeo';
  duration: string;
  area: string;
}

export interface Problem {
  id: number;
  statement: string;
  difficulty: 'Básica' | 'Media' | 'Alta';
  solved: boolean;
}

export interface TutoringSlot {
  id: number;
  day: string;
  start: string;
  end: string;
  available: boolean;
}

export interface TutoringSession {
  id: number;
  student: string;
  topic: string;
  status: 'Pendiente' | 'Confirmada' | 'Completada';
  date: string;
}
