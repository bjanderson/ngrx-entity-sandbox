import { Component, OnInit } from '@angular/core';
import { AuthorService } from './services';
import { BookStoreService } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-entity-sandbox';

  constructor(
    private authorService: AuthorService,
    private bookStoreService: BookStoreService,
  ) {}

  ngOnInit(): void {
    this.authorService.loadAll();
    this.bookStoreService.dispatchLoadAction();
  }
}
