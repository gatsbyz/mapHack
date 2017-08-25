import { Component } from '@angular/core';
import { Http }      from '@angular/http';

@Component({
  selector: 'userCheatIndex',
  templateUrl: './userCheatIndex.component.html',
  styleUrls: ['./userCheatIndex.component.scss']
})
export class UserCheatIndexComponent {

    cheats: Array<any> = [];
    currentUser: any = {};

  constructor() {
        // cheatsService
        //     .getCheatsById($stateParams.id)
        //     .then(function(res){
        //         console.log(res);
        //         vm.cheats = res.data.cheats;
        //         vm.currentUser = res.data.currentUser;
        //         vm.userArray = res.data.user_array;
        // });
        
    }

    deleteCheat(cheat) {
        var id = cheat.id
        // cheatsService
        //     .deleteCheat(id)
        //     .then(function(res){
        //         console.log('Your cheat has been deleted')
        //         $window.location.reload();
        //     })
    }

}