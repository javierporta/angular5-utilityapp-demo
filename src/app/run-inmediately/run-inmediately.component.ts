import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run-inmediately',
  templateUrl: './run-inmediately.component.html',
  styleUrls: ['./run-inmediately.component.css']
})
export class RunInmediatelyComponent implements OnInit {

  schedulesList="";

  constructor() { }

  ngOnInit() {
  }

  runSchedules(){
    console.log(this.schedulesList);
  }

}
