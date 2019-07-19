import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-book',
  styleUrls: ['./book.component.scss'],
  templateUrl: './book.component.html'
})
export class BookComponent {
  constructor() {}
}
