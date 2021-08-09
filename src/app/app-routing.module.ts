import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './component/products/components/product-detail/product-detail.component';
import { LayoutComponent } from './component/layout/layout.component';
import { AdminGuard} from './admin.guard'
import { PreloadService } from '@core/services/preload/preload.service';
import { QuicklinkModule } from 'ngx-quicklink';

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
        loadChildren:()=>import('./component/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren:()=>import('./component/products/products.module').then(m=> m.ProductsModule),
      },
      {
        path: 'contact',
        loadChildren:()=>import('./component/contact/contact.module').then(m=>m.ContactModule),
      },
      {
        path: 'order',
        loadChildren:()=>import('./order/order.module').then(m=>m.OrderModule),
      },
    ]
  },
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren:()=>import('./admin/admin.module').then(m=> m.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      enableTracing:false,
      preloadingStrategy: PreloadService,
      paramsInheritanceStrategy:'always',
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
