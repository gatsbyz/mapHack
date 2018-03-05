import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IndexComponent} from './assets/index/index.component';
import {HomeComponent} from './assets/home/home.component';
import {MapIndexComponent} from './assets/mapIndex/mapIndex.component';
import {CheatNewComponent} from './assets/cheatNew/cheatNew.component';
import {CheatIndexComponent} from './assets/cheatIndex/cheatIndex.component';
import {CheatEditComponent} from './assets/cheatEdit/cheatEdit.component';
import {CheatShowComponent} from './assets/cheatShow/cheatShow.component';

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'home', component: HomeComponent},
  {path: 'map', component: MapIndexComponent},
  {path: 'cheatNew', component: CheatNewComponent},
  {path: 'cheatIndex', component: CheatIndexComponent},
  {path: 'cheatEdit', component: CheatEditComponent},
  {path: 'cheatShow', component: CheatShowComponent}
];

export const appRouterProviders: any[] = [];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);
