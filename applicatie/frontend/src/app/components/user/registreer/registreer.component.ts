import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../../auth/authentication.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? { 'passwordTooShort': 
      { requiredLength: length, actualLength: control.value.length } } : null;
  };
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}

@Component({
  selector: 'app-registreer',
  templateUrl: './registreer.component.html',
  styleUrls: ['./registreer.component.css']
})
export class RegistreerComponent implements OnInit {
  private errorMsg: string;
  private registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router){}

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)], this.serverSideValidateUsername()],
      naam: ['', [Validators.required]],
      voornaam: ['', [Validators.required]],
      email: ['', [Validators.required], this.serverSideValidateEmail()],
      personeelsnummer: ['', [Validators.required], this.serverSideValidatePersoneelsnummer()],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, passwordValidator(6)]],
        confirmPassword: ['', Validators.required]
      }, { validator: comparePasswords })
    });
  }
  serverSideValidateUsername(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.authenticationService
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
      return this.authenticationService
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
      return this.authenticationService
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
    this.authenticationService
      .register(
        this.registerForm.value.username, 
        this.registerForm.value.naam,
        this.registerForm.value.voornaam,
        this.registerForm.value.email,
        this.registerForm.value.personeelsnummer,
        this.registerForm.get("passwordGroup").value.password)
      .subscribe(
        val => {
          if (val) {
            this.router.navigate(['/home']);
          }
        },
        (error: HttpErrorResponse) => {
          this.errorMsg = `Error ${ error.status } while trying to register user ${this.registerForm.value.username}:
                             ${ error.error }`;
        }
    ); 
  } 
  closeMessage(){
    document.getElementById("message").style.display = "none";
  }
}
