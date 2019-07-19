import { AuthorActionTypes, LoadAction, LoadFailAction, LoadSuccessAction } from './author.store.actions';

describe('AuthorActions', () => {
  describe('AuthorActionTypes', () => {
    it('LOAD', () => {
      expect(AuthorActionTypes.LOAD).toEqual('[Author] Load');
    });

    it('LOAD_FAIL', () => {
      expect(AuthorActionTypes.LOAD_FAIL).toEqual('[Author] Load Fail');
    });

    it('LOAD_SUCCESS', () => {
      expect(AuthorActionTypes.LOAD_SUCCESS).toEqual('[Author] Load Success');
    });
  });

  describe('LoadAction', () => {
    it('sets the correct action.type', () => {
      const expected: any = AuthorActionTypes.LOAD;
      const result: any = new LoadAction().type;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadFailAction', () => {
    it('sets the correct action.type', () => {
      const payload: any = 'test-payload';
      const expected: any = AuthorActionTypes.LOAD_FAIL;
      const result: any = new LoadFailAction(payload).type;
      expect(result).toEqual(expected);
    });

    it('sets action.payload to the given payload', () => {
      const payload: any = 'test-payload';
      const expected: any = payload;
      const result: any = new LoadFailAction(payload).payload;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadSuccessAction', () => {
    it('sets the correct action.type', () => {
      const payload: any = 'test-payload';
      const expected: any = AuthorActionTypes.LOAD_SUCCESS;
      const result: any = new LoadSuccessAction(payload).type;
      expect(result).toEqual(expected);
    });

    it('sets action.payload to the given payload', () => {
      const payload: any = 'test-payload';
      const expected: any = payload;
      const result: any = new LoadSuccessAction(payload).payload;
      expect(result).toEqual(expected);
    });
  });
});
