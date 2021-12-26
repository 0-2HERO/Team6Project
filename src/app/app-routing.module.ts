import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { RegistrationComponent } from './registration/registration.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  }, {
    path: "courses", component: CoursesComponent
  }, {
    path: "courses/:coursesId", component: CoursesDetailsComponent
  }, {
    path: "team", component: TeamComponent
  }, {
    path: "videos", component: VideosComponent
  }, {
    path: "testimonials", component: TestimonialsComponent
  }, {
    path: "news", component: NewsComponent
  }, {
    path: "contactus", component: ContactUsComponent
  }, {
    path: "registration", component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
