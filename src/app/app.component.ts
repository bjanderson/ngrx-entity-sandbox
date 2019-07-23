import { Component, OnInit } from '@angular/core';
import { AuthorService, BookService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-entity-sandbox';

  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
  ) {}

  ngOnInit(): void {
    this.authorService.loadAll();
    this.bookService.loadAll();
  }
}
