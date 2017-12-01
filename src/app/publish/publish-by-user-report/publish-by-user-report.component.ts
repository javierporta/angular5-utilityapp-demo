import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish-by-user-report',
  templateUrl: './publish-by-user-report.component.html',
  styleUrls: ['./publish-by-user-report.component.css']
})
export class PublishByUserReportComponent implements OnInit {

userReportId="";

  constructor() { }

  ngOnInit() {
  }

  publishSchedulesByUserReport(){
    console.log(this.userReportId);
  }

}
