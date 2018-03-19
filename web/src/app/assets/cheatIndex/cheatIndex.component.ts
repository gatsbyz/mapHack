import {Component, OnInit} from '@angular/core';
import {IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings} from 'angular-2-dropdown-multiselect';
import * as $ from 'jquery';
import {} from '@types/googlemaps';
declare var google: any;

@Component({
  selector: 'app-cheatindex',
  templateUrl: './cheatIndex.component.html',
  styleUrls: ['./cheatIndex.component.css']
})

export class CheatIndexComponent implements OnInit {

    cheats = [];
    currentUser = {};

    ngOnInit() {
//        cheatsService
//            .getCheats($stateParams.id)
//            .then(function(res){
//                console.log(res);
//                vm.cheats = res.data.cheats;
//                vm.currentUser = res.data.currentUser;
//                vm.userArray = res.data.user_array;
//        });

    }

    deleteCheat(cheat) {
//        var id = cheat.id
//        cheatsService
//            .deleteCheat(id)
//            .then(function(res){
//                console.log('Your cheat has been deleted')
//                $window.location.reload();
//            })
    }

}
