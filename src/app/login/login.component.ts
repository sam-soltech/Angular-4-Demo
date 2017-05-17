import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../global-services/validation.service';
import { Title }     from '@angular/platform-browser';
import {AuthService} from '../global-services/auth.service';
import {IUser} from '../interfaces-classes';
import {UserService} from '../global-services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private validationService:ValidationService,
    private titleService: Title,
    private authService:AuthService,
    private userService: UserService
  ) {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required,validationService.emailValidator]],
      'password': ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login = () => {

  if(this.loginForm.valid){
    this.authService.login(this.loginForm.value).subscribe((response: IUser) => {
        this.authService.loggedIn = true;
        // this.userService.setUser(response);
        this.router.navigate(['/listing']);
      }, (error: any) => {
        console.error(error)
      })
  }
}

}
