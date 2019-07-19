import { Injectable } from '@angular/core';
import { StoreService } from '@lernato/common-angular';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Author, AuthorStoreState, Book } from 'src/app/models';
import { LoadAction } from './author.store.actions';

@Injectable()
export class AuthorStoreService extends StoreService {
  static readonly storeName = 'authorStoreState';
  authorStoreState = createFeatureSelector<AuthorStoreState>(AuthorStoreService.storeName);
  authorsSelector = createSelector(this.authorStoreState, state => state.authors);

  constructor(public store: Store<AuthorStoreState>) { super(); }

  getAuthors() {
    return this.store.pipe(select(this.authorsSelector));
  }

  getAuthorOfBook(book: Book): Observable<Author> {
    return this.getAuthors().pipe(
      map((authors: Author[]) => authors.find(a => a.id === book.authorId)));
  }

  dispatchLoadAction(): void {
    this.dispatchAction(new LoadAction());
  }
}
