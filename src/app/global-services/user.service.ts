import { Injectable } from '@angular/core';
import {IUser} from '../interfaces-classes/IUser';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  private user: IUser;
  constructor(

  ) { }

  getUser = (): IUser => {
    return <IUser>JSON.parse(sessionStorage.getItem('user'));
  }

  clearUser = () => {
    window.sessionStorage.removeItem('user');
    this.user = null;
  }

  setUser = (user:IUser) => {
    this.user = user;
    sessionStorage.setItem('user', JSON.stringify(user));
    return this.getUser();
  }
}
