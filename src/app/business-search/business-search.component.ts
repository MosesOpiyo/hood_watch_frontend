import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { BusinessServiceService } from '../business-service.service';

@Component({
  selector: 'app-business-search',
  templateUrl: './business-search.component.html',
  styleUrls: ['./business-search.component.css']
})
export class BusinessSearchComponent implements OnInit {

  searchTerm:any;

  businesses:any;
  

  constructor(private accountService:AccountService,private businessService:BusinessServiceService) { }

  ngOnInit(): void {
    this.businessService.current_term.subscribe(term => this.searchTerm = term)

    this.accountService.searchBusiness(this.searchTerm).subscribe((response:any) => {
      this.businesses = response['businesses']
      console.log(this.businesses)
    },error=>{
      console.log(error)
    })
  }

}
