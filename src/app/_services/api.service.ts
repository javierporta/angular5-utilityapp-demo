import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

import { Todos } from '../_models/todos';
import { Schedule } from '../_models/schedule';

const API_URL= environment.apiUrl;

interface SchedulesResponse {
    schedules: Schedule[];
}

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { 
    
  }

  public getAllReportTypes(){
    return this.http.get(API_URL + '/todos'); //ToDO Change for our API
  }

  public getSchedules(): Observable<any>{
    return this.http
            .get<SchedulesResponse>('/assets/schedules.json');    
  }
}
