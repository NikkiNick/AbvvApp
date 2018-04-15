import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from './../../../auth/auth-guard.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../../auth/authentication.service';
import { User } from '../../../classes/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private  _user: User;
  private loginForm: FormGroup;
  private errorMsg: string;

  constructor(private authService: AuthenticationService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    if(this.isLoggedIn){
      this.authService.getUser(this.authService.user$.getValue()).subscribe(
        user => this._user = user);
    }
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
            this.authService.getUser(this.authService.user$.getValue()).subscribe(
              user => this._user = user
            );
            if (this.authService.redirectUrl) {
              this.router.navigateByUrl(this.authService.redirectUrl);
              this.authService.redirectUrl = undefined;
            } else {
              this.router.navigate(['/home']);
            }
          }
        }, 
        err =>  {
          this.errorMsg = "Probleem bij het inloggen";
          console.log(err.status+" - "+err.message);
        });
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
  get isUserAdmin(): boolean{
    return this.authService.isUserAdmin();
  }
  get user(): User{
    return this._user;
  }

}

