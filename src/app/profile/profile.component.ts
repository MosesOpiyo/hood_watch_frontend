import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:any
hood:any
  constructor(private accountservice:AccountService) { }

  ngOnInit(): void {
    this.accountservice.getProfile().subscribe((response:any)=>{
      this.user = response['user']
    })
    this.accountservice.getProfile().subscribe((response:any)=>{
      this.hood = response["hood"]
    })
  }

}
