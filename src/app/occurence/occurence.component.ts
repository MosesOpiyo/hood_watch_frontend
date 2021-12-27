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

  occurence = new Occurence("","")

  @Input()
  hood:any;

  form = new FormData()

  @Output() formSubmitEvent = new EventEmitter<FormData>();

  postOccurence(){
    this.form.append('name',this.occurence.name),
    this.form.append('description',this.occurence.description)

    this.formSubmitEvent.emit(this.form)
    this.occurence.name = ""
    this.occurence.description = ""
  }

  ngOnInit(): void {
  }

}
