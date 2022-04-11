
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import { ListpageComponent } from './listpage/listpage.component';
import { TodosService } from './todos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from "@angular/common/http";
import { SidenavComponent } from './sidenav/sidenav.component';
import { Ppp1Component } from './ppp1/ppp1.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations : [
    AppComponent,
    HomepageComponent,
    Homepage1Component,
    ListpageComponent,
    SidenavComponent,
    Ppp1Component,
    DialogboxComponent,
    AboutusComponent,
    LoginComponent
  

    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
    

  
  
   ],
  providers: [TodosService],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
