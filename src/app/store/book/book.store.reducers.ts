import { BookStoreState } from 'src/app/models';
import { BookAction, BookActionTypes } from './book.store.actions';

export function bookReducer(state: BookStoreState = new BookStoreState(), action: BookAction): BookStoreState {

  switch (action.type) {

    case BookActionTypes.LOAD_SUCCESS:
      state.setBooks(action.payload);
      return new BookStoreState(state);

    default:
      return state;
  }
}
