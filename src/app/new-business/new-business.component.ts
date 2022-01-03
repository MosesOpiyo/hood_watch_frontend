import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Business } from '../business';
import { Service } from '../service';

@Component({
  selector: 'app-new-business',
  templateUrl: './new-business.component.html',
  styleUrls: ['./new-business.component.css']
})
export class NewBusinessComponent implements OnInit {
  new_business = new Business("")
  new_service = new Service("","")
  createBusiness(){
    let form = new FormData()
    form.append("name",this.new_business.name),
    form.append("service",this.new_service.name),
    form.append("service_description",this.new_service.description)
    this.accountservice.registerBusiness(form)
  }

  constructor(private accountservice: AccountService) { }

  ngOnInit(): void {
  }

}
