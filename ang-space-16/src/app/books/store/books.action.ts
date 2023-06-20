import {createAction, props} from "@ngrx/store";
import {Books} from "./books";

export const invokeBooksAPI = createAction(
  '[Books API] Invoke Books Fetch API'
);

export const booksFetchAPISuccess = createAction(
  'Books API] Fetch API Success',
  props<{ allBooks: Books[] }>()
)

export const invokeSaveNewBookAPI = createAction(
  '[Books API] Inovke save new book api',
  props<{ newBook: Books }>()
)

export const saveNewBookAPISuccess = createAction(
  '[Books API] Save new book api',
  props<{ newBook: Books }>()
)
