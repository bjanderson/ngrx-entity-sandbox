import { Author } from 'src/app/models';
import { AddAllAction, RemoveOneAction, UpsertOneAction } from './author.store.actions';
import { authorReducer } from './author.store.reducers';

describe('authorReducer', () => {

  it('returns the given state by default', () => {
    const state = {ids: [], entities: {}};
    const expected = state;
    const result: any = authorReducer(state, {type: 'default'} as any);
    expect(result).toEqual(expected);
  });

  describe('ADD_ALL', () => {
    it('adds all items to the store', () => {
      const author = new Author({pk: 1});
      const state = {ids: [], entities: {}};
      const expected = {ids: [1], entities: {1: author}};
      const result = authorReducer(state, new AddAllAction([author]));
      expect(result).toEqual(expected);
    });
  });

  describe('REMOVE_ONE', () => {
    it('removes the item from the store', () => {
      const author = new Author({pk: 1});
      const state = {ids: [1], entities: {1: author}};
      const expected = {ids: [], entities: {}};
      const result = authorReducer(state, new RemoveOneAction(1));
      expect(result).toEqual(expected);
    });
  });

  describe('UPSERT_ONE', () => {
    it('adds the item to the store', () => {
      const author = new Author({pk: 1});
      const state = {ids: [], entities: {}};
      const expected = {ids: [1], entities: {1: author}};
      const result = authorReducer(state, new UpsertOneAction(author));
      expect(result).toEqual(expected);
    });

    it('updates the item in the store', () => {
      const author1 = new Author({pk: 1, name: 'old author'});
      const author2 = new Author({pk: 1, name: 'new author'});
      const state = {ids: [1], entities: {1: author1}};
      const expected = {ids: [1], entities: {1: author2}};
      const result = authorReducer(state, new UpsertOneAction(author2));
      expect(result).toEqual(expected);
    });
  });
});
