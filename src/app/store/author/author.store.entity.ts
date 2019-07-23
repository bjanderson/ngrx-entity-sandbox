import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Author } from 'src/app/models';

export interface AuthorStoreState extends EntityState<Author> {}

function selectId(author: Author): number {
  return author.pk;
}

function sortComparer(a: Author, b: Author): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<Author> = createEntityAdapter<Author>({
  selectId,
  sortComparer,
});
