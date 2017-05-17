import {Injectable} from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    Router,
    Route,
    CanLoad,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    RouterState
} from '@angular/router';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {BaseService} from './base.service';
import {Observable} from "rxjs";
import { Response } from '@angular/http';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild{
    state: RouterState
    snapshot: RouterStateSnapshot

    constructor(
      public authService: AuthService,
      private baseService: BaseService,
      private userService: UserService,
      public router: Router
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      let url = state.url;
      return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> {
      let url = state.url;
      return this.checkLogin(url);
    }

    checkLogin(url: string): Observable<boolean> {
      // if(!this.authService.loggedIn){
      //   return Observable.of(false);
      // }
      // else {
      //   return Observable.of(true);
      // }
      return Observable.of(true);
    }
}
