import {CheatService} from '../../services/cheat.service';
import {Component, OnInit} from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import * as $ from 'jquery';
import {} from '@types/googlemaps';
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect';
declare var google: any;

@Component({
  selector: 'app-mapindex',
  templateUrl: './mapIndex.component.html',
  styleUrls: ['./mapIndex.component.css']
})

export class MapIndexComponent implements OnInit {

  map: google.maps.Map = null;

  cheats = [];
  currentUser = {};
  userArray = [];

  mark: google.maps.Marker = null;
  closestMarker = null;
  index = 0;

  cheatMarkersArray = [];
  cheatLatLng = [];
  eol = null;


  routeTypeData: IMultiSelectOption[];
  routeTypeModel: string[];
  routeTypeSettings: IMultiSelectSettings;
  routeTypeTexts: IMultiSelectTexts;

  polyline = null;
  poly2 = null;

  startLocation = null;
  endLocation = null;

  origTime = 0;
  origDist = 0;
  hackTime = 0;
  hackDist = 0;


  constructor(private cheatService: CheatService, private router: Router) {}

  ngOnInit() {
    this.cheatService
      .getAll()
      .subscribe(
      cheats => {
        console.log(cheats);
        this.cheats = cheats;
        // this.currentUser = res.data.currentUser;
        // this.userArray = res.data.user_array;
        this.initAutocomplete();
        this.drawCheats(cheats);
      });

    this.routeTypeModel = [];
    this.routeTypeSettings = {
      checkedStyle: 'glyphicon',
      buttonClasses: 'btn btn-default btn-block',
      displayAllSelectedText: true,
      selectionLimit: 1,
      autoUnselect: true
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


    if (typeof navigator.geolocation === 'undefined') {
      $('#error').text('Your browser doesn\'t support the Geolocation API');
      return;
    }

    $('#from-link, #to-link').click(function(event) {
      event.preventDefault();
      const addressId = this.id.substring(0, this.id.indexOf('-'));

      navigator.geolocation.getCurrentPosition(function(position) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          'location': new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        },
          function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              $('#' + addressId).val(results[0].formatted_address);
            } else {
              $('#error').append('Unable to retrieve your address<br />');
            }
          });
      },
        function(positionError) {
          $('#error').append('Error: ' + positionError.message + '<br />');
        },
        {
          enableHighAccuracy: true,
          timeout: 10 * 1000 // 10 seconds
        });
    });

    const __this = this;
    $('#calculate-route').submit(function(event) {
      event.preventDefault();
      __this.calculateRoute($('#from').val(), $('#to').val());
    });

  }

  deleteCheat(cheat) {
    this.cheatService
      .deleteById(cheat.id)
      .subscribe(
      cheats => {
        console.log('Your cheat has been deleted');
      });
  }

  drawCheatRoute(directionsService, from, to, selectedMode) {

    this.drawFromToCheat(directionsService, from, selectedMode);
    this.drawCheatToDestination(directionsService, to, selectedMode);
    this.drawCheatPath(this.cheats[this.index]);


  }

  drawFromToCheat(directionsService, from, selectedMode) {
    const directionsRequest = {
      origin: from,
      destination: new google.maps.LatLng(this.closestMarker.position.lat(), this.closestMarker.position.lng()),
      travelMode: google.maps.TravelMode[selectedMode],
      unitSystem: google.maps.UnitSystem.METRIC
    };

    directionsService.route(
      directionsRequest,
      function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          const rendererOptions = {
            polylineOptions: {strokeColor: '#ff0000', strokeOpacity: 1.0, strokeWeight: 3, zIndex: -1},
            suppressMarkers: true,
            directions: response,
            map: this.map
          };

          const point = response.routes[0].legs[0];
          this.hackTime += point.duration.value;
          this.hackDist += point.distance.value;

          const directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
          directionsDisplay.setDirections(response);
        } else {
          $('#error').append('Unable to retrieve your route<br />');
        }
      }
    );
  }

  drawCheatToDestination(directionsService, to, selectedMode) {
    const directionsRequest = {
      origin: new google.maps.LatLng(this.cheatLatLng[this.index].lat, this.cheatLatLng[this.index].lng),
      destination: to,
      travelMode: google.maps.TravelMode[selectedMode],
      unitSystem: google.maps.UnitSystem.METRIC
    };

    directionsService.route(
      directionsRequest,
      function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          const rendererOptions = {
            polylineOptions: {strokeColor: '#ff0000', strokeOpacity: 1.0, strokeWeight: 3, zIndex: -1},
            suppressMarkers: true,
            directions: response,
            map: this.map,
          };

          const point = response.routes[0].legs[0];
          this.hackTime += point.duration.value;
          this.hackDist += point.distance.value;

          $('#hackTime').html(Math.round(this.hackTime / 60) + ' mins');
          $('#hackDist').html(Math.round(this.hackDist / 100) / 10 + ' km');

          const directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
          directionsDisplay.setDirections(response);
        } else {
          $('#error').append('Unable to retrieve your route<br />');
        }
      }
    );
  }

  drawCheatPath(cheat) {
    const path = [];
    cheat.coordinate.forEach(function(val, i) {
      path.push(new google.maps.LatLng(val.latitude, val.longitude));
    });
    const flightPath = new google.maps.Polyline({
      path: path,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 3,
      setMap: this.map
    });
    // flightPath.setMap(this.map);
  }

  calculateRoute(from, to) {
    const geocoder = new google.maps.Geocoder();
    const _this = this;
    geocoder.geocode({'address': from}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        // document.getElementById('mode').addEventListener('change', function() {
        //     calculateAndDisplayRoute(directionsService, directionsDisplay);
        // });
        const selectedMode = _this.routeTypeModel[0];
        _this.find_closest_marker(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
        const directionsService = new google.maps.DirectionsService();
        _this.drawOriginalRoute(directionsService, from, to, selectedMode);
        // _this.drawCheatRoute(directionsService, from, to, selectedMode);

      } else {
        alert('Something is wrong ' + status);
      }
    });
  }

  drawOriginalRoute(directionsService, from, to, selectedMode) {
    const directionsRequest = {
      origin: from,
      destination: to,
      travelMode: google.maps.TravelMode[selectedMode],
      unitSystem: google.maps.UnitSystem.METRIC
    };
    const _this = this;
    directionsService.route(
      directionsRequest,
      function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          const rendererOptions = {
            map: _this.map,
            zIndex: 1
          };
          const directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
          directionsDisplay.setDirections(response);
          const bounds = new google.maps.LatLngBounds();
          const route = response.routes[0];
          _this.startLocation = new Object();
          _this.endLocation = new Object();

          // For each route, display summary information.
          const path = response.routes[0].overview_path;
          const legs = response.routes[0].legs;

          _this.polyline = new google.maps.Polyline({
            path: [],
            // strokeColor: '#FF0000',
            // strokeWeight: 5,
            strokeOpacity: 0,
            // zIndex: 2,
            setMap: _this.map
          });
          for (let i = 0; i < legs.length; i++) {
            if (i === 0) {
              _this.startLocation.latlng = legs[i].start_location;
              _this.startLocation.address = legs[i].start_address;
              // marker = google.maps.Marker({map:map,position: startLocation.latlng});
              // const marker = _this.createMarker(legs[i].start_location, 'start', legs[i].start_address, 'green');
            }
            _this.endLocation.latlng = legs[i].end_location;
            _this.endLocation.address = legs[i].end_address;
            const steps = legs[i].steps;
            for (let j = 0; j < steps.length; j++) {
              const nextSegment = steps[j].path;
              for (let k = 0; k < nextSegment.length; k++) {
                _this.polyline.getPath().push(nextSegment[k]);
                bounds.extend(nextSegment[k]);
              }
            }
          }

          // _this.polyline.setMap(_this.map);
          _this.map.fitBounds(bounds);

          const point = response.routes[0].legs[0];
          _this.origTime = point.duration.text;
          $('#origTime').html(point.duration.text);
          _this.origDist = point.distance.text;
          $('#origDist').html(point.distance.text);
          console.log('Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')');
          //        createMarker(endLocation.latlng,'end',endLocation.address,'red');
          // map.setZoom(18);

          // _this.startAnimation();

          // new google.maps.DirectionsRenderer({
          //     map: map,
          //     directions: response
          // });
        } else {
          $('#error').append('Unable to retrieve your route<br />');
        }
      });
  }

  drawCheats(cheats) {
    let latLng: google.maps.LatLng;
    let icon;
    cheats.forEach(function(cheat, index) {
      latLng = new google.maps.LatLng(cheat.coordinate[0].latitude, cheat.coordinate[0].longitude);
      icon = {
        url: 'http://i.imgur.com/ba7xhjE.png?2',
        scaledSize: new google.maps.Size(20, 20)
      };

      const marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        icon: icon
      });

      const _this = this;
      marker.addListener('click', function() {
        // infowindow.open(this.map, marker);
        _this.clickHack(cheat.id);
      });

      this.cheatMarkersArray.push(marker);
      this.cheatLatLng.push(latLng);
    }, this);
  }

  clickHack(id: number) {
    const navigationExtras: NavigationExtras = {
      queryParams: {id: id},
      fragment: 'anchor'
    };

    this.router.navigate(['/cheatShow'], navigationExtras);
  }

  rad(x) {return x * Math.PI / 180;}
  find_closest_marker(latLng) {
    const lat = latLng.lat;
    const lng = latLng.lng;
    const R = 6371; // radius of earth in km
    const distances = [];
    let closest = -1;
    for (let i = 0; i < this.cheatMarkersArray.length; i++) {
      const mlat = this.cheatMarkersArray[i].position.lat();
      const mlng = this.cheatMarkersArray[i].position.lng();
      const dLat = this.rad(mlat - lat);
      const dLong = this.rad(mlng - lng);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.rad(lat)) * Math.cos(this.rad(lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c;
      distances[i] = d;
      if (closest === -1 || d < distances[closest]) {
        closest = i;
      }
    }
    this.index = closest;
    this.closestMarker = this.cheatMarkersArray[closest];
  }


  initAutocomplete() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      // center: new google.maps.LatLng(40.730610, -73.935242),
      zoom: 13,
      mapTypeId: 'roadmap'
    });

    $('#pac-input').hide();
    google.maps.event.addListenerOnce(this.map, 'idle', function() {
      // do something only the first time the map is loaded
      $('#pac-input').show();

      const _this = this;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          _this.map.setCenter(initialLocation);
        });
      }

      // Create the search box and link it to the UI element.
      const input = $('#pac-input');
      const searchBox = new google.maps.places.SearchBox(input);
      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


      // Bias the SearchBox results towards current map's viewport.
      this.map.addListener('bounds_changed', function() {
        //      searchBox.setBounds(this.map.getBounds());
      });

      const fromInput = document.getElementById('from');
      const fromBox = new google.maps.places.SearchBox(fromInput);

      this.map.addListener('bounds_changed', function() {
        //      fromBox.setBounds(this.map.getBounds());
      });

      const toInput = document.getElementById('to');
      const toBox = new google.maps.places.SearchBox(toInput);

      this.map.addListener('bounds_changed', function() {
        //      toBox.setBounds(this.map.getBounds());
      });

      const cheatInput = document.getElementById('add-cheat');
      this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(cheatInput);

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
          // marker.setMap(_this.map);
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
          markers.push(new google.maps.Marker({
            map: this.map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          }));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        }, this);
        _this.map.fitBounds(bounds);
      });
    });

  }

  createMarker(latlng, label, html) {
    const contentString = '<b>' + label + '</b><br>' + html;
    this.mark = new google.maps.Marker({
      position: latlng,
      map: this.map,
      title: label,
      // zIndex: Math.round(latlng.lat() * - 100000) << 5
    });

    return this.mark;
  }

  startAnimation() {
    this.eol = this.polyline.Distance();
    this.map.setCenter(this.polyline.getPath().getAt(0));
    // poly2 = new google.maps.Polyline({path: [polyline.getPath().getAt(0)], strokeColor:'#0000FF', strokeWeight:3});
    const _this = this;
    setTimeout(function() {_this.animate(50);}, 1000);  // Allow time for the initial map display
  }

  animate(d) {
    if (d > this.eol) {
      this.map.panTo(this.endLocation.latlng);
      this.mark.setPosition(this.endLocation.latlng);
      return;
    }
    const p = this.polyline.GetPointAtDistance(d);
    // map.panTo(p);
    this.mark.setPosition(p);
    // updatePoly(d);

    setTimeout(function() {this.animate(d + 50);}, 100);
  }

  updatePoly(d) {
    // Spawn a new polyline every 20 vertices, because updating a 100-vertex poly is too slow
    if (this.poly2.getPath().getLength() > 20) {
      this.poly2 = new google.maps.Polyline([this.polyline.getPath().getAt(1 - 1)]);
      // map.addOverlay(poly2)
    }

    if (this.polyline.GetIndexAtDistance(d) < 1 + 2) {
      if (this.poly2.getPath().getLength() > 1) {
        this.poly2.getPath().removeAt(this.poly2.getPath().getLength() - 1);
      }
      this.poly2.getPath().insertAt(this.poly2.getPath().getLength(), this.polyline.GetPointAtDistance(d));
    } else {
      this.poly2.getPath().insertAt(this.poly2.getPath().getLength(), this.endLocation.latlng);
    }
  }

  onChange() {
    console.log(this.routeTypeModel);
  }

}
