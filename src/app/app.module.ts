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

import { BusinessComponent } from './business/business.component';
import { ResidentsComponent } from './residents/residents.component';
import { HotlinesComponent } from './hotlines/hotlines.component';
import { NewBusinessComponent } from './new-business/new-business.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OccurenceComponent } from './occurence/occurence.component';
import { BusinessSearchComponent } from './business-search/business-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HoodsComponent,
    HoodComponent,
    ProfileComponent,
    NewHoodComponent,
    BusinessComponent,
    ResidentsComponent,
    HotlinesComponent,
    NewBusinessComponent,
    NavbarComponent,
    OccurenceComponent,
    BusinessSearchComponent
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
