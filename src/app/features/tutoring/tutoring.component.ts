import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PlatformDataService } from '../../core/services/platform-data.service';

@Component({
  selector: 'app-tutoring',
  imports: [AsyncPipe],
  templateUrl: './tutoring.component.html',
  styleUrl: './tutoring.component.scss'
})
export class TutoringComponent {
  private readonly dataService = inject(PlatformDataService);

  readonly slots$ = this.dataService.getAvailableSlots();
  readonly sessions$ = this.dataService.getTutoringSessions();
}
