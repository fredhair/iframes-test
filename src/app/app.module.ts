import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickyIframesModule } from './modules/sticky-iframes/sticky-iframes.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './pages/partials/navbar/navbar.component';
import { FirstExamplePageComponent } from './pages/first-example-page/first-example-page.component';
import { SecondExamplePageComponent } from './pages/second-example-page/second-example-page.component';
import { ThirdExamplePageComponent } from './pages/third-example-page/third-example-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FirstExamplePageComponent,
    SecondExamplePageComponent,
    ThirdExamplePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StickyIframesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
