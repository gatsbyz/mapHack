import { Component } from '@angular/core';
import { Http }      from '@angular/http';
declare var google: any;

@Component({
  selector: 'cheatShow',
  templateUrl: './cheatShow.component.html',
  styleUrls: ['./cheatShow.component.scss']
})

export class CheatShowComponent {
  
    map: any = {};
    cheat: any = [];

    cheatMarkersArray: Array<any> = [];


    onLoad() {
        // cheatsService
        //     .getCheat($stateParams.id)
        //     .then(function(res){
        //         if (!res.data) return $state.go('mapIndex');
        //         this.cheat = res.data;
        //         initAutocomplete();
        //         drawCheatEndPoints(this.cheat);
        //         drawCheatPath(this.cheat);
        // });
    }

  initAutocomplete() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: this.cheat.start_point_lat, lng: this.cheat.start_point_long},
            zoom: 18,
            mapTypeId: 'roadmap'
        });

        var input = document.getElementById('reset');
        this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);
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
        var latLng: object = {lat: cheat.start_point_lat, lng: cheat.start_point_long};
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

    editCheat() {
        // $state.go('cheatEdit', {id: $stateParams.id}) 
    }

    ngInit() {
        this.onLoad();
    }

}