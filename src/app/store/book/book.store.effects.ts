import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class BookEffects {
  // @Effect()
  // loadBook$: Observable<BookAction> = this.actions$.pipe(
  //   ofType(BookActionTypes.LOAD),
  //   map((action: BookAction) => action.payload),
  //   switchMap(this.loadBook.bind(this)));

  constructor(
    private actions$: Actions,
    // private bookService: BookService
  ) {}

  // private loadBook(): Observable<BookAction> {
  //   return this.bookService.get().pipe(
  //     map((books: Book[]) => new LoadSuccessAction(books)),
  //     catchError(error => of(new LoadFailAction(error))));
  // }
}
