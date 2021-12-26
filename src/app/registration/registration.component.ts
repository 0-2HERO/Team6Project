import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { courses } from '../courses';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  courses = courses;
  coursesId: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
