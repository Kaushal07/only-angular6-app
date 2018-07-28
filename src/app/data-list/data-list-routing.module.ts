import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataListComponent} from './data-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "list"
  },
  {
    path: 'list',
    component: DataListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataListRoutingModule {}
