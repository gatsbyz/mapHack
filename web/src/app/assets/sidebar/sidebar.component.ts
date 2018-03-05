import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SidebarComponent implements OnInit {
  navbarCollapsed = true;
  appName = 'Good Bark';
  ngOnInit() {

  }
}
