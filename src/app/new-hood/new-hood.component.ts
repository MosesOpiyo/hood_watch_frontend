import { Component, OnInit } from '@angular/core';
import { Hood } from '../hood';
import { AccountService } from '../account.service'; 

@Component({
  selector: 'app-new-hood',
  templateUrl: './new-hood.component.html',
  styleUrls: ['./new-hood.component.css']
})
export class NewHoodComponent implements OnInit {
  
  new_hood = new Hood("","","","")
  createHood(){
    let form = new FormData()
    form.append("name",this.new_hood.name)
    form.append("location",this.new_hood.name)
    form.append("police_line",this.new_hood.police_hotline)
    form.append("emergency_line",this.new_hood.emergency_hotline)

    this.accountService.createHood(form)
  }

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

}
