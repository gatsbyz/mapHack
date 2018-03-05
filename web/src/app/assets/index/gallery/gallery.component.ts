import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [NgbCarouselConfig]
})

export class GalleryComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    // config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {
  }
}
