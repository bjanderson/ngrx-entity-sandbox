import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {}

  get(): Observable<Book[]> {
    const books = [
      new Book({title: 'Book 2', pk: 2, authorId: 1}),
      new Book({title: 'Book 4', pk: 4, authorId: 2}),
      new Book({title: 'Book 8', pk: 8, authorId: 3}),
      new Book({title: 'Book 6', pk: 6, authorId: 2}),
      new Book({title: 'Book 1', pk: 1, authorId: 1}),
      new Book({title: 'Book 5', pk: 5, authorId: 2}),
      new Book({title: 'Book 9', pk: 9, authorId: 3}),
      new Book({title: 'Book 7', pk: 7, authorId: 3}),
      new Book({title: 'Book 3', pk: 3, authorId: 1}),
    ];
    return of(books);
  }
}
