import { getArrayOfNumbers, getNumber, getObject, getString } from '@lernato/common';

export class Author {

  bookIds: number[];
  id: number;
  name: string;

  constructor(obj?: Partial<Author>) {
    obj = getObject(obj);
    this.bookIds = getArrayOfNumbers(obj.bookIds);
    this.id = getNumber(obj.id, null);
    this.name = getString(obj.name);
  }
}
