import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlatformDataService } from '../../../core/services/platform-data.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly dataService = inject(PlatformDataService);
}
