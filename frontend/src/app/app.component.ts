import { Component } from '@angular/core';
import { Database } from 'sqlite3';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capstone-frontend';
  // faCoffee = faCoffee;
  constructor(private user:AppServiceService){
    this.user.addStudent(sqlite3).subscribe(data=>{
      console.warn(data)

    })
  }
}
function sqlite3(sqlite3: any) {
  throw new Error('Function not implemented.');
}

