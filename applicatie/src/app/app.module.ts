import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainComponent } from './components/main/main.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NieuwsComponent } from './components/nieuws/nieuws.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LinksComponent } from './components/links/links.component';
import { DownloadsComponent } from './components/downloads/downloads.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'nieuws', component: NieuwsComponent},
  {path:'links', component: LinksComponent},
  {path:'downloads', component: DownloadsComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    UserComponent,
    AboutComponent,
    HomeComponent,
    NieuwsComponent,
    PageNotFoundComponent,
    LinksComponent,
    DownloadsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
