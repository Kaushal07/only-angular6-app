import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "form-validation"
  },
  {
    path: 'form-validation',
    loadChildren: './basic-form-validation/basic-form-validation.module#BasicFormValidationModule'
  },
  {
    path: 'data',
    loadChildren: './data-list/data-list.module#DataListModule'
  },
  {
    path: 'single-data',
    loadChildren: './single-data/single-data.module#SingleDataModule'
  }
];

export const RouteModule = RouterModule.forRoot(routes);
