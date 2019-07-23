import { Book } from 'src/app/models';
import { AddAllAction, RemoveOneAction, UpsertOneAction } from './book.store.actions';
import { bookReducer } from './book.store.reducers';

describe('bookReducer', () => {

  it('returns the given state by default', () => {
    const state = {ids: [], entities: {}};
    const expected = state;
    const result: any = bookReducer(state, {type: 'default'} as any);
    expect(result).toEqual(expected);
  });

  describe('ADD_ALL', () => {
    it('adds all items to the store', () => {
      const book = new Book({pk: 1});
      const state = {ids: [], entities: {}};
      const expected = {ids: [1], entities: {1: book}};
      const result = bookReducer(state, new AddAllAction([book]));
      expect(result).toEqual(expected);
    });
  });

  describe('REMOVE_ONE', () => {
    it('removes the item from the store', () => {
      const book = new Book({pk: 1});
      const state = {ids: [1], entities: {1: book}};
      const expected = {ids: [], entities: {}};
      const result = bookReducer(state, new RemoveOneAction(1));
      expect(result).toEqual(expected);
    });
  });

  describe('UPSERT_ONE', () => {
    it('adds the item to the store', () => {
      const book = new Book({pk: 1});
      const state = {ids: [], entities: {}};
      const expected = {ids: [1], entities: {1: book}};
      const result = bookReducer(state, new UpsertOneAction(book));
      expect(result).toEqual(expected);
    });

    it('updates the item in the store', () => {
      const book1 = new Book({pk: 1, title: 'old book'});
      const book2 = new Book({pk: 1, title: 'new book'});
      const state = {ids: [1], entities: {1: book1}};
      const expected = {ids: [1], entities: {1: book2}};
      const result = bookReducer(state, new UpsertOneAction(book2));
      expect(result).toEqual(expected);
    });
  });
});
