import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {AppServiceService} from '../../app-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-search-students',
  templateUrl: './search-students.component.html',
  styleUrls: ['./search-students.component.css']
})
export class SearchStudentsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void{

  }

  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string>= new EventEmitter<string>();

  onSearchTexChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

}
  