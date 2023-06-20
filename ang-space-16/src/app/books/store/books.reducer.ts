import {Books} from "./books";
import {createReducer, on} from "@ngrx/store";
import {booksFetchAPISuccess, saveNewBookAPISuccess} from "./books.action";

export const initialState: ReadonlyArray<Books> = [];

export const bookReducer = createReducer(
  initialState,
  on(booksFetchAPISuccess, (state, {allBooks}) => {
    return allBooks;
  }),
  on(saveNewBookAPISuccess, (state, {newBook}) => {
    let newState = [...state];
    newState.unshift(newBook);
    return newState;
  })
);
