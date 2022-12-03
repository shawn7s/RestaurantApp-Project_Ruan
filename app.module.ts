import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    RouterModule,
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    MenuDetailComponent,
    CheckoutComponent,
    RegisterComponent,
    LoginComponent,
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
