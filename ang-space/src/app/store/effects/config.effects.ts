import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, switchMap} from 'rxjs';
import {EConfigAction, GetConfig, GetConfigSuccess} from '../actions/config.actions';
import {IConfig} from '../../interfaces/user.interface';

@Injectable()
export class ConfigEffects {
  getConfigs$ = createEffect(() =>
  this._actions$.pipe(
    ofType<GetConfig>(EConfigAction.GetConfig),
    switchMap(() => this._configService.getConfig()),
    switchMap((config: IConfig) => of(new GetConfigSuccess(config)))
  ));

  constructor(private _actions$: Actions, private _configService: ConfigService) {
  }
}
