import {Cheat} from '../../models/cheat';
import {CheatService} from '../../services/cheat.service';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings} from 'angular-2-dropdown-multiselect';
import * as $ from 'jquery';
import {} from '@types/googlemaps';
declare var google: any;

@Component({
  selector: 'app-cheatshow',
  templateUrl: './cheatshow.component.html',
  styleUrls: ['./cheatshow.component.css']
})

export class CheatShowComponent implements OnInit {

  map: google.maps.Map = null;
  cheat: Cheat;

  cheatMarkersArray = [];

  private sub: any;

  id: number;

  constructor(private cheatService: CheatService, private router: Router, private route: ActivatedRoute) {
    this.sub = this.route.queryParamMap.subscribe(params => {
      this.id = +params.get('id') || 0;

      this.cheatService.getById(this.id).subscribe(
        cheat => {
          console.log(cheat);
          this.cheat = cheat;
          this.initAutocomplete(cheat);
          this.drawCheatEndPoints(cheat);
          this.drawCheatPath(cheat);
        },
        err => {
          console.log(err);
          return this.router.navigate(['map']);
        });
    });
  }

  ngOnInit() {

  }

  initAutocomplete(cheat) {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: cheat.coordinate.latitude, lng: cheat.coordinate.longitude },
      zoom: 18,
      mapTypeId: 'roadmap'
    });

    const input = document.getElementById('reset');
    this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);
  }

  drawCheatPath(cheat) {
    const flightPath = new google.maps.Polyline({
      path: [{lat: cheat.coordinate.latitude, lng: cheat.coordinate.longitude}, {lat: cheat.endPointLat, lng: cheat.endPointLong}],
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(this.map);
  }

  drawCheatEndPoints(cheat) {
    const latLng1 = {lat: cheat.coordinate.latitude, lng: cheat.coordinate.longitude};
    const marker1 = new google.maps.Marker({
      position: latLng1,
      map: this.map,
    });

    this.cheatMarkersArray.push(marker1);

    const latLng2 = {lat: cheat.endPointLat, lng: cheat.endPointLong};
    const marker2 = new google.maps.Marker({
      position: latLng2,
      map: this.map,
    });

    this.cheatMarkersArray.push(marker2);
  }

  editCheat() {
    this.router.navigateByUrl('/cheatedit');
  }
}
