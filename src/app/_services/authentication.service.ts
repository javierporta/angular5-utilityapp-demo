import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'
import { User } from '../_models/user';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

interface UsersResponse {
    users: User[];
}

@Injectable()
export class AuthenticationService {

    public loggedIn = new BehaviorSubject<boolean>(false); // {1}
    
    get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
      }

    constructor(private http: HttpClient,private router: Router) { 
        this.checkCurrentUserOnLocalStorage();
        }

        checkCurrentUserOnLocalStorage(){
        if (localStorage.getItem('currentUser')){
            this.loggedIn.next(true);
        }
    }

    loginNew(username: string, password: string): Observable<any> {
        return this.http
            .get<UsersResponse>('/assets/users.json');    
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
}