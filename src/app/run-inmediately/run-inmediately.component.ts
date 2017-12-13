import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-run-inmediately',
  templateUrl: './run-inmediately.component.html',
  styleUrls: ['./run-inmediately.component.css']
})
export class RunInmediatelyComponent implements OnInit {

  schedulesList="nothing";

  constructor(
      private apiService: ApiService,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }


  getSchedules(){
    this.apiService.getSchedules().subscribe(
           data => { 
            let randomLength=Math.floor(Math.random() * data.schedules.length );
            let schedules=[];
            for(var indx=0;indx<=randomLength;indx++){
              schedules.push(data.schedules[indx].scheduleId);
            }
            this.schedulesList=schedules.join(',');
          },
          err => console.error(err),
          () => console.log('done loading schedules')
        );
  }

  runSchedules(){
    console.log(this.schedulesList);
  }

}
