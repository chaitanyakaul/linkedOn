import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';


export const ROUTES: Routes = [
  {path: '', redirectTo: 'initialLoader', pathMatch: 'full'},
  {path: 'initialLoader', component: UserDashboardComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
