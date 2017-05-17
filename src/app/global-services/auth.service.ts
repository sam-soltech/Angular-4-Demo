import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import {Observable} from "rxjs";
import { BaseService } from './base.service';
import {IUser, User} from '../interfaces-classes/IUser';

@Injectable()
export class AuthService extends BaseService {
  public loggedIn:boolean = false;
  public redirectUrl: string = '';
  constructor(
    private http: Http
  ){
    super();
  }

  setLogin = (value:boolean) => {
    this.loggedIn = value;
  }

  login = (keys : any): Observable<IUser>  => {
    let u = new User();
    return Observable.of(u);
  }

  logout = (id : number): Observable<any>  => {
    return this.http.post(this.baseUrl + '/auth/logout/'+id,{},this.options)
  }

}
