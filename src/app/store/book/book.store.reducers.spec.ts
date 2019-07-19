import { BookStoreState } from 'src/app/models';
import { LoadSuccessAction } from './book.store.actions';
import { bookReducer } from './book.store.reducers';

describe('bookReducer', () => {
  it('returns the given state by default', () => {
    const state = new BookStoreState();
    const expected: any = state;
    const result: any = bookReducer(state, <any>{type: 'default'});
    expect(result).toEqual(expected);
  });

  describe('LOAD_SUCCESS', () => {
    it('calls state.setValue', () => {
      const value = 'test value';
      const state = new BookStoreState();
      const spy = spyOn(state, 'setValue').and.callThrough();
      bookReducer(state, new LoadSuccessAction(value));
      expect(spy).toHaveBeenCalled();
    });
  });
});
