import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { ProductsContainer } from './containers/products/products.container';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


const routes: Routes = [

  {
    path:'',
    component:ProductsContainer

  },
  {
    path:':id',
    component:ProductDetailComponent

  }
];

@NgModule({
  imports:[
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class ProductsRoutingModule { }
