import { BookActionTypes, LoadAction, LoadFailAction, LoadSuccessAction } from './book.store.actions';

describe('BookActions', () => {
  describe('BookActionTypes', () => {
    it('LOAD', () => {
      expect(BookActionTypes.LOAD).toEqual('[Book] Load');
    });

    it('LOAD_FAIL', () => {
      expect(BookActionTypes.LOAD_FAIL).toEqual('[Book] Load Fail');
    });

    it('LOAD_SUCCESS', () => {
      expect(BookActionTypes.LOAD_SUCCESS).toEqual('[Book] Load Success');
    });
  });

  describe('LoadAction', () => {
    it('sets the correct action.type', () => {
      const expected: any = BookActionTypes.LOAD;
      const result: any = new LoadAction().type;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadFailAction', () => {
    it('sets the correct action.type', () => {
      const payload: any = 'test-payload';
      const expected: any = BookActionTypes.LOAD_FAIL;
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
      const expected: any = BookActionTypes.LOAD_SUCCESS;
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
