import {IUser} from '../../interfaces/user.interface';


export interface IUserState {
  users: IUser[] | null;
  selectedUser: any;
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null
}
