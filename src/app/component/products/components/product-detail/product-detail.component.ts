import { Product } from '../../../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    // this.product = Product;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      // this.product = this.productsService.getProduct(id);
      console.log(this.product);
      this.fechtProduct(id);
    });
  }
  fechtProduct(id:string){
    this.productsService.getProduct(id).subscribe(product=>{
      this.product = product;
      console.log(product)
    });
  }

  createProduct(){
    const newProduct : Product = {
      id:'21',
      title:'new',
      image:'assets/images/polera.png',
      price:300,
      description:'new product '
    }
    this.productsService.createProduct(newProduct).subscribe(product=>{
      console.log(product)
    })
  }
  updateProduct(){
    const updateProduct : Partial <Product> = {
      title:'polera',
      image:'assets/images/polera.png',
    }
    this.productsService.updateProduct('222',updateProduct).subscribe(product=>{
      console.log(product)
    })
  }
  deleteProduct(){
    this.productsService.deleteProduct('222').subscribe(product=>{
      console.log(product)
    })
  }
}
