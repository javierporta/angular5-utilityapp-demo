import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish-by-user',
  templateUrl: './publish-by-user.component.html',
  styleUrls: ['./publish-by-user.component.css']
})
export class PublishByUserComponent implements OnInit {

  UserId="";

  constructor() { }
  

  ngOnInit() {
  }

  publishSchedulesByUser(){
    console.log(this.UserId);
    
  }

}
