import { Component, OnInit } from '@angular/core';
import { courses } from '../courses'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses = courses;
  coursesId: any;
  constructor() { }

  ngOnInit(): void {
  }

}
