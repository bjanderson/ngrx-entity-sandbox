import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Author } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() {}

  get(): Observable<Author[]> {
    const authors = [
      new Author({name: 'Author 2', pk: 2, bookIds: [4, 5, 6]}),
      new Author({name: 'Author 3', pk: 3, bookIds: [7, 8, 9]}),
      new Author({name: 'Author 1', pk: 1, bookIds: [1, 2, 3]}),
    ];
    return of(authors);
  }
}
