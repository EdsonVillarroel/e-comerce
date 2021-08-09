import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductsService} from './../../../core/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any;
  displayedColumns : string[] = ['id', 'title','price','actions']

  constructor( private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fechtProduct();
  }

  fechtProduct(){
    this.productsService.getAllProducts().subscribe(product => {
      console.log(product)
      this.products = product;
    })
  }
  deleteProduct(id: string){
    this.productsService.deleteProduct(id).subscribe(product =>{
      console.log(product);
      this.fechtProduct();
    })
  }

}
