import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


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
import { NieuwsToevoegenComponent } from './components/nieuws/nieuws-toevoegen/nieuws-toevoegen.component';
import { NieuwsberichtComponent } from './components/nieuws/nieuwsbericht/nieuwsbericht.component';

import { NieuwsDataService } from './services/nieuws-data.service';
import { NieuwsAanpassenComponent } from './components/nieuws/nieuws-aanpassen/nieuws-aanpassen.component';
import { NieuwsberichtDetailComponent } from './components/nieuws/nieuwsbericht-detail/nieuwsbericht-detail.component';
import { NieuwsModule } from './components/nieuws/nieuws-module';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
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
    PageNotFoundComponent,
    LinksComponent,
    DownloadsComponent,
  ],
  imports: [
    NieuwsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
