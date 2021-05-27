import { CartService } from './services/cart/cart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService} from './services/products/products.service'



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  providers:[
    ProductsService,
    CartService,
  ]
})
export class CoreModule { }
