import { getNumber, getObject, getString } from '@lernato/common';

export class Book {

  authorId: number;
  id: number;
  title: string;

  constructor(obj?: Partial<Book>) {
    obj = getObject(obj);
    this.authorId = getNumber(obj.authorId, null);
    this.id = getNumber(obj.id, null);
    this.title = getString(obj.title);
  }
}
