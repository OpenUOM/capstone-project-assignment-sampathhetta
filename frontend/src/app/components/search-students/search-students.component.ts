import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../app-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-search-students',
  templateUrl: './search-students.component.html',
  styleUrls: ['./search-students.component.css']
})
export class SearchStudentsComponent implements OnInit {

  studentData: any;


  constructor(private service : AppServiceService, private router: Router) { }

  navigation = this.router.getCurrentNavigation();

  ngOnInit(): void {
    this.getStudentData();
  }

  getStudentData(){
    let student = {
      id : this.navigation.extras.state.id
    }
    this.service.getOneStudentData(student).subscribe((response)=>{
      this.studentData = response[0];
    },(error)=>{
      console.log('ERROR - ', error)
    })
  }

  searchStudent(values){
    values.id = this.navigation.extras.state.id;
    this.service.editStudent(values).subscribe((response)=>{
      this.studentData = response[0];
    },(error)=>{
      console.log('ERROR - ', error)
    })
  }

}

