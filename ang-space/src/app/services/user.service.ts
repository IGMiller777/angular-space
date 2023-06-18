import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IUserHttp} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = `${environment.apiUrl}users.json`;
  constructor(private _http: HttpClient) { }

  getUsers(): Observable<IUserHttp> {
    return this._http.get<IUserHttp>(this.usersUrl);
  }
}
