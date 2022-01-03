import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isAuthenticated: any;
  hood:any

  constructor(private authService:AuthService, private accountService:AccountService) { }


  logout(){
    this.accountService.logout()
  }
  

  ngOnInit(): void {
    this.authService.currentStatus.subscribe(status => this.isAuthenticated = status)
    this.accountService.getProfile().subscribe((response:any)=>{
      this.hood = response["hood"]

    })
  }

}
