
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import { ListpageComponent } from './listpage/listpage.component';
import { Ppp1Component } from './ppp1/ppp1.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'', component: HomepageComponent, children: [
    
    {path: 'Home', component: Homepage1Component},
    {path: 'List', component: ListpageComponent},
    {path: 'ppp1',component: Ppp1Component},
    {path: 'Login', component: LoginComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 })
export class AppRoutingModule { }
