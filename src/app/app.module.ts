import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { customHttpProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService } from './_services/index';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

import { RunInmediatelyComponent } from './run-inmediately/run-inmediately.component';

import { PublishComponent } from './publish/publish.component';
import { PublishAllComponent } from './publish/publish-all/publish-all.component';
import { PublishByUserComponent } from './publish/publish-by-user/publish-by-user.component';
import { PublishByUserReportComponent } from './publish/publish-by-user-report/publish-by-user-report.component';
import { PublishByTypeOfReportComponent } from './publish/publish-by-type-of-report/publish-by-type-of-report.component';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ApiService } from './_services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    PublishComponent,
    RunInmediatelyComponent,
    PublishAllComponent,
    PublishByUserComponent,
    PublishByUserReportComponent,
    PublishByTypeOfReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    AngularMultiSelectModule
  ],
  providers: [
    customHttpProvider,
    AuthGuard,
    AlertService,
    AuthenticationService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
