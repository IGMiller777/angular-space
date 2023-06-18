import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {IAppState} from '../state/app.state';
import {select, Store} from '@ngrx/store';
import {EUserActions, GetUser, GetUsers, GetUsersSuccess, GetUserSuccess} from '../actions/user.actions';
import {map, of, switchMap, withLatestFrom} from 'rxjs';
import {selectUserList} from '../selectors/user.selectors';
import {IUserHttp} from '../../interfaces/user.interface';
import {UserService} from '../../services/user.service';

@Injectable()
export class UserEffects {
  getUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType<GetUser>(EUserActions.GetUser),
      map(action => action.payload),
      withLatestFrom(this._store.pipe(select(selectUserList))),
      switchMap(([id, users]) => {
        const selectedUser = users?.filter(user => user.id === +id)[0];
        return of(new GetUserSuccess(selectedUser));
      })
    )
  )

  getUsers$ = createEffect(() =>
  this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this._userService.getUsers()),
    switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
  ));

  constructor(private _userService: UserService, private _actions$: Actions, private _store: Store<IAppState>) {
  }
}
