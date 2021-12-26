import { Component, OnInit } from '@angular/core';
import { courses } from '../courses';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  courses = courses;
  constructor() { }

  ngOnInit(): void {
  }

}
