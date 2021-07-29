import { Product } from '../../../../model/product.model';
import { Component, ContentChild, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../../core/services/products/products.service';
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product$:Observable<Product>;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    // this.product = Product;
  }

  ngOnInit(): void {

    this.product$ = this.route.params.pipe(switchMap((params: Params)=>{
      return this.productsService.getProduct(params.id);
    }))
  }
  //Evitar eñ soble Subscribe
  // fechtProduct(id:string){
  //   this.productsService.getProduct(id).subscribe(product=>{
  //     this.product = product;
  //     console.log(product)
  //   });
  // }

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
  getRandomUser(){
    this.productsService.getRandomUsers().subscribe(users=>{
      console.log(users);
    },
    error=>{
      console.log(error);
    })

  }

  getFile(){
    this.productsService.getFile().subscribe(content=>{
      console.log(content);
    });
  }

  saveFile(){
    let PDF = new Blob(["hola mundo estoy, aqui de nuevo"],{type:"text/plain;charset=utf-8"});
    FileSaver.saveAs(PDF,"prueba.txt");
  }
}
