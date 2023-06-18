import {IConfig} from '../../interfaces/user.interface';


export interface IConfigState {
  config: IConfig | null;
}

export const initialConfigState: IConfigState = {
  config: null
}
