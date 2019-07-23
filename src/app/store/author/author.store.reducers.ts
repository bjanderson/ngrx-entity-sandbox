import { AuthorAction, AuthorActionTypes } from './author.store.actions';
import { adapter, AuthorStoreState } from './author.store.entity';

const initialState = adapter.getInitialState();

export function authorReducer(state: AuthorStoreState = initialState, action: AuthorAction): AuthorStoreState {

  switch (action.type) {

    case AuthorActionTypes.ADD_ALL:
      return adapter.addAll(action.payload, state);

    case AuthorActionTypes.UPSERT_ONE:
      return adapter.upsertOne(action.payload, state);

    case AuthorActionTypes.REMOVE_ONE:
      return adapter.removeOne(action.payload, state);

    default:
      return state;
  }
}
