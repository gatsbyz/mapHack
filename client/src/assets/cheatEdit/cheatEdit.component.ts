import { Component } from '@angular/core';
import { Http }      from '@angular/http';
import { IMultiSelectOption,
          IMultiSelectSettings,
          IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
declare var google: any;

@Component({
  selector: 'cheatEdit',
  templateUrl: './cheatEdit.component.html',
  styleUrls: ['./cheatEdit.component.scss']
})
export class CheatEditComponent {
  title: string = 'MAP HACK';
  users: Array<object>;
  map: any;
  //cheat: any;
  cheat: any = {
    description: 'abc',
    start_point_lat: 0,
    start_point_long:0,
    end_point_lat: 0,
    end_point_long: 0,
    user_id: 0
  }

  lat: number = 51.678418;
  lng: number = 7.809007;

  // Default selection
  optionsModel: number[];
  myOptions: IMultiSelectOption[];
  // Settings configuration
  mySettings: IMultiSelectSettings = {
      enableSearch: true,
      checkedStyle: 'fontawesome',
      buttonClasses: 'btn btn-default btn-block',
      dynamicTitleMaxItems: 3,
      displayAllSelectedText: true
  };
  // Text configuration
  myTexts: IMultiSelectTexts = {
      checkAll: 'Select all',
      uncheckAll: 'Unselect all',
      checked: 'item selected',
      checkedPlural: 'items selected',
      searchPlaceholder: 'Find',
      defaultTitle: 'Select',
      allSelected: 'All selected',
  };

 cheatMarkersArray: Array<any> = [];
  markersArray: Array<any>= [];  

  constructor(private http:Http) {
    this.getUsers();
  }

  ngOnInit() {
      this.myOptions = [
        {id: "DRIVING", name: "Driving"},
        {id: "WALKING", name: "Walking"},
        {id: "BICYCLING", name: "Bicycling"},
        {id: "TRANSIT", name: "Transit"}
      ];

  }
  onChange() {
      console.log(this.optionsModel);
  }

  getUsers() {
    this.http.get('http://localhost:3000/users')
             .subscribe(res => {
               this.users = res.json().users;
             });
  }


  // onLoad();

  // onLoad() {
  //     cheatsService
  //         .getCheat($stateParams.id)
  //         .then(function(res){
  //             console.log(res);
  //             vm.cheat = res.data;
  //             initAutocomplete();
  //             drawCheatEndPoints(vm.cheat);
  //             drawCheatPath(vm.cheat);
  //             fetchRouteType(vm.cheat);
  //     });
  //}

  fetchRouteType(cheat) {
      cheat.route_type.forEach(function(element,index) {
          switch (element) {
              case "DRIVING":
                  this.optionsModel.push(this.myOptions[0]);
                  break;
              case "WALKING":
                  this.optionsModel.push(this.routeTypeData[1]);
                  break;
              case "BICYCLING":
                  this.optionsModel.push(this.routeTypeData[2]);
                  break;
              case "TRANSIT":
                  this.optionsModel.push(this.routeTypeData[3]);
          }
      });
  }

  initAutocomplete() {
      this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: this.cheat.start_point_lat, lng: this.cheat.start_point_long},
          zoom: 18,
          mapTypeId: 'roadmap'
      });

      // Create the search box and link it to the UI element.
      var input = document.getElementById('pac-input');
      var searchBox = new google.maps.places.SearchBox(input);
      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

      var input2 = document.getElementById('reset');
      this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input2);
  }

  drawCheatPath(cheat) {
      var flightPath = new google.maps.Polyline({
        path: [{lat: cheat.start_point_lat, lng: cheat.start_point_long},{lat: cheat.end_point_lat, lng: cheat.end_point_long}],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

      flightPath.setMap(this.map);
  }

  drawCheatEndPoints(cheat) {
      var latLng = {lat: cheat.start_point_lat, lng: cheat.start_point_long};
      var marker = new google.maps.Marker({
          position: latLng,
          map: this.map,
      });

      this.cheatMarkersArray.push(marker);

      latLng = {lat: cheat.end_point_lat, lng: cheat.end_point_long};
      var marker = new google.maps.Marker({
          position: latLng,
          map: this.map,
      });

      this.cheatMarkersArray.push(marker);
  }

  clearOverlays() {
      for (var i = 0; i < this.markersArray.length; i++ ) {
          this.markersArray[i].setMap(null);
      }
      this.markersArray.length = 0;
  }

  editCheat() {
      var c = this.cheat;
      this.markersArray.forEach(function(element: any, index) {
          if (index == 0) {
              c.start_point_lat = element.position.lat();
              c.start_point_long = element.position.lng();
              // vm.cheat.zipcode = element.address_components[-1].long_name
          } else {
              c.end_point_lat = element.position.lat();
              c.end_point_long = element.position.lng();
          } 
      });

      var route_type = '';
      this.myOptions.forEach(function(element,index) {
          route_type+=(index==0?"{":",")+element.id;
      });
      route_type+="}"
      this.cheat.route_type = route_type;

      // cheatsService
      //   .updateCheat($stateParams.id, this.cheat)
      //   .then(function(res) {
      //     if(res.status == 200) {
      //         $state.go('cheatShow', {id: res.data.id})
      //     } else {
      //         alert('Something went wrong. check your inputs again');
      //     };
      // });
  };

}