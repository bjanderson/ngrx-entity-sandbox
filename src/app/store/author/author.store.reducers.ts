import { AuthorAction, AuthorActionTypes } from './author.store.actions';
import { adapter, AuthorStoreState, initialState } from './author.store.entity';

export function authorReducer(state: AuthorStoreState = initialState, action: AuthorAction): AuthorStoreState {

  switch (action.type) {

    case AuthorActionTypes.LOAD_SUCCESS:
      return adapter.addAll(action.payload, state);

    default:
      return state;
  }
}
