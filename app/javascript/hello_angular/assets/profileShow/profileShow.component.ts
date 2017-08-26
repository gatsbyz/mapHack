import { Component } from '@angular/core';
import { Http }      from '@angular/http';

@Component({
  selector: 'profileShow',
  templateUrl: './profileShow.component.html',
  styleUrls: ['./profileShow.component.scss']
})
export class ProfileShowComponent {

   currentUser: any = {};

    constructor() {
        //   profileService
        //     .getUser($stateParams.id)
        //     .then(function(res){
        //         console.log(res);
        //         vm.currentUser = res.data.currentUser;
        // });
    }

    ngInit() {

    }


}