import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-app-header',
  styleUrls: ['./app-header.component.scss'],
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  constructor() {}
}
