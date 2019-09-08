import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-test3',
  styleUrls: ['./test3.component.scss'],
  templateUrl: './test3.component.html'
})
export class Test3Component {
  constructor() {}
}
