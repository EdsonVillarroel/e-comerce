import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductsComponent } from './component/products/products.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
