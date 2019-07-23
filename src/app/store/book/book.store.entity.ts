import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Book } from 'src/app/models';

export interface BookStoreState extends EntityState<Book> {}

function selectId(author: Book): number {
  return author.pk;
}

function sortComparer(a: Book, b: Book): number {
  return a.title.localeCompare(b.title);
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId,
  sortComparer,
});
