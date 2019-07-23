import { Injectable } from '@angular/core';
import { StoreService } from '@lernato/common-angular';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models';
import { AddAllAction, RemoveOneAction, UpsertOneAction } from './book.store.actions';
import { adapter, BookStoreState } from './book.store.entity';

@Injectable()
export class BookStoreService extends StoreService {
  static readonly storeName = 'bookStoreState';
  private selectors = adapter.getSelectors();
  private bookStoreState = createFeatureSelector<BookStoreState>(BookStoreService.storeName);
  private allSelector = createSelector(this.bookStoreState, this.selectors.selectAll);
  private entitiesSelector = createSelector(this.bookStoreState, this.selectors.selectEntities);
  private oneSelector = createSelector(this.entitiesSelector, (entities, props) => entities[props.id]);
  private manySelector = createSelector(this.entitiesSelector, (entities, props) => props.ids.map(id => entities[id]));

  constructor(public store: Store<BookStoreState>) { super(); }

  getAll(): Observable<Book[]> {
    return this.store.pipe(select(this.allSelector));
  }

  getById(id: number): Observable<Book> {
    return this.store.pipe(select(this.oneSelector, {id}));
  }

  getAllWithIds(ids: number[]): Observable<Book> {
    return this.store.pipe(select(this.manySelector, {ids}));
  }

  dispatchAddAllAction(books: Book[]): void {
    this.dispatchAction(new AddAllAction(books));
  }

  dispatchUpsertOneAction(book: Book): void {
    this.dispatchAction(new UpsertOneAction(book));
  }

  dispatchRemoveOneAction(id: number): void {
    this.dispatchAction(new RemoveOneAction(id));
  }
}
