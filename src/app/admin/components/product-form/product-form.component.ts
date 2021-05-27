import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ProductsService} from '../../../core/services/products/products.service';
import { MyValidators } from './../../../utils/validators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder :FormBuilder,
    private productsService : ProductsService,
    private router : Router,
  ) {
    this.buildForm();
  }
  ngOnInit(){

  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id:['',Validators.required],
      title:['',Validators.required],
      price: [0, [Validators.required,MyValidators.isPriceValid]],

      image:'',
      description:['',Validators.required]
    })
  }
  public saveProduct(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    if(this.form.valid){
      const product  = this.form.value;
      console.log("hola",product);
      this.productsService.createProduct(product).subscribe((newProduct)=>{
        console.log("hola",newProduct);
        this.router.navigate(['./admin/products']);
      },
      (error)=>{
        console.log('Error',error)
      }
      )
    }
  }

  public updateProduct(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    if(this.form.valid){
      const product  = this.form.value;
      console.log("hola",product);
      this.productsService.createProduct(product).subscribe((newProduct)=>{
        console.log("hola",newProduct);
        this.router.navigate(['./admin/products']);
      },
      (error)=>{
        console.log('Error',error)
      }
      )
    }
  }

  get priceField() {
    return this.form.get('price');
  }

}
