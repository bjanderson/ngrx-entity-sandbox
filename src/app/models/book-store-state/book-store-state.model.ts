import { getArrayOfModels, getObject } from '@lernato/common';
import { Book } from '../book/book.model';

export class BookStoreState {

  books: Book[];

  constructor(obj?: Partial<BookStoreState>) {
    obj = getObject(obj);
    this.books = getArrayOfModels(Book, obj.books);
  }

  setBooks(books: Book[]) {
    this.books = books;
  }
}
