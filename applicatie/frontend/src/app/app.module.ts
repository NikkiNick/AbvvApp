import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { LinksComponent } from './components/links/links.component';
import { DownloadsComponent } from './components/downloads/downloads.component';

import { NieuwsModule } from './components/nieuws/nieuws.module';
import { UserModule } from './components/user/user.module';
import { LoginComponent } from './components/user/login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { NoAccesComponent } from './components/errors/no-acces/no-acces.component';
import { AdminModule } from './components/admin/admin.module';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'links', component: LinksComponent},
  {path:'downloads', component: DownloadsComponent},
  {path: '401', component: NoAccesComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];
@NgModule({
  imports: [
    NieuwsModule,
    UserModule,
    AdminModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    LinksComponent,
    DownloadsComponent,
    LoginComponent,
    NoAccesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
