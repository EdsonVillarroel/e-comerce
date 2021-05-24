import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './component/contact/contact.component';
import { ProductsComponent } from './component/products/products.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
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
        component: ProductsComponent,
      },
      {
        path: 'contact',
        canActivate:[AdminGuard],
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
      // {
      //   path: '',
      //   redirectTo:'/home',
      //   pathMatch:'full'
      // },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
