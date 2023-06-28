import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {userStub} from "../../assets/shared.data";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): User {
    return userStub;
  }
}
