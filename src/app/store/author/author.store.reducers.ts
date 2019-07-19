import { AuthorStoreState } from 'src/app/models';
import { AuthorAction, AuthorActionTypes } from './author.store.actions';

export function authorReducer(state: AuthorStoreState = new AuthorStoreState(), action: AuthorAction): AuthorStoreState {

  switch (action.type) {

    case AuthorActionTypes.LOAD_SUCCESS:
      state.setAuthors(action.payload);
      return new AuthorStoreState(state);

    default:
      return state;
  }
}
