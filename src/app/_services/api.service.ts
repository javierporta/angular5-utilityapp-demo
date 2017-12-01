import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Todos } from '../_models/todos';

const API_URL= environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { 
    
  }

  public getAllReportTypes(){
    return this.http.get(API_URL + '/todos'); //ToDO Change for our API
  }

}
