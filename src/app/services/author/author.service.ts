import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Author } from 'src/app/models';
import { AuthorStoreService } from 'src/app/store';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private authorStoreService: AuthorStoreService,
  ) {}

  get(): Observable<Author[]> {
    const authors = [
      new Author({name: 'Author 2', pk: 2, bookIds: [4, 5, 6]}),
      new Author({name: 'Author 3', pk: 3, bookIds: [7, 8, 9]}),
      new Author({name: 'Author 1', pk: 1, bookIds: [1, 2, 3]}),
    ];
    return of(authors)
      .pipe(
        take(1),
        tap((items: Author[]) => {
          this.authorStoreService.dispatchAddAllAction(items);
        }));
  }

  loadAll(): void {
    this.get().pipe(take(1)).subscribe();
  }
}
