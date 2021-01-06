import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './nav-bar/logo/logo.component';
import { SearchBarComponent } from './nav-bar/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    MainBodyComponent,
    FooterComponent,
    LogoComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
