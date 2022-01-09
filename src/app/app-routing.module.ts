import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HoodsComponent } from './hoods/hoods.component';
import { HoodComponent } from './hood/hood.component';
import { NewHoodComponent } from './new-hood/new-hood.component';
import { ProfileComponent } from './profile/profile.component';
import { BusinessComponent } from './business/business.component';
import { NewBusinessComponent } from './new-business/new-business.component';
import { ResidentsComponent } from './residents/residents.component';
import { HotlinesComponent } from './hotlines/hotlines.component';
import { BusinessSearchComponent } from './business-search/business-search.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'hoods',component:HoodsComponent},
  {path:'hood',component:HoodComponent},
  {path:'new-hood',component:NewHoodComponent},
  {path:'businesses',component:BusinessComponent},
  {path:'new-business',component:NewBusinessComponent},
  {path:'residents',component:ResidentsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'hotlines',component:HotlinesComponent},
  {path:'search',component:BusinessSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
