import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [

  {
    path: '',
    component: NavComponent,
    children:[
      {
        path: 'products/create',
        component: ProductFormComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'table',
        component:TableComponent
      },
      {
        path:'products',
        component:ProductListComponent
      },
      {
        path:'create',
        component:FormProductComponent
      },
      {
        path:'products/edit/:id',
        component:EditProductFormComponent
      },
      {
        path:'basic-form',
        component:BasicFormComponent
      },
      {
        path: 'categories',
        loadChildren: () => import('./components/categories/categoriess.module').then(m => m.CategoriessModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
