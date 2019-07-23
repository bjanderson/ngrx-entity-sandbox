import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class AuthorEffects {
  // @Effect()
  // loadAuthor$: Observable<AuthorAction> = this.actions$.pipe(
  //   ofType(AuthorActionTypes.LOAD),
  //   map((action: AuthorAction) => action.payload),
  //   switchMap(this.loadAuthor.bind(this)));

  constructor(
    private actions$: Actions,
    // private authorService: AuthorService
  ) {}

  // private loadAuthor(): Observable<AuthorAction> {
  //   return this.authorService.get().pipe(
  //     map((authors: Author[]) => new LoadSuccessAction(authors)),
  //     catchError(error => of(new LoadFailAction(error))));
  // }
}
