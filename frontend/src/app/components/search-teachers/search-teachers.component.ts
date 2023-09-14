import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-teachers',
  templateUrl: './search-teachers.component.html',
  styleUrls: ['./search-teachers.component.css']
})
export class SearchTeachersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredSearchValue : string ="";
}
