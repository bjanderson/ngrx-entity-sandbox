import { Injectable } from '@angular/core';
import { StoreService } from '@lernato/common-angular';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Author, Book, BookStoreState } from 'src/app/models';
import { LoadAction } from './book.store.actions';

@Injectable()
export class BookStoreService extends StoreService {
  static readonly storeName = 'bookStoreState';
  bookStoreState = createFeatureSelector<BookStoreState>(BookStoreService.storeName);
  booksSelector = createSelector(this.bookStoreState, state => state.books);

  constructor(public store: Store<BookStoreState>) { super(); }

  getBooks() {
    return this.store.pipe(select(this.booksSelector));
  }

  getBooksByAuthor(author: Author): Observable<Book[]> {
    return this.getBooks().pipe(
      map((books: Book[]) => books.filter(b => b.authorId === author.id)));
  }

  dispatchLoadAction(): void {
    this.dispatchAction(new LoadAction());
  }
}
