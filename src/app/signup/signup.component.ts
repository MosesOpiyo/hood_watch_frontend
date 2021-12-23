import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private accountService:AccountService) { }
  email:any; 
  username:any; 
  password:any;

  

  signUp(){
    let form = new FormData()
    form.append('email',this.email)
    form.append('username',this.username)
    form.append('password',this.password)
    this.accountService.register(form)
  }

  ngOnInit(): void {
  }

 

}
