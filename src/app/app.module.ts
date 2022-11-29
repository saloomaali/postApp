import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute : Routes=[
  {
    path:"",
    component:addEventListener
  },
  {
    path:"view",
    component:ViewComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
