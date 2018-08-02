import { NgModule } from '@angular/core';
import {BasicFormValidationRoutingModule} from './basic-form-validation-routing.module';
import {BasicFormValidationComponent} from './basic-form-validation.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TextMaskModule} from 'angular2-text-mask';

@NgModule({
  imports: [
    BasicFormValidationRoutingModule,
    CommonModule,
    FormsModule,
    TextMaskModule
  ],
  declarations: [
    BasicFormValidationComponent
  ]
})
export class BasicFormValidationModule {}
