import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  Article,
  Problem,
  SocialLink,
  StudyArea,
  TutoringSession,
  TutoringSlot,
  VideoResource
} from '../models/platform.models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PlatformDataService {
  private readonly http = inject(HttpClient);

  readonly socialLinks: SocialLink[] = [
    { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
    { label: 'X', url: 'https://x.com', icon: 'x' },
    { label: 'Instagram', url: 'https://instagram.com', icon: 'instagram' }
  ];

  readonly studyAreasMock: StudyArea[] = [
    {
      id: 1,
      title: 'Álgebra y razonamiento matemático',
      description: 'Ruta guiada con teoría, ejercicios y material de práctica progresiva.',
      level: 'Intermedio'
    },
    {
      id: 2,
      title: 'Cálculo diferencial e integral',
      description: 'Explicaciones orientadas a exámenes de admisión y universidad.',
      level: 'Avanzado'
    },
    {
      id: 3,
      title: 'Estadística aplicada',
      description: 'Análisis de datos, probabilidad y modelado de casos reales.',
      level: 'Básico'
    }
  ];

  readonly articlesMock: Article[] = [
    {
      id: 1,
      title: 'Cómo estudiar matemáticas con método activo',
      summary: 'Técnicas para optimizar tiempo y mejorar retención en estudiantes de secundaria.',
      area: 'Metodología',
      readTime: '8 min'
    },
    {
      id: 2,
      title: 'Errores frecuentes al resolver ecuaciones cuadráticas',
      summary: 'Checklist práctico de revisión para evitar fallos en procedimientos.',
      area: 'Álgebra',
      readTime: '6 min'
    },
    {
      id: 3,
      title: 'Guía práctica de derivadas para examen de ingreso',
      summary: 'Resumen visual con ejercicios resueltos paso a paso y mini test final.',
      area: 'Cálculo',
      readTime: '10 min'
    }
  ];

  readonly videosMock: VideoResource[] = [
    { id: 1, title: 'Límites en 15 minutos', provider: 'YouTube', duration: '15:20', area: 'Cálculo' },
    { id: 2, title: 'Probabilidad para principiantes', provider: 'Vimeo', duration: '18:10', area: 'Estadística' },
    { id: 3, title: 'Factorización rápida en 3 métodos', provider: 'YouTube', duration: '12:40', area: 'Álgebra' }
  ];

  readonly problemsMock: Problem[] = [
    { id: 1, statement: 'Resolver sistema 2x + y = 7, x - y = 2', difficulty: 'Básica', solved: true },
    { id: 2, statement: 'Optimizar área de un rectángulo con perímetro fijo', difficulty: 'Media', solved: false },
    { id: 3, statement: 'Demostrar convergencia de sucesión recursiva', difficulty: 'Alta', solved: true },
    { id: 4, statement: 'Aplicar Bayes para un caso de diagnóstico médico', difficulty: 'Media', solved: false }
  ];

  readonly slotsMock: TutoringSlot[] = [
    { id: 1, day: 'Lunes', start: '17:00', end: '18:00', available: true },
    { id: 2, day: 'Miércoles', start: '19:00', end: '20:00', available: true },
    { id: 3, day: 'Viernes', start: '16:00', end: '17:00', available: false },
    { id: 4, day: 'Sábado', start: '10:00', end: '11:00', available: true }
  ];

  readonly sessionsMock: TutoringSession[] = [
    { id: 1, student: 'Ana Gómez', topic: 'Derivadas', status: 'Confirmada', date: '2026-02-11' },
    { id: 2, student: 'Luis Pérez', topic: 'Probabilidad', status: 'Pendiente', date: '2026-02-13' },
    { id: 3, student: 'Camila Rojas', topic: 'Álgebra lineal', status: 'Completada', date: '2026-02-08' }
  ];

  getStudyAreas(): Observable<StudyArea[]> {
    return of(this.studyAreasMock);
  }

  getArticles(): Observable<Article[]> {
    return of(this.articlesMock);
  }

  getVideos(): Observable<VideoResource[]> {
    return of(this.videosMock);
  }

  getProblems(): Observable<Problem[]> {
    return of(this.problemsMock);
  }

  getAvailableSlots(): Observable<TutoringSlot[]> {
    return of(this.slotsMock);
  }

  getTutoringSessions(): Observable<TutoringSession[]> {
    return of(this.sessionsMock);
  }

  getStudyAreasFromStrapi(): Observable<unknown> {
    return this.http.get(`${environment.apiUrl}/study-areas?populate=*`);
  }
}
