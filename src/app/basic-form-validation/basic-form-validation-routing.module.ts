import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicFormValidationComponent} from './basic-form-validation.component';

const routes: Routes = [
  {
    path: '',
    component: BasicFormValidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicFormValidationRoutingModule {}
