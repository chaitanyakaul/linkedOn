import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  users: any;
  constructor(private _userService: UserService) {
    // Access the Data Service's getUsers() method we defined
    this._userService.getUsers()
      .subscribe(res => this.users = res);
    console.log(this.users);
  }
}
