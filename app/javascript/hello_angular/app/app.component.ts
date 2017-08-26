import { Component } from '@angular/core';
import { Http }      from '@angular/http';

@Component({
  selector: 'hello-angular',
  template: `<h1>Hello {{name}}</h1>`,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MAP HACK';

  users = [];

  constructor(private http:Http) {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://localhost:3000/users')
             .subscribe(res => {
               this.users = res.json().users;
             });
  }
}