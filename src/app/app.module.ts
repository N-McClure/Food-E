import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imported By Me:
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginAndSignupComponent } from './login-and-signup/login-and-signup.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { MiddleFooterComponent } from './middle-footer/middle-footer.component';

import { HttpClientModule } from '@angular/common/http';

// Defined Routes for Home page / app and the Login / Signup page:
  // Default route or "" = Login / Signup Page.
  // non-default route or !"" = Application. 
  const approutes: Routes = [
    {path: "", component: LoginAndSignupComponent}, 
    {path: "home", component: SidebarComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    LoginAndSignupComponent,
    SignupComponent,
    LoginComponent,
    LogoComponent,
    ProfileComponent,
    MiddleFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(approutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
