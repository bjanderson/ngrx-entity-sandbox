import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Author } from 'src/app/models';
import { AuthorService } from 'src/app/services/author';
import { AuthorAction, AuthorActionTypes, LoadFailAction, LoadSuccessAction } from './author.store.actions';

@Injectable()
export class AuthorEffects {
  @Effect()
  loadAuthor$: Observable<AuthorAction> = this.actions$.pipe(
    ofType(AuthorActionTypes.LOAD),
    map((action: AuthorAction) => action.payload),
    switchMap(this.loadAuthor.bind(this)));

  constructor(
    private actions$: Actions,
    private authorService: AuthorService
  ) {}

  private loadAuthor(): Observable<AuthorAction> {
    return this.authorService.get().pipe(
      map((authors: Author[]) => new LoadSuccessAction(authors)),
      catchError(error => of(new LoadFailAction(error))));
  }
}
