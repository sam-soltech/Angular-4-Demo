import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions,URLSearchParams,QueryEncoder } from '@angular/http';
import {Observable} from "rxjs";
import { Router } from '@angular/router';
import { UserService } from './user.service';
import {environment} from '../../environments/environment';


@Injectable()
export class BaseService {
  private token: string;
  public baseUrl: string;
  constructor() {
    this.baseUrl = environment.baseUrl;
  }

  get headers() : Headers {
    this.token = <string>JSON.parse(sessionStorage.getItem('token'));
    let temp = new Headers({
      'Content-Type':'application/json',
      // 'Authorization':this.token ? this.token : null
    });

    return temp;
  }

  get options(): RequestOptions {
    return new RequestOptions({ headers: this.headers , withCredentials: true });
  }

  setToken = (token:string) => {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  clearToken = () => {
    this.token = null;
    window.sessionStorage.removeItem('token');
  }

  handleError = (error:Response,router:Router) => {
    if(error.status == 0){
      router.navigate(['/'])
    }

    else if (error.status == 401){
      router.navigate(['/login']);
    }

    else {
      return error
    }


  }

}
