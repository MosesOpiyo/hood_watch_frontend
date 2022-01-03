import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-hotlines',
  templateUrl: './hotlines.component.html',
  styleUrls: ['./hotlines.component.css']
})
export class HotlinesComponent implements OnInit {
hood:any
  constructor(private accountservice:AccountService) { }

  ngOnInit(): void {
    this.accountservice.getProfile().subscribe((response:any) =>{
      this.hood = response['hood']
     })
  }

}
