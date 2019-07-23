import { BookAction, BookActionTypes } from './book.store.actions';
import { adapter, BookStoreState } from './book.store.entity';

const initialState = adapter.getInitialState();

export function bookReducer(state: BookStoreState = initialState, action: BookAction): BookStoreState {

  switch (action.type) {

    case BookActionTypes.ADD_ALL:
      return adapter.addAll(action.payload, state);

    case BookActionTypes.UPSERT_ONE:
      return adapter.upsertOne(action.payload, state);

    case BookActionTypes.REMOVE_ONE:
      return adapter.removeOne(action.payload, state);

    default:
      return state;
  }
}
