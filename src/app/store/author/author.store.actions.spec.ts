import { Author } from 'src/app/models';
import { AddAllAction, AuthorActionTypes, RemoveOneAction, UpsertOneAction } from './author.store.actions';

describe('AuthorActions', () => {

  describe('AddAllAction', () => {
    it('ADD_ALL', () => {
      expect(AuthorActionTypes.ADD_ALL).toEqual('[Author] Add All');
    });

    it('sets the correct action.type', () => {
      const result = new AddAllAction([]).type;
      expect(result).toEqual(AuthorActionTypes.ADD_ALL);
    });

    it('sets action.payload to the given payload', () => {
      const payload = [new Author({pk: 1})];
      expect(new AddAllAction(payload).payload).toEqual(payload);
    });
  });

  describe('UpsertOneAction', () => {
    it('UPSERT_ONE', () => {
      expect(AuthorActionTypes.UPSERT_ONE).toEqual('[Author] Upsert One');
    });

    it('sets the correct action.type', () => {
      const result = new UpsertOneAction(new Author()).type;
      expect(result).toEqual(AuthorActionTypes.UPSERT_ONE);
    });

    it('sets action.payload to the given payload', () => {
      const payload = new Author({pk: 1});
      expect(new UpsertOneAction(payload).payload).toEqual(payload);
    });
  });

  describe('RemoveOneAction', () => {
    it('REMOVE_ONE', () => {
      expect(AuthorActionTypes.REMOVE_ONE).toEqual('[Author] Remove One');
    });

    it('sets the correct action.type', () => {
      const result = new RemoveOneAction(1).type;
      expect(result).toEqual(AuthorActionTypes.REMOVE_ONE);
    });

    it('sets action.payload to the given payload', () => {
      const payload = 1;
      expect(new RemoveOneAction(payload).payload).toEqual(payload);
    });
  });
});
