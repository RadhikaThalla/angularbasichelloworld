import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import { ListpageComponent } from './listpage/listpage.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    Homepage1Component,
    ListpageComponent,
  
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
