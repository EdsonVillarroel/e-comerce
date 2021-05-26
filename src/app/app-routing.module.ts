import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './component/products/components/product-detail/product-detail.component';
import { LayoutComponent } from './component/layout/layout.component';
import { AdminGuard} from './admin.guard'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo:'/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren:()=>import('./component/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren:()=>import('./component/products/products.module').then(m=> m.ProductsModule)
      },
      {
        path: 'contact',
        loadChildren:()=>import('./component/contact/contact.module').then(m=>m.ContactModule)
      },
      // {
      //   path: 'products/:id',
      //   component: ProductDetailComponent,
      // },
    ]
  },
  {
    path: 'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=> m.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
