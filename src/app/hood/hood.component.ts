import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.css']
})
export class HoodComponent implements OnInit {
  hood:any;
  occurences:any;

  postOccurence(event:FormData){
    this.accountservice.postOccurence(event,this.hood['id']).subscribe(response =>{
      alert('Wonderful,your report has been posted.')
      this.ngOnInit()
    },error =>{
      alert('Sorry,something went wrong with posting the report.')
    })
  }

  constructor(private accountservice:AccountService) { }
  
  

  ngOnInit(): void {

    this.accountservice.getProfile().subscribe((response:any) => {
      this.hood = response['hood']
      console.log(this.hood)
    })
  
    this.accountservice.getOccurence(this.hood.id).subscribe((response:any) =>{
      this.occurences = response['occurences']
      console.log(this.occurences)      
    },error =>{
      console.log(error)
    })
  }

}
