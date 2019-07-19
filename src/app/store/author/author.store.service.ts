import { Injectable } from '@angular/core';
import { StoreService } from '@lernato/common-angular';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Author, Book } from 'src/app/models';
import { LoadAction } from './author.store.actions';
import { AuthorStoreState, selectors } from './author.store.entity';

@Injectable()
export class AuthorStoreService extends StoreService {
  static readonly storeName = 'authorStoreState';
  authorStoreState = createFeatureSelector<AuthorStoreState>(AuthorStoreService.storeName);
  allSelector = createSelector(this.authorStoreState, selectors.selectAll);
  entitiesSelector = createSelector(this.authorStoreState, selectors.selectEntities);
  oneSelector = createSelector(this.entitiesSelector, (entities, props) => entities[props.id]);
  manySelector = createSelector(this.entitiesSelector, (entities, props) => props.ids.map(id => entities[id]));

  constructor(public store: Store<AuthorStoreState>) { super(); }

  getAuthors(): Observable<Author[]> {
    return this.store.pipe(select(this.allSelector));
  }

  getAuthorOfBook(book: Book): Observable<Author> {
    return this.store.pipe(select(this.oneSelector, {id: book.authorId}));
  }

  dispatchLoadAction(): void {
    this.dispatchAction(new LoadAction());
  }
}
