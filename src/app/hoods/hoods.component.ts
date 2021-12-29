import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-hoods',
  templateUrl: './hoods.component.html',
  styleUrls: ['./hoods.component.css']
})
export class HoodsComponent implements OnInit {
  hoods:any
  hood:any

 
  constructor(private accountservice:AccountService,private route:Router) { }
   joinHood(id:number){
    this.accountservice.joinHood(id).subscribe(response =>{
      alert("welcome to the hood")
      console.log(response)
      this.ngOnInit();
    },error=>{
      console.log(error)
    })
   }
  
  ngOnInit(): void {
    this.accountservice.allHoods().subscribe(response => {
      this.hoods = response
    },error =>{
      console.log(error)
    })
    this.accountservice.getProfile().subscribe((response:any) =>{
      this.hood = response["hood"]
      if(this.hood != null){
        this.route.navigate(['hood'])
      }
    })

    
    
  }

}
