import {IUserState} from '../state/user.state';
import {IConfigState, initialConfigState} from '../state/config.state';
import {ConfigActions, EConfigAction} from '../actions/config.actions';

export const configReducers = (
  state = initialConfigState,
  action: ConfigActions
): IConfigState => {
  switch (action.type) {
    case EConfigAction.GetConfigSuccess:
      return {
        ...state,
        config: action.payload
      }
    default:
      return state;
  }
}
