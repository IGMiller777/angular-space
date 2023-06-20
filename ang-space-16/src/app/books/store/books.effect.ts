import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {BooksService} from "../books.service";
import {select, Store} from "@ngrx/store";
import {booksFetchAPISuccess, invokeBooksAPI, invokeSaveNewBookAPI, saveNewBookAPISuccess} from "./books.action";
import {EMPTY, map, mergeMap, switchMap, withLatestFrom} from "rxjs";
import {selectBooks} from "./books.selector";
import {Appstate} from "../../shared/store/appstate";
import {setAPIStatus} from "../../shared/store/app.action";

@Injectable()
export class BooksEffect {
  constructor(private action$: Actions, private booksService: BooksService,
              private store: Store, private appStore: Store<Appstate>) {
  }


  loadAllBooks$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeBooksAPI),
      withLatestFrom(this.store.pipe(select(selectBooks))),
      mergeMap(([, bookformStore]) => {
        if (bookformStore.length > 0) {
          return EMPTY;
        }
        return this.booksService.get().pipe(map(data => booksFetchAPISuccess({allBooks: data})));
      })
    ));
  saveNewBook$ = createEffect(() => {
    return this.action$.pipe(
      ofType(invokeSaveNewBookAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiState: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.booksService.create(action.newBook).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiState: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewBookAPISuccess({ newBook: data });
          })
        );
      })
    );
  });
}

