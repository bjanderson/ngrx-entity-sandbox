import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-test',
  styleUrls: ['./test.component.scss'],
  templateUrl: './test.component.html'
})
export class TestComponent {
  constructor() {}
}
