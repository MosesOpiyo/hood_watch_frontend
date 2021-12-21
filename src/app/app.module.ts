import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HoodsComponent } from './hoods/hoods.component';
import { HoodComponent } from './hood/hood.component';
import { ProfileComponent } from './profile/profile.component';
import { NewHoodComponent } from './new-hood/new-hood.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OccurenceComponent } from './occurence/occurence.component';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HoodsComponent,
    HoodComponent,
    ProfileComponent,
    NewHoodComponent,
    OccurenceComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
