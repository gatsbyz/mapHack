import {CheatService} from '../../services/cheat.service';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings} from 'angular-2-dropdown-multiselect';
import * as $ from 'jquery';
import {} from '@types/googlemaps';
declare var google: any;

@Component({
  selector: 'app-cheatedit',
  templateUrl: './cheatEdit.component.html',
  styleUrls: ['./cheatEdit.component.css']
})

export class CheatEditComponent implements OnInit {

  map: google.maps.Map = null;

  cheat = null;

  routeTypeData: IMultiSelectOption[] = null;
  routeTypeModel: string[] = [];
  routeTypeSettings: IMultiSelectSettings;
  routeTypeTexts: IMultiSelectTexts;

  cheatMarkersArray = [];
  markersArray = [];


  private sub: any;

  id: number;

  constructor(private cheatService: CheatService, private router: Router, private route: ActivatedRoute) {
    this.sub = this.route.queryParamMap.subscribe(params => {
      this.id = +params.get('id') || 0;

      this.cheatService.getById(this.id).subscribe(
        cheat => {
          console.log(cheat);
          this.cheat = cheat;
          this.initAutocomplete();
          this.drawCheatEndPoints(cheat);
          this.drawCheatPath(cheat);
          this.fetchRouteType(cheat);
        },
        err => {
          console.log(err);
          return this.router.navigate(['map']);
        });
    });
  }


  ngOnInit() {

    this.routeTypeModel = [];

    this.routeTypeSettings = {
      // enableSearch: true,
      checkedStyle: 'fontawesome',
      buttonClasses: 'btn btn-default btn-block',
      dynamicTitleMaxItems: 3,
      displayAllSelectedText: true
    };

    // Text configuration
    this.routeTypeTexts = {
      checkAll: 'Select all',
      uncheckAll: 'Unselect all',
      checked: 'item selected',
      checkedPlural: 'items selected',
      searchPlaceholder: 'Find',
      defaultTitle: 'Select',
      allSelected: 'All selected',
    };

    this.routeTypeData = [
      {id: 'DRIVING', name: 'Driving'},
      {id: 'WALKING', name: 'Walking'},
      {id: 'BICYCLING', name: 'Bicycling'},
      {id: 'TRANSIT', name: 'Transit'},
    ];
  }

  fetchRouteType(cheat) {
    cheat.routeType.forEach(function(element, index) {
      this.routeTypeModel.push(element);
    }, this);
  }

  initAutocomplete() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: this.cheat.startPointLat, lng: this.cheat.startPointLong},
      zoom: 18,
      mapTypeId: 'roadmap'
    });

    // Create the search box and link it to the UI element.
    const input = document.getElementById('pac-input');
    const searchBox = new google.maps.places.SearchBox(input);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    const input2 = document.getElementById('reset');
    this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input2);
  }

  drawCheatPath(cheat) {
    const flightPath = new google.maps.Polyline({
      path: [{lat: cheat.startPointLat, lng: cheat.startPointLong}, {lat: cheat.endPointLat, lng: cheat.endPointLong}],
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(this.map);
  }

  drawCheatEndPoints(cheat) {
    const latLng1 = {lat: cheat.startPointLat, lng: cheat.startPointLong};
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

  clearOverlays() {
    for (let i = 0; i < this.markersArray.length; i++) {
      this.markersArray[i].setMap(null);
    }
    this.markersArray.length = 0;
  }

  editCheat() {
    this.markersArray.forEach(function(element, index) {
      if (index === 0) {
        this.cheat.startPointLat = element.position.lat();
        this.cheat.startPointLong = element.position.lng();
        // vm.cheat.zipcode = element.address_components[-1].long_name
      } else {
        this.cheat.endPointLat = element.position.lat();
        this.cheat.endPointLong = element.position.lng();
      }
    });

    let routeType = '';
    this.routeTypeModel.forEach(function(element, index) {
      // route_type+=(index==0?'{':',')+element.id;
    });
    routeType += '}';
    this.cheat.routeType = routeType;

     this.cheatService
       .update(this.cheat).subscribe(
        cheat => {
          return this.router.navigate(['cheatShow']);
        },
        err => {
          console.log(err);
        });
  }
}
