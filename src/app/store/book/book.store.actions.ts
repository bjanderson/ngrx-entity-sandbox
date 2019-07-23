import { PayloadAction } from '@lernato/common-angular';
import { Book } from 'src/app/models';

export const BookActionTypes = {
  ADD_ALL: '[Book] Add All',
  UPSERT_ONE: '[Book] Upsert One',
  REMOVE_ONE: '[Book] Remove One',
};

export class AddAllAction extends PayloadAction {
  constructor(books: Book[]) { super(BookActionTypes.ADD_ALL, books); }
}

export class UpsertOneAction extends PayloadAction {
  constructor(book: Book) { super(BookActionTypes.UPSERT_ONE, book); }
}

export class RemoveOneAction extends PayloadAction {
  constructor(id: number) { super(BookActionTypes.REMOVE_ONE, id); }
}

export type BookAction =
  AddAllAction |
  UpsertOneAction |
  RemoveOneAction;
