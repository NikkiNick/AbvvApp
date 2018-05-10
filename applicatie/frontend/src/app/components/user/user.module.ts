import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistreerComponent } from './registreer/registreer.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './../../auth/authentication.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './../../auth/auth.guard';
import { ProfielAanpassenComponent } from './profiel-aanpassen/profiel-aanpassen.component';
import { basehttpInterceptorProviders } from '../../http-interceptors';


const userRoutes: Routes = [
  {path: 'gebruiker/registreer', component: RegistreerComponent},
  {path: 'gebruiker/profiel/wijzig', component: ProfielAanpassenComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    HttpModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    RegistreerComponent,
    ProfielAanpassenComponent
  ],
  providers: [
    basehttpInterceptorProviders,
    AuthenticationService,
    AuthGuard
  ]
})
export class UserModule { }
