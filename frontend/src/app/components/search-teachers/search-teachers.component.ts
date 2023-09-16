import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {AppServiceService} from '../../app-service.service';

@Component({
  selector: 'app-search-teachers',
  templateUrl: './search-teachers.component.html',
  styleUrls: ['./search-teachers.component.css']
})
export class SearchTeachersComponent implements OnInit {

  TearcherData: any;


  constructor(private service : AppServiceService, private router: Router) { }

  navigation = this.router.getCurrentNavigation();

  ngOnInit(): void {
    this.getTeacherData();
  }

  getTeacherData(){
    let teacher = {
      id : this.navigation.extras.state.id
    }
    this.service.getOneTeacherData(teacher).subscribe((response)=>{
      this.searchTeacher = response[0];
    },(error)=>{
      console.log('ERROR - ', error)
    })
  }

  searchTeacher(values){
    values.id = this.navigation.extras.state.id;
    this.service.editTeacher(values).subscribe((response)=>{
      this.TearcherData = response[0];
    },(error)=>{
      console.log('ERROR - ', error)
    })
  }

}