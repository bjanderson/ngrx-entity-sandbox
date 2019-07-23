import { Injectable } from '@angular/core';
import { StoreService } from '@lernato/common-angular';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Author } from 'src/app/models';
import { AddAllAction, RemoveOneAction, UpsertOneAction } from './author.store.actions';
import { adapter, AuthorStoreState } from './author.store.entity';

@Injectable()
export class AuthorStoreService extends StoreService {
  static readonly storeName = 'authorStoreState';
  private selectors = adapter.getSelectors();
  private authorStoreState = createFeatureSelector<AuthorStoreState>(AuthorStoreService.storeName);
  private allSelector = createSelector(this.authorStoreState, this.selectors.selectAll);
  private entitiesSelector = createSelector(this.authorStoreState, this.selectors.selectEntities);
  private oneSelector = createSelector(this.entitiesSelector, (entities, props) => entities[props.id]);
  private manySelector = createSelector(this.entitiesSelector, (entities, props) => props.ids.map(id => entities[id]));

  constructor(public store: Store<AuthorStoreState>) { super(); }

  getAll(): Observable<Author[]> {
    return this.store.pipe(select(this.allSelector));
  }

  getById(id: number): Observable<Author> {
    return this.store.pipe(select(this.oneSelector, {id}));
  }

  getAllWithIds(ids: number[]): Observable<Author[]> {
    return this.store.pipe(select(this.manySelector, {ids}));
  }

  dispatchAddAllAction(authors: Author[]): void {
    this.dispatchAction(new AddAllAction(authors));
  }

  dispatchUpsertOneAction(author: Author): void {
    this.dispatchAction(new UpsertOneAction(author));
  }

  dispatchRemoveOneAction(id: number): void {
    this.dispatchAction(new RemoveOneAction(id));
  }
}
