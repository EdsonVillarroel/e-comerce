import { Product } from './../../../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../../../core/services/products/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productosServide: ProductsService) { }

  ngOnInit(): void {
    this.fechtProduct();
  }

  title = 'e-commerce';
  products: Product[];

  clickProduct(id:number) {
    console.log("id",id)
  }
  fechtProduct(){
    this.productosServide.getAllProducts().subscribe(products => {
      console.log(products)
      this.products = products;
    })
  }
}
