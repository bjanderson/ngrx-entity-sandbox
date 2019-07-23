import { Book } from 'src/app/models';
import { AddAllAction, BookActionTypes, RemoveOneAction, UpsertOneAction } from './book.store.actions';

describe('BookActions', () => {

  describe('AddAllAction', () => {
    it('ADD_ALL', () => {
      expect(BookActionTypes.ADD_ALL).toEqual('[Book] Add All');
    });

    it('sets the correct action.type', () => {
      const result = new AddAllAction([]).type;
      expect(result).toEqual(BookActionTypes.ADD_ALL);
    });

    it('sets action.payload to the given payload', () => {
      const payload = [new Book({pk: 1})];
      expect(new AddAllAction(payload).payload).toEqual(payload);
    });
  });

  describe('UpsertOneAction', () => {
    it('UPSERT_ONE', () => {
      expect(BookActionTypes.UPSERT_ONE).toEqual('[Book] Upsert One');
    });

    it('sets the correct action.type', () => {
      const result = new UpsertOneAction(new Book()).type;
      expect(result).toEqual(BookActionTypes.UPSERT_ONE);
    });

    it('sets action.payload to the given payload', () => {
      const payload = new Book({pk: 1});
      expect(new UpsertOneAction(payload).payload).toEqual(payload);
    });
  });

  describe('RemoveOneAction', () => {
    it('REMOVE_ONE', () => {
      expect(BookActionTypes.REMOVE_ONE).toEqual('[Book] Remove One');
    });

    it('sets the correct action.type', () => {
      const result = new RemoveOneAction(1).type;
      expect(result).toEqual(BookActionTypes.REMOVE_ONE);
    });

    it('sets action.payload to the given payload', () => {
      const payload = 1;
      expect(new RemoveOneAction(payload).payload).toEqual(payload);
    });
  });
});
