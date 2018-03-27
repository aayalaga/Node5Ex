import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this

const routes: Routes = [
  {
    path: '', // Path to home component defined with <a routerLink="">Home</a></li> in app.component.html
    component: HomeComponent
  },
  {
    path: 'about/:id', //This is called a route parameter, multiple route parameters can be added
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
