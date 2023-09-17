import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import {AppServiceService} from '../../app-service.service';

@Component({
  selector: 'app-search-teachers',
  templateUrl: './search-teachers.component.html',
  styleUrls: ['./search-teachers.component.css']
})
export class SearchTeachersComponent implements OnInit {

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
  