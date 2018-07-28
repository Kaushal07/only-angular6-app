import { NgModule } from '@angular/core';
import {DataListComponent} from './data-list.component';
import {DataListRoutingModule} from './data-list-routing.module';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    DataListRoutingModule,
    HttpModule,
    CommonModule
  ],
  declarations: [
    DataListComponent
  ]
})
export class DataListModule {}
