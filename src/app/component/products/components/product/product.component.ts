import { CartService } from '../../../../core/services/cart/cart.service';
import { Component, Input, Output ,EventEmitter } from '@angular/core';
import { Product } from '../../../../model/product.model';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {

 @Input() products: Product;
 @Output() productCliked: EventEmitter<any> = new EventEmitter();

  constructor(
    private cartService:CartService
  ) { }

  addCard() {
    console.log("agregar al carrito");
    this.productCliked.emit(this.products.id)
    this.cartService.addCart(this.products);
  }



}
