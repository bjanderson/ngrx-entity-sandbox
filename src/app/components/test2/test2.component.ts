import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-test2',
  styleUrls: ['./test2.component.scss'],
  templateUrl: './test2.component.html'
})
export class Test2Component {
  constructor() {}
}
