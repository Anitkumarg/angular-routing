import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit , OnDestroy {

  constructor(private coursesService: CoursesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  course: any;
  courseId: any;
  RouteParamObs: any;
  editMode: boolean = false;

  ngOnInit(): void {
    // this.courseId = this.activatedRoute.snapshot.params['id'];
    // this.courseId = this.activatedRoute.snapshot.params['name'];
    // this.course = this.coursesService.courses.find(x => x.id == this.courseId);

    this.RouteParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.coursesService.courses.find(x => x.id == this.courseId);
    })


    // snapshot
    // this.editMode = Boolean(this.activatedRoute.snapshot.queryParamMap.get('edit'));

    // subscribe
    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
    })
  }

  ngOnDestroy() {
    this.RouteParamObs.unsubscribe();
  }

  appendQueryParam() {
    this.router.navigate(['/Course',this.courseId], {queryParams: {edit: true}});
  }

}