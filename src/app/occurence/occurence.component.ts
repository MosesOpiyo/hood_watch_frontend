import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { AccountService } from '../account.service';
import { Occurence } from '../occurence';

@Component({
  selector: 'app-occurence',
  templateUrl: './occurence.component.html',
  styleUrls: ['./occurence.component.css']
})
export class OccurenceComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  new_occurence = new Occurence("","")

  @Input()
  hood:any;

  form = new FormData()

  @Output() formSubmitEvent = new EventEmitter<FormData>();

  postOccurence(){
    this.form.append('name',this.new_occurence.name),
    this.form.append('description',this.new_occurence.description)


    this.formSubmitEvent.emit(this.form)
    this.new_occurence.name = ""
    
  }

  ngOnInit(): void {
  }

}
