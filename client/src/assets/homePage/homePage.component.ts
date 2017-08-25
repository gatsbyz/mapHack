import { Component } from '@angular/core';
import { Http }      from '@angular/http';

@Component({
  selector: 'homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent {
  title = 'MAP HACK';

  constructor(private http:Http) {

  }


}