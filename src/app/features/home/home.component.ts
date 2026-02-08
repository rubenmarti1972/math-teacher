import { Component, computed, inject, signal } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PlatformDataService } from '../../core/services/platform-data.service';

interface OpenResource {
  title: string;
  type: 'Interactivo' | 'PDF + Solucionario' | 'Notion / Docs';
  source: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, RouterLink, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly dataService = inject(PlatformDataService);

  readonly slots$ = this.dataService.getAvailableSlots();

  readonly learningPath = [
    'Diagnóstico inicial por nivel',
    'Ruta de estudio semanal',
    'Práctica guiada con feedback',
    'Sesión 1:1 de refuerzo',
    'Evaluación y reporte de progreso'
  ];

  readonly openResources: OpenResource[] = [
    {
      title: 'Simulador de funciones',
      type: 'Interactivo',
      source: 'GeoGebra Open',
      description: 'Explora dominio, rango, traslaciones y puntos críticos con sliders en tiempo real.'
    },
    {
      title: 'Banco de problemas tipo admisión',
      type: 'PDF + Solucionario',
      source: 'Repositorio abierto',
      description: 'Colección curada por nivel con estrategias de resolución paso a paso.'
    },
    {
      title: 'Plantilla de estudio activo',
      type: 'Notion / Docs',
      source: 'Recurso compartible',
      description: 'Organiza objetivos semanales, errores frecuentes y plan de mejora.'
    }
  ];

  readonly resourceTypes = ['Todos', 'Interactivo', 'PDF + Solucionario', 'Notion / Docs'] as const;
  readonly selectedType = signal<(typeof this.resourceTypes)[number]>('Todos');

  readonly filteredResources = computed(() => {
    const type = this.selectedType();
    return type === 'Todos' ? this.openResources : this.openResources.filter((item) => item.type === type);
  });

  readonly marketingBlocks = [
    'Masterclass gratuita de entrada para captación.',
    'Landing con testimonios y casos de éxito.',
    'Embudo simple: contenido → diagnóstico → tutoría.'
  ];

  readonly challenge = {
    prompt: 'Si f(x)=x²-4x+3, ¿en qué x está el vértice?',
    options: ['x = -2', 'x = 2', 'x = 4'],
    answer: 'x = 2'
  };

  readonly selectedAnswer = signal<string | null>(null);
  readonly isCorrect = computed(() => this.selectedAnswer() === this.challenge.answer);
  readonly selectedSlotId = signal<number | null>(null);

  pickAnswer(option: string): void {
    this.selectedAnswer.set(option);
  }

  setResourceType(type: (typeof this.resourceTypes)[number]): void {
    this.selectedType.set(type);
  }

  selectSlot(slotId: number): void {
    this.selectedSlotId.set(slotId);
  }
}
