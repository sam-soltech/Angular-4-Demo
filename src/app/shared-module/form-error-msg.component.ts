import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ValidationService } from '../global-services/validation.service';


@Component({
  selector: 'form-error-msg',
  template: `<div class="form-error-msg" [class.active]="errorMessage !== null"><i class="fa fa-exclamation-triangle"></i> {{errorMessage}}</div>`
})
export class FormErrorMsgComponent {
  messages:Object;
  @Input() controls:FormGroup;
  @Input() errormsg:string = '';
  constructor(
    private validationService: ValidationService
  ) {
  }

  get errorMessage() {
      let msg = null;
      if(this.errormsg){
        msg = this.errormsg;
      }
      Object.keys(this.controls.controls).forEach((key,index) => {
       if(!msg){
         msg = this.getErrors(this.controls.controls[key]);
       }
      });
      return msg;
  }

  getErrors = (control:AbstractControl) => {
    for (let propertyName in control.errors) {
       if (control.errors.hasOwnProperty(propertyName) && control.touched) {
         return this.validationService.getValidatorErrorMessage(propertyName);
       }
     }
     return null;
  }
}
