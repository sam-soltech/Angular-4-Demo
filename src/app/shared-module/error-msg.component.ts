import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../global-services/validation.service';

@Component({
  selector: 'error-msg',
  template: `<span class="error-message" *ngIf="errorMessage !== null">{{errorMessage}}</span>`
})
export class ErrorMsgComponent {
  messages:Object;
  @Input() control: FormControl;
  constructor(
    private validationService: ValidationService
  ) {
  }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return this.validationService.getValidatorErrorMessage(propertyName);
      }
    }

    return null;
  }
}
