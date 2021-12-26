import { Component, OnInit } from '@angular/core';
import { courses } from '../courses';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  courses = courses;
  constructor() {
}

  ngOnInit(): void {
  }

}
