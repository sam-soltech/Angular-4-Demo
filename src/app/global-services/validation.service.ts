import { FormGroup, FormControl } from '@angular/forms';


export class ValidationService {
  private messages:any;
  constructor(){
    this.messages = {
        'required': 'Required',
        'noSpaces': 'Spaces are invalid characters',
        'invalidEmailAddress': 'Invalid email address',
        'invalidTitle': 'This is not a valid segment title',
        'invalidPassword': 'Password must be at least 8 characters, contain a number, and mixed case letters.',
        'invalidPhone': 'Must be a valid 10 digit number',
        'invalidDate': 'Invalid Date',
        'notEquivalent': 'Passwords do not match',
        'notUniqueMember':'User is already a member of this workspace'
    };
  }

  addValidation = (key:string,msg:string) => {
    this.messages[key] = msg;
  }

  getValidatorErrorMessage = (key:string) => {
    return this.messages[key];
  }

  emptyStringValidator = (control:FormControl) => {
    return !control.value.includes(' ') ? null : {
      noSpaces: false
    }
  }

  emailValidator = (control:FormControl) => {
    var emailPattern = new RegExp(/[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/)
    return emailPattern.test(control.value) ? null : {
       invalidEmailAddress: false
    };
  }

  passwordValidator = (control:FormControl) => {
    var passwordPattern = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[^]{8,}/)
    if(control.value){
      return passwordPattern.test(control.value) ? null : {
         invalidPassword: false
      };
    }
    else {
      return null;
    }

  }

  phoneValidator = (control: FormControl) => {
    var phonePattern = new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
    if(control.value){
      return phonePattern.test(control.value) ? null : {
        invalidPhone: false
      }
    }else{
      return null;
    }
  }

 matchingPasswords = (passwordKey: string, passwordConfirmationKey: string) => {
   return (group: FormGroup) => {
     let passwordInput = group.controls[passwordKey];
     let passwordConfirmationInput = group.controls[passwordConfirmationKey];
     if (passwordInput.value && passwordInput.value !== passwordConfirmationInput.value) {
       return passwordConfirmationInput.setErrors({notEquivalent: true})
     }
   }
 }


 existAlready = (list:[any], key:string) => {
    return (control: FormControl) => {
      if(!list || !list.length){return null}
      let cleaned = control.value.replace(' ','');
      let existcheck = list.filter((item)=>{
        if(key){
          if(item[key] == cleaned){ return item; }
        }
        else {
          if(cleaned == item){ return item; }
        }
      });
      if(existcheck.length){
        return {notUniqueMember: true}
      }
      else {
         return null;
      }
    }
 }
}
