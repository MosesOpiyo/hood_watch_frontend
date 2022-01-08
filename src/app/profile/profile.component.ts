import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { PofilePic } from '../pofile-pic'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
new_profile_pic = new PofilePic("")
user:any
hood:any
pic:any
  constructor(private accountservice:AccountService) { }
profile_pic(){
  let form = new FormData()
  form.append("profile_pic",this.new_profile_pic.profile_pic)
  this.accountservice.profilePic(form)
}


  ngOnInit(): void {
    this.accountservice.getProfile().subscribe((response:any)=>{
      this.user = response['user']
    })
    this.accountservice.getProfile().subscribe((response:any)=>{
      this.hood = response["hood"]
    })
    
  }

}
