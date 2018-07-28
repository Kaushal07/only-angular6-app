import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {SingleDataComponent} from './single-data.component';
import {SingleDataRoutingModule} from './single-data-routing.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    SingleDataRoutingModule
  ],
  declarations: [
    SingleDataComponent
  ]
})
export class SingleDataModule {}
