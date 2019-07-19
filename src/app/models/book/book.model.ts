import { getNumber, getObject, getString } from '@lernato/common';

export class Book {

  authorId: number;
  pk: number;
  title: string;

  constructor(obj?: Partial<Book>) {
    obj = getObject(obj);
    this.authorId = getNumber(obj.authorId, null);
    this.pk = getNumber(obj.pk, null);
    this.title = getString(obj.title);
  }
}
