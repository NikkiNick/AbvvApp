import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
