import { AuthorStoreState } from 'src/app/models';
import { LoadSuccessAction } from './author.store.actions';
import { authorReducer } from './author.store.reducers';

describe('authorReducer', () => {
  it('returns the given state by default', () => {
    const state = new AuthorStoreState();
    const expected: any = state;
    const result: any = authorReducer(state, <any>{type: 'default'});
    expect(result).toEqual(expected);
  });

  describe('LOAD_SUCCESS', () => {
    it('calls state.setValue', () => {
      const value = 'test value';
      const state = new AuthorStoreState();
      const spy = spyOn(state, 'setValue').and.callThrough();
      authorReducer(state, new LoadSuccessAction(value));
      expect(spy).toHaveBeenCalled();
    });
  });
});
