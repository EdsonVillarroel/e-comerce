import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ProductsService} from '../../../core/services/products/products.service';
import { MyValidators } from './../../../utils/validators';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder :FormBuilder,
    private productsService : ProductsService,
    private router : Router,
    private activatedRoute :ActivatedRoute
  ) {
    this.buildForm();
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe((product)=>{
        this.form.patchValue(product);
      })
    })

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

  // public saveProduct(event: Event){
  //   event.preventDefault();
  //   console.log(this.form.value);
  //   if(this.form.valid){
  //     const product  = this.form.value;
  //     console.log("hola",product);
  //     this.productsService.createProduct(product).subscribe((newProduct)=>{
  //       console.log("hola",newProduct);
  //       this.router.navigate(['./admin/products']);
  //     },
  //     (error)=>{
  //       console.log('Error',error)
  //     }
  //     )
  //   }
  // }

  public saveProduct(){
    // event.preventDefault();
    console.log(this.form.value);
    if(this.form.valid){
      const product  = this.form.value;
      console.log("hola",product);
      this.productsService.updateProduct(this.id,product).subscribe((newProduct)=>{
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
