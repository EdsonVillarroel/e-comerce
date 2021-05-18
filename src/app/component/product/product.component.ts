import { Component, Input, Output ,EventEmitter } from '@angular/core';
import { Product } from './../../model/product.model';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

 @Input() products: Product;
 @Output() productCliked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  addCard() {
    console.log("agregar al carrito");
    this.productCliked.emit(this.products.id)
  }



}
