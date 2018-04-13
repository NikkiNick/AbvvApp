import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../service/auth-guard.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../../../classes/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _user: Observable<User>;
  private loginForm: FormGroup;
  private errorMsg: string;

  constructor(private authService: AuthenticationService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      loginUsername: ['', Validators.required],
      loginPassword: ['', Validators.required]
    });
  }
  onSubmit() {
    this.authService
      .login(this.loginForm.value.loginUsername, this.loginForm.value.loginPassword)
      .subscribe(
        val => {
          if (val) {
            this._user = this.authService.getUser(this.authService.user$.getValue());
            console.log(this.authService.user$.getValue());
            if (this.authService.redirectUrl) {
              this.router.navigateByUrl(this.authService.redirectUrl);
              this.authService.redirectUrl = undefined;
            } else {
              this.router.navigate(['/home']);
            }
          }
        }, 
        err =>  this.errorMsg = "Error while logging in user"
        );
  }
  logOut(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }
  get isLoggedIn(): boolean{
    if(this.authService.user$.getValue()){
      return true;
    }
    return false;
  }
  get user(): Observable<User>{
    return this._user;
  }
}

