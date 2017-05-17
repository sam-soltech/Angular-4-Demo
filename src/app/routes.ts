import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AuthGuardService} from './global-services/auth-guard.service';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',  component:LoginComponent },
  {
    path: 'list',
    canActivateChild: [AuthGuardService],
    loadChildren: './listings-module/listings.module#ListingsModule'
  },
  { path: '**', redirectTo: 'login'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})


export class AppRoutingModule { }
