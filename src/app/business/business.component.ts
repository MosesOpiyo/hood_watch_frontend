import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { BusinessServiceService } from '../business-service.service'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  hood:any;
  businesses:any
  searchTerm:any

  constructor(private accountservice:AccountService,private businessService:BusinessServiceService,private route:Router) { }

  search_item(){
    this.route.navigate(['search']);
    this.businessService.newSearch(this.searchTerm)
  }

  ngOnInit(): void {
    this.accountservice.getProfile().subscribe((response:any)=>{
      this.hood = response['hood']
      this.accountservice.getBusinesses(this.hood.id).subscribe((response:any) =>{
        this.businesses = response['businesses']
        console.log(this.businesses)
       },error => {
         console.log(error)
       })
       
    })
    this.businessService.current_term.subscribe(term => this.searchTerm = term)
    
  }

}
