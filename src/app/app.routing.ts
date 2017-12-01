import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PublishComponent } from './publish/publish.component';
import { RunInmediatelyComponent } from './run-inmediately/run-inmediately.component';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'publish', component: PublishComponent, canActivate: [AuthGuard] },
    { path: 'runInmediately', component: RunInmediatelyComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);