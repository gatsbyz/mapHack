import { Routes } from '@angular/router';
import { CheatEditComponent } from '../assets/cheatEdit/cheatEdit.component';
import { CheatIndexComponent } from '../assets/cheatIndex/cheatIndex.component';
import { CheatNewComponent } from '../assets/cheatNew/cheatNew.component';
import { CheatShowComponent } from '../assets/cheatShow/cheatShow.component';
import { HomePageComponent } from '../assets/homePage/homePage.component';
import { MapIndexComponent } from '../assets/mapIndex/mapIndex.component';
import { ProfileShowComponent } from '../assets/profileShow/profileShow.component';
import { UserCheatIndexComponent } from '../assets/userCheatIndex/userCheatIndex.component';

export const ROUTES: Routes = [
  { path: '',      component: CheatIndexComponent },
  { path: 'home',  component: HomePageComponent },
  { path: 'map', component: MapIndexComponent },
  { path: 'cheat/new', component: CheatNewComponent },
  { path: '/cheat/:id', component: CheatShowComponent },
  { path: '/cheat/:id/edit', component: CheatEditComponent },
  { path: '/user/:id', component: ProfileShowComponent },
  { path: '/user/:id/cheat', component: UserCheatIndexComponent }
  // { path: '**',    component: NoContentComponent },
];