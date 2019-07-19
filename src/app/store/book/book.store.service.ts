import { Injectable } from '@angular/core';
import { StoreService } from '@lernato/common-angular';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Author, Book } from 'src/app/models';
import { LoadAction } from './book.store.actions';
import { BookStoreState, selectors } from './book.store.entity';

@Injectable()
export class BookStoreService extends StoreService {
  static readonly storeName = 'bookStoreState';
  bookStoreState = createFeatureSelector<BookStoreState>(BookStoreService.storeName);
  allSelector = createSelector(this.bookStoreState, selectors.selectAll);
  entitiesSelector = createSelector(this.bookStoreState, selectors.selectEntities);
  oneSelector = createSelector(this.entitiesSelector, (entities, props) => entities[props.id]);
  manySelector = createSelector(this.entitiesSelector, (entities, props) => props.ids.map(id => entities[id]));

  constructor(public store: Store<BookStoreState>) { super(); }

  getBooks(): Observable<Book[]> {
    return this.store.pipe(select(this.allSelector));
  }

  getBook(pk: number): Observable<Author> {
    return this.store.pipe(select(this.oneSelector, {id: pk}));
  }

  getBooksByAuthor(author: Author): Observable<Book[]> {
    return this.store.pipe(select(this.manySelector, {ids: author.bookIds}));
  }

  dispatchLoadAction(): void {
    this.dispatchAction(new LoadAction());
  }
}
