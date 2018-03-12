import {Cheat} from '../../models/cheat';
import {CheatService} from '../../services/cheat.service';
import {Component, OnInit} from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings} from 'angular-2-dropdown-multiselect';
import * as $ from 'jquery';
import {} from '@types/googlemaps';
declare var google: any;

@Component({
  selector: 'app-cheatnew',
  templateUrl: './cheatnew.component.html',
  styleUrls: ['./cheatnew.component.css']
})

export class CheatNewComponent implements OnInit {

  cheat = {
    description: '',
    routeType: []
  };

  coordinates = [];

  markersArray = [];

  routeTypeData: IMultiSelectOption[];
  routeTypeModel: string[];
  routeTypeSettings: IMultiSelectSettings;
  routeTypeTexts: IMultiSelectTexts;

  constructor(private cheatService: CheatService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.initAutocomplete();

    this.routeTypeModel = [];
    this.routeTypeSettings = {
      checkedStyle: 'glyphicon',
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

  initAutocomplete() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.730610, lng: -73.935242},
      zoom: 13,
      mapTypeId: 'roadmap'
    });

    const _this = this;
    map.addListener('click', function(e) {
      _this.placeMarker(e.latLng, map);
    });

    // Create the search box and link it to the UI element.
    const input = document.getElementById('pac-input');
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    const input2 = document.getElementById('reset');
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input2);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      const places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();

      places.forEach(function(place) {
        if (!place.geometry) {
          console.log('Returned place contains no geometry');
          return;
        }

        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          })
        );

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }

  placeMarker(latLng, map) {
    const marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    this.markersArray.push(marker);
    // map.panTo(latLng);
  }

  clearOverlays() {
    console.log(this.routeTypeModel);
    for (let i = 0; i < this.markersArray.length; i++) {
      this.markersArray[i].setMap(null);
    }
    this.markersArray.length = 0;
  }

  saveCheat() {
    this.markersArray.forEach(function(element, index) {
      this.coordinates.push({
        latitude: element.position.lat(),
        longitude: element.position.lng(),
        orderNumber: index
      });
    }, this);
    console.log(this.cheat);
    console.log(this.routeTypeModel);
    this.routeTypeModel.forEach(function(element, index) {
      this.cheat.routeType.push(element); // {'description' : element.id}
    }, this);
    const cheat: Cheat = this.cheatService.create(this.cheat);
    const data = {cheat: this.cheat, coordinates: this.coordinates};
    this.cheatService.save(data).subscribe(
      res => {
        console.log(res);
        const navigationExtras: NavigationExtras = {
          queryParams: {id: res.id},
          fragment: 'anchor'
        };

        this.router.navigate(['/cheatShow'], navigationExtras);
      },
      err => {
        alert(err);
        return this.router.navigate(['/map']);
      }
    );

  }

}
