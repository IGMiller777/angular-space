import {Injectable} from "@angular/core";
import {act, Actions, createEffect, ofType} from "@ngrx/effects";
import {BooksService} from "../books.service";
import {select, Store} from "@ngrx/store";
import {
  booksFetchAPISuccess, deleteBookAPISuccess,
  invokeBooksAPI, invokeDeleteBookAPI,
  invokeSaveNewBookAPI,
  invokeUpdateBookAPI,
  saveNewBookAPISuccess, updateBookAPISuccess
} from "./books.action";
import {EMPTY, map, mergeMap, switchMap, withLatestFrom} from "rxjs";
import {selectBooks} from "./books.selector";
import {Appstate} from "../../shared/store/appstate";
import {setAPIStatus} from "../../shared/store/app.action";

@Injectable()
export class BooksEffect {
  constructor(private action$: Actions, private booksService: BooksService,
              private store: Store, private appStore: Store<Appstate>) {
  }


  loadAllBooks$ = createEffect(() => this.action$.pipe(
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
          setAPIStatus({apiState: {apiResponseMessage: '', apiStatus: ''}})
        );
        return this.booksService.create(action.newBook).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiState: {apiResponseMessage: '', apiStatus: 'success'},
              })
            );
            return saveNewBookAPISuccess({newBook: data});
          })
        );
      })
    );
  });

  updateBook$ = createEffect(() => {
    return this.action$.pipe(
      ofType(invokeUpdateBookAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({apiState: {apiResponseMessage: '', apiStatus: ''}})
        );
        return this.booksService.update(action.updateBook).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiState: {apiResponseMessage: '', apiStatus: 'success'},
              })
            )
            return updateBookAPISuccess({updateBook: data});
          })
        )
      })
    )
  });

  deleteBook$ = createEffect(() => {
    return this.action$.pipe(
      ofType(invokeDeleteBookAPI),
      switchMap((actions) => {
        this.appStore.dispatch(
          setAPIStatus({apiState: {apiResponseMessage: '', apiStatus: ''}})
        );
        return this.booksService.delete(actions.id).pipe(
          map(() => {
            this.appStore.dispatch(
              setAPIStatus({
                apiState: {apiResponseMessage: '', apiStatus: 'success'},
              })
            );
            return deleteBookAPISuccess({id: actions.id});
          })
        )
      })
    )
  })
}

