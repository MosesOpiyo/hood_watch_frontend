import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HoodsComponent } from './hoods/hoods.component';
import { HoodComponent } from './hood/hood.component';
import { NewHoodComponent } from './new-hood/new-hood.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'hoods',component:HoodsComponent},
  {path:'hood',component:HoodComponent},
  {path:'new-hood',component:NewHoodComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
