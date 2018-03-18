import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';

import {AppComponent} from './app.component';
import {IndexComponent} from './assets/index/index.component';
import {GalleryComponent} from './assets/index/gallery/gallery.component';
import {SidebarComponent} from './assets/sidebar/sidebar.component';
import {HomeComponent} from './assets/home/home.component';
import {MapIndexComponent} from './assets/mapIndex/mapIndex.component';
import {CheatNewComponent} from './assets/cheatNew/cheatNew.component';
import {CheatIndexComponent} from './assets/cheatIndex/cheatIndex.component';
import {CheatEditComponent} from './assets/cheatEdit/cheatEdit.component';
import {routing, appRouterProviders} from './app.routing';
import {CheatShowComponent} from './assets/cheatShow/cheatShow.component';

import {CheatService} from './services/cheat.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GalleryComponent,
    HomeComponent,
    SidebarComponent,
    MapIndexComponent,
    CheatNewComponent,
    CheatIndexComponent,
    CheatEditComponent,
    CheatShowComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MultiselectDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    appRouterProviders,
    [{provide: APP_BASE_HREF, useValue: '/'}],
    [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    CheatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
