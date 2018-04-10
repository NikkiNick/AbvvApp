import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistreerComponent } from './registreer/registreer.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './service/authentication.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './service/auth-guard.service';


const userRoutes: Routes = [
  {path: 'gebruiker/registreer', component: RegistreerComponent}
];

@NgModule({
  imports: [
    HttpModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    RegistreerComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ]
})
export class UserModule { }
