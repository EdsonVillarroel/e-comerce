import { Product } from '../../../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.css'],
})
export class ProductsContainer implements OnInit {
  constructor(private productosServide: ProductsService) {}

  ngOnInit(): void {
    this.fechtProduct();
  }

  title = 'e-commerce';
  products: Product[];

  clickProduct(id: number) {
    console.log('id', id);
  }
  fechtProduct() {
    this.productosServide.getAllProducts().subscribe((products:any) => {
      console.log(products);
      this.products = products;
    });
  }
}
