import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  email: any;
  password: any;
  profile:any;

  loginUser(){
    let form = new FormData();
    form.append('username',this.email),
    form.append('password',this.password),
    this.accountService.login(form)
  }

  ngOnInit(): void {
  }

}
