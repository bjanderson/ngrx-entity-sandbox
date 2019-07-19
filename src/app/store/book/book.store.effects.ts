import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Book } from 'src/app/models';
import { BookService } from 'src/app/services/book';
import { BookAction, BookActionTypes, LoadFailAction, LoadSuccessAction } from './book.store.actions';

@Injectable()
export class BookEffects {
  @Effect()
  loadBook$: Observable<BookAction> = this.actions$.pipe(
    ofType(BookActionTypes.LOAD),
    map((action: BookAction) => action.payload),
    switchMap(this.loadBook.bind(this)));

  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) {}

  private loadBook(): Observable<BookAction> {
    return this.bookService.get().pipe(
      map((books: Book[]) => new LoadSuccessAction(books)),
      catchError(error => of(new LoadFailAction(error))));
  }
}
