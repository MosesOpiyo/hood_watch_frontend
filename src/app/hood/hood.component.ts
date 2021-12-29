import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Occurence } from '../occurence';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.css']
})
export class HoodComponent implements OnInit {
  hood:any;
  profile:any
  occurences:any;
  occcurence:any

  postOccurence(event:FormData){


    this.accountservice.postOccurence(event,this.hood['id']).subscribe(response => {
      alert("Your report has been posted")
      this.ngOnInit()
    },error => {
     alert("There was a problem posting the report")
     console.log(error)
    })
  }

  constructor(private accountservice:AccountService,private route:Router) { }
 
  

  ngOnInit(): void {

    this.accountservice.getProfile().subscribe((response:any) =>{
     this.hood = response['hood']
    })

    this.accountservice.getOccurence(this.hood.id).subscribe((response:any) =>{
      this.occurences = response
      console.log(this.occurences)
    },error => {
      console.log(error)
    })

  
    
  }

}
