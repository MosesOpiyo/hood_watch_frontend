import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {
  hood:any
  residents:any

  constructor(private accountService:AccountService) { }
  

  ngOnInit(): void {
    this.accountService.getProfile().subscribe((response:any) =>{
     this.hood = response['hood']
     
     this.accountService.getResidents(this.hood.id).subscribe((response:any)=>{
      this.residents = response['residents']
      console.log(this.residents)
    })
    })
    
  }

}
