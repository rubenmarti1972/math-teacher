import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PlatformDataService } from '../../core/services/platform-data.service';

@Component({
  selector: 'app-content',
  imports: [AsyncPipe],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  private readonly dataService = inject(PlatformDataService);

  readonly articles$ = this.dataService.getArticles();
  readonly videos$ = this.dataService.getVideos();
  readonly problems$ = this.dataService.getProblems();
}
