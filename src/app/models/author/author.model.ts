import { getArrayOfNumbers, getNumber, getObject, getString } from '@lernato/common';

export class Author {

  bookIds: number[];
  pk: number;
  name: string;

  constructor(obj?: Partial<Author>) {
    obj = getObject(obj);
    this.bookIds = getArrayOfNumbers(obj.bookIds);
    this.pk = getNumber(obj.pk, null);
    this.name = getString(obj.name);
  }
}
