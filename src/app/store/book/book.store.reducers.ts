import { BookAction, BookActionTypes } from './book.store.actions';
import { adapter, BookStoreState, initialState } from './book.store.entity';

export function bookReducer(state: BookStoreState = initialState, action: BookAction): BookStoreState {

  switch (action.type) {

    case BookActionTypes.LOAD_SUCCESS:
      return adapter.addAll(action.payload, state);

    default:
      return state;
  }
}
