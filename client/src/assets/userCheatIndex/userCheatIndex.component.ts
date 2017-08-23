import { Component } from '@angular/core';
import { Http }      from '@angular/http';

@Component({
  selector: 'userCheatIndex',
  templateUrl: './userCheatIndex.component.html',
  styleUrls: ['./userCheatIndex.component.scss']
})
export class UserCheatIndexComponent {
  title = 'MAP HACK';

  users = [];
  map = {};

  cheat = null;

  routeTypeModel =[];
  routeTypeData = [ {id: "DRIVING", label: "Driving"}, {id: "WALKING", label: "Walking"}, {id: "BICYCLING", label: "Bicycling"}, {id: "TRANSIT", label: "Transit"} ];
  routeTypeSetting = {} //{ smartButtonMaxItems: 4, smartButtonTextConverter: function(itemText, originalItem) { if (itemText === 'Jhon') { return 'Jhonny!'; } return itemText; }}

  cheatMarkersArray = [];
  markersArray = [];  

  constructor(private http:Http) {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://localhost:3000/users')
             .subscribe(res => {
               this.users = res.json().users;
             });
  }


  onLoad();

  onLoad() {
      cheatsService
          .getCheat($stateParams.id)
          .then(function(res){
              console.log(res);
              vm.cheat = res.data;
              initAutocomplete();
              drawCheatEndPoints(vm.cheat);
              drawCheatPath(vm.cheat);
              fetchRouteType(vm.cheat);
      });
  }

  fetchRouteType(cheat) {
      cheat.route_type.forEach(function(element,index) {
          switch (element) {
              case "DRIVING":
                  vm.routeTypeModel.push(vm.routeTypeData[0]);
                  break;
              case "WALKING":
                  vm.routeTypeModel.push(vm.routeTypeData[1]);
                  break;
              case "BICYCLING":
                  vm.routeTypeModel.push(vm.routeTypeData[2]);
                  break;
              case "TRANSIT":
                  vm.routeTypeModel.push(vm.routeTypeData[3]);
          }
      });
  }

  initAutocomplete() {
      map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: vm.cheat.start_point_lat, lng: vm.cheat.start_point_long},
          zoom: 18,
          mapTypeId: 'roadmap'
      });

      // Create the search box and link it to the UI element.
      var input = document.getElementById('pac-input');
      var searchBox = new google.maps.places.SearchBox(input);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

      var input2 = document.getElementById('reset');
      map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input2);
  }

  drawCheatPath(cheat) {
      var flightPath = new google.maps.Polyline({
        path: [{lat: cheat.start_point_lat, lng: cheat.start_point_long},{lat: cheat.end_point_lat, lng: cheat.end_point_long}],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

      flightPath.setMap(map);
  }

  drawCheatEndPoints(cheat) {
      var latLng = {lat: cheat.start_point_lat, lng: cheat.start_point_long};
      var marker = new google.maps.Marker({
          position: latLng,
          map: map,
      });

      cheatMarkersArray.push(marker);

      latLng = {lat: cheat.end_point_lat, lng: cheat.end_point_long};
      var marker = new google.maps.Marker({
          position: latLng,
          map: map,
      });

      cheatMarkersArray.push(marker);
  }

  clearOverlays() {
      for (var i = 0; i < markersArray.length; i++ ) {
          markersArray[i].setMap(null);
      }
      markersArray.length = 0;
  }

  editCheat() {
      markersArray.forEach(function(element,index) {
          if (index == 0) {
              vm.cheat.start_point_lat = element.position.lat();
              vm.cheat.start_point_long = element.position.lng();
              // vm.cheat.zipcode = element.address_components[-1].long_name
          } else {
              vm.cheat.end_point_lat = element.position.lat();
              vm.cheat.end_point_long = element.position.lng();
          } 
      });

      var route_type = [];
      vm.routeTypeModel.forEach(function(element,index) {
          route_type+=(index==0?"{":",")+element.id;
      });
      route_type+="}"
      vm.cheat.route_type = route_type;

      cheatsService
        .updateCheat($stateParams.id, vm.cheat)
        .then(function(res) {
          if(res.status == 200) {
              $state.go('cheatShow', {id: res.data.id})
          } else {
              alert('Something went wrong. check your inputs again');
          };
      });
  };

}