import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  private age: object;
  private age_cookee: object;
  private age_pepe: object;

  ngOnInit() {
    const birthday: Date = new Date('11/18/2014');
    const birthday_cookee: Date = new Date('07/15/2017');
    const birthday_pepe: Date = new Date('11/17/2009');
    const ageInMs = this.calcAgeInMs(birthday);
    this.age = this.convertMsToAge(ageInMs);
    this.age_cookee = this.convertMsToAge(this.calcAgeInMs(birthday_cookee));
    this.age_pepe = this.convertMsToAge(this.calcAgeInMs(birthday_pepe));
  }

  calcAgeInMs(birthday: Date) {
    const today: Date = new Date();
    return today.getTime() - birthday.getTime();
  }

  private convertMsToAge(ageInMs: number) {
    let y, d, h, m, s;
    s = Math.floor(ageInMs / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    y = Math.floor(d / 365);
    return {y: y, d: d, h: h, m: m, s: s};
  }
}
