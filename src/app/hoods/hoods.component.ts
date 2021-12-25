import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-hoods',
  templateUrl: './hoods.component.html',
  styleUrls: ['./hoods.component.css']
})
export class HoodsComponent implements OnInit {
  hood:any
 
  constructor(private accountservice:AccountService) { }

  ngOnInit(): void {
    this.accountservice.getProfile().subscribe((response:any) =>{
      this.hood = response['hood']
      console.log(this.hood)
    })
  }

}
