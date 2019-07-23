import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Book } from 'src/app/models';
import { BookStoreService } from 'src/app/store';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private bookStoreService: BookStoreService,
  ) {}

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
    return of(books)
      .pipe(
        take(1),
        tap((items: Book[]) => {
          this.bookStoreService.dispatchAddAllAction(items);
        }));
  }

  loadAll(): void {
    this.get().pipe(take(1)).subscribe();
  }
}
