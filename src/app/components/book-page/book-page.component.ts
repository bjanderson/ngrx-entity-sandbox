import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookStoreService } from 'src/app/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-book-page',
  styleUrls: ['./book-page.component.scss'],
  templateUrl: './book-page.component.html'
})
export class BookPageComponent {

  books$ = this.bookStoreService.getAll();

  constructor(
    private bookStoreService: BookStoreService,
  ) {}
}
