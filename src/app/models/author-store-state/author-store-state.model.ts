import { getArrayOfModels, getObject } from '@lernato/common';
import { Author } from '../author/author.model';

export class AuthorStoreState {

  authors: Author[];

  constructor(obj?: Partial<AuthorStoreState>) {
    obj = getObject(obj);
    this.authors = getArrayOfModels(Author, obj.authors);
  }

  setAuthors(authors: Author[]) {
    this.authors = authors;
  }
}
