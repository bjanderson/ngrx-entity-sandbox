import { Component, OnInit } from '@angular/core';
import { AuthorStoreService } from './store';
import { BookStoreService } from './store/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-entity-sandbox';

  constructor(
    private authorStoreService: AuthorStoreService,
    private bookStoreService: BookStoreService,
  ) {}

  ngOnInit(): void {
    this.authorStoreService.dispatchLoadAction();
    this.bookStoreService.dispatchLoadAction();
  }
}
