import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-author',
  styleUrls: ['./author.component.scss'],
  templateUrl: './author.component.html'
})
export class AuthorComponent {
  constructor() {}
}
