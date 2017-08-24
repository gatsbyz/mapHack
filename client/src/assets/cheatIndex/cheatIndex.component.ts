import { Component } from '@angular/core';
import { Http }      from '@angular/http';
declare var google: any;

@Component({
  selector: 'cheatIndex',
  templateUrl: './cheatIndex.component.html',
  styleUrls: ['./cheatIndex.component.scss']
})
export class CheatIndexComponent {
    cheats: Array<any> = [];
    currentUser: object = {};


    onLoad() {
        // cheatsService
        //     .getCheats($stateParams.id)
        //     .then(function(res){
        //         console.log(res);
        //         vm.cheats = res.data.cheats;
        //         vm.currentUser = res.data.currentUser;
        //         vm.userArray = res.data.user_array;
        // });
        

    }

    deleteCheat(cheat) {
        // var id = cheat.id
        // cheatsService
        //     .deleteCheat(id)
        //     .then(function(res){
        //         console.log('Your cheat has been deleted')
        //         $window.location.reload();
        //     })
    }

    ngInit() {  
        this.onLoad();
    }

}