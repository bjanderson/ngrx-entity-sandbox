import { Injectable } from '@angular/core';
import { ApiService } from '@lernato/common-angular';
import { Observable, of } from 'rxjs';
import { Author } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  url = '';

  constructor(private api: ApiService) {}

  get(): Observable<Author[]> {
    // return this.api.get(this.url);
    const authors = [
      new Author({name: 'Author 1', id: 1, bookIds: [1, 2, 3]}),
      new Author({name: 'Author 2', id: 2, bookIds: [4, 5, 6]}),
    ];
    return of(authors);
  }
}
