import { Injectable } from '@angular/core';
import { ApiService } from '@lernato/common-angular';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = '';

  constructor(private api: ApiService) {}

  get(): Observable<Book[]> {
    // return this.api.get(this.url);
    const books = [
      new Book({title: 'Book 1', id: 1, authorId: 1}),
      new Book({title: 'Book 2', id: 2, authorId: 1}),
      new Book({title: 'Book 3', id: 3, authorId: 1}),
      new Book({title: 'Book 4', id: 4, authorId: 2}),
      new Book({title: 'Book 5', id: 5, authorId: 2}),
      new Book({title: 'Book 6', id: 6, authorId: 2}),
    ];
    return of(books);
  }
}
