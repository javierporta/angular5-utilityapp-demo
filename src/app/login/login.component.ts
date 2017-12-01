import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  results: string[];
  


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private http: HttpClient) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginNew() {
    this.loading = true;
    this.authenticationService.loginNew(this.model.username, this.model.password)
      .subscribe(
      data => {
        // Read the result field from the JSON response.
        let user = data.users[0];
        user.token="asd123" //fake token, should be on server side
        if (user && user.token && user.username==this.model.username && user.password==this.model.password) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.authenticationService.loggedIn.next(true);
          this.router.navigate([this.returnUrl]);
        }else{
          this.alertService.error("User and password combination is invalid.");
        }
        this.loading = false;
      }
      ,
      error => {
        this.alertService.error(error);
        this.loading = false;
      });;
  }

}
