import { Component } from '@angular/core';
import { Http }      from '@angular/http';
import { IMultiSelectOption,
          IMultiSelectSettings,
          IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
declare var google: any;

@Component({
  selector: 'cheatNew',
  templateUrl: './cheatNew.component.html',
  styleUrls: ['./cheatNew.component.scss']
})
export class CheatNewComponent {

    cheat: any = {
        description:'',
        start_point_lat: 0,
        start_point_long: 0,
        end_point_lat: 0,
        end_point_long: 0,
        route_type:[]
    };
    

    markersArray: Array<any> = [];

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

    initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.730610, lng: -73.935242},
            zoom: 13,
            mapTypeId: 'roadmap'
        });

        map.addListener('click', function(e) {
            this.placeMarker(e.latLng, map);
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        var input2 = document.getElementById('reset');
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input2);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            };

            // Clear out the old markers.
            markers.forEach(function(marker) {
                marker.setMap(null);
            });
            markers = [];

            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            
            places.forEach(function(place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }

                var icon = {
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
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
        this.markersArray.push(marker);
        //map.panTo(latLng);
        //console.log(marker);
    }

    clearOverlays() {
        for (var i = 0; i < this.markersArray.length; i++ ) {
            this.markersArray[i].setMap(null);
        }
        this.markersArray.length = 0;
    }

    saveCheat() {
        var c = this.cheat;
        this.markersArray.forEach(function(element: any, index: number) {
            if (index == 0) {
                c.start_point_lat = element.position.lat();
                c.start_point_long = element.position.lng();
                // vm.cheat.zipcode = element.address_components[-1].long_name
            } else {
                c.end_point_lat = element.position.lat();
                c.end_point_long = element.position.lng();
            }
        });

        this.optionsModel.forEach(function(element: any, index: number) {
            c.route_type+=(index==0?"{":",")+element.id;
        });
        this.cheat.route_type+="}"

        // cheatsService
        //   .createCheat(vm.cheat)
        //   .then(function(res) {
        //     if(res.status == 201) {
        //       $state.go('cheatShow', {id: res.data.id}) // cheat detail page
        //     } else {
        //       alert('Something went wrong. check your inputs again');
        //     };
        // });
    }

    ngInit() {
      this.initAutocomplete();
    }

}