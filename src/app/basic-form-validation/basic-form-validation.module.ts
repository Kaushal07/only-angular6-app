import { NgModule } from '@angular/core';
import {BasicFormValidationRoutingModule} from './basic-form-validation-routing.module';
import {BasicFormValidationComponent} from './basic-form-validation.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BasicFormValidationRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    BasicFormValidationComponent
  ]
})
export class BasicFormValidationModule {}
