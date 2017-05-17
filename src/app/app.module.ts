import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes';
import {AppSharedModule} from './shared-module/shared.module';
import {AuthService} from './global-services/auth.service';
import {UserService} from './global-services/user.service';
import {BaseService} from './global-services/base.service';
import {AuthGuardService} from './global-services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppSharedModule,
    HttpModule
  ],
  providers: [AuthService,UserService,BaseService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
