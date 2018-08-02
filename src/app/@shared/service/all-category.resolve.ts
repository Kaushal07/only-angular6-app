import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
// import { CategoryService } from "../../category/shared/category.service";
/**
 * @Resolve Get All Category Resolve
 * @description  manage the protocol(s) for clinician
 */
@Injectable()
export class GetAllCategoryResolve implements Resolve<any> {
    constructor(/*private categoryService: CategoryService*/) { }
    resolve(route: ActivatedRouteSnapshot) {
        // return this.categoryService.listAllCategory();
    }
}

// {
//   path: 'add', component: AddCategoryComponent,
//   resolve: { categories: GetAllCategoryResolve },
//   data: {accessToken: 'CATEGORY_CANADD'},
//   canActivate: [CheckAuth]
// },
