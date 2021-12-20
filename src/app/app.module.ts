import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HoodsComponent } from './hoods/hoods.component';
import { HoodComponent } from './hood/hood.component';
import { ProfileComponent } from './profile/profile.component';
import { NewHoodComponent } from './new-hood/new-hood.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HoodsComponent,
    HoodComponent,
    ProfileComponent,
    NewHoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
