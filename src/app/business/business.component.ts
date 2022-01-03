import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  hood:any;
  businesses:any

  constructor(private accountservice:AccountService) { }

  ngOnInit(): void {
    this.accountservice.getProfile().subscribe((response:any)=>{
      this.hood = response['hood']
    })
    this.accountservice.getBusinesses(this.hood.id).subscribe((response:any) =>{
     this.businesses = response['businesses']
     console.log(this.businesses)
    },error => {
      console.log(error)
    })
  }

}
