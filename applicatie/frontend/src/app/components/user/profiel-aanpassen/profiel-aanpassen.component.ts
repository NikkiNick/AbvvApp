import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthenticationService } from '../../../auth/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../classes/user';

@Component({
  selector: 'app-profiel-aanpassen',
  templateUrl: './profiel-aanpassen.component.html',
  styleUrls: ['./profiel-aanpassen.component.css'],
  providers: [AuthenticationService]
})
export class ProfielAanpassenComponent implements OnInit {

  private _user: User;
  private _userOrigineel:User;
  private errorMsg: string;
  private _aanpassenComplete: boolean = false;
  private profileForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router){


  }

  ngOnInit() {
    this.authService.getUser(this.authService.user$.getValue()).subscribe(
      user => {
        this._user = user;
      },
      err => {},
      () => {
        this._userOrigineel = this._user;
        this.profileForm = this.fb.group({
          username: [this._user.username, [Validators.required, Validators.minLength(4)], this.serverSideValidateUsername()],
          naam: [this._user.naam, [Validators.required]],
          voornaam: [this._user.voornaam, [Validators.required]],
          email: [this._user.email, [Validators.required], this.serverSideValidateEmail()],
          personeelsnummer: [this._user.personeelsnummer, [Validators.required], this.serverSideValidatePersoneelsnummer()]
        }); 
      }
    );

  }
  serverSideValidateUsername(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.authService
        .checkUserNameAvailability(control.value)
        .pipe(
          map(available => {
            if (available) {
              return null;
            }
            return { userAlreadyExists: true };
          })
        );
     };
  }
  serverSideValidateEmail(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.authService
        .checkEmailAvailability(control.value)
        .pipe(
          map(available => {
            if (available) {
              return null;
            }
            return { emailAlreadyExists: true };
          })
        );
     };
  }
  serverSideValidatePersoneelsnummer(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.authService
        .checkPersoneelsnummerAvailability(control.value)
        .pipe(
          map(available => {
            if (available) {
              return null;
            }
            return { personeelsnummerAlreadyExists: true };
          })
        );
     };
  }
  onSubmit(){
    this.authService
      .pasProfielAan(
        this.profileForm.value.username, 
        this.profileForm.value.naam,
        this.profileForm.value.voornaam,
        this.profileForm.value.email,
        this.profileForm.value.personeelsnummer)
      .subscribe(
        reg => {
          if (reg) {
            this._aanpassenComplete = true;
            //this.router.navigate(['/home']);
          }
        },
        (error: HttpErrorResponse) => {
          this.errorMsg = `Error ${ error.status } tijdens het aanpassen van het profiel van ${this.profileForm.value.username}:
                             ${ error.error }`;
        }
    ); 
  } 
  closeMessage(){
    this._aanpassenComplete = false;
    this.router.navigate(['/home']);
  }
  get isChanged(): boolean{
    return this._aanpassenComplete;
  }
  get user(): User{
    return this._user;
  }
  onReset(){
    this.profileForm.setValue({
      username: this._userOrigineel.username,
      naam: this._userOrigineel.naam,
      voornaam: this._userOrigineel.voornaam,
      email: this._userOrigineel.email,
      personeelsnummer: this._userOrigineel.personeelsnummer
    });
  }

}
