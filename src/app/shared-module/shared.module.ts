import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from '../global-services/auth.service';
import {UserService} from '../global-services/user.service';
import {BaseService} from '../global-services/base.service';
import { ValidationService } from '../global-services/validation.service';
import {ErrorMsgComponent} from './error-msg.component';
import {FormErrorMsgComponent} from './form-error-msg.component';
import { EmptyPipe } from './empty.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorMsgComponent,
    FormErrorMsgComponent,
    EmptyPipe
  ],
  providers: [ValidationService],
  exports: [
    ErrorMsgComponent,
    FormErrorMsgComponent,
    EmptyPipe
  ]
})
export class AppSharedModule { }
