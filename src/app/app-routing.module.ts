
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import { ListpageComponent } from './listpage/listpage.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const routes: Routes = [

  {path:'', component: HomepageComponent, children: [
    
    {path: 'Home', component: Homepage1Component},
    {path: 'List', component: ListpageComponent},
    {path: 'APIService', component:HttpClient},
    {path:'API Service', component:HttpClientModule},
   
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
