import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;   

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn$=this.authService.isLoggedIn;
  }

  onLogout(){
    this.authService.logout();
  }


}
