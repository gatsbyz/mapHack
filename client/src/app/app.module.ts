import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap';
import { DropdownModule } from 'ngx-dropdown';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	  HttpModule,
    RouterModule,
    CollapseModule,
    DropdownModule,
    MultiselectDropdownModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
