import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service';
import { MyValidators } from './../../../utils/validators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
  }
  ngOnInit() {}

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required,Validators.minLength],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      file: [''],
      description: ['', Validators.required],
    });
  }
  public saveProduct(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      const product = this.form.value;
      console.log('hola', product);
      this.productsService.createProduct(product).subscribe(
        (newProduct) => {
          console.log('hola', newProduct);
          this.router.navigate(['./admin/products']);
        },
        (error) => {
          console.log('Error', error);
        }
      );
    }
  }

  public updateProduct(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      const product = this.form.value;
      console.log('hola', product);
      this.productsService.createProduct(product).subscribe(
        (newProduct) => {
          console.log('hola', newProduct);
          this.router.navigate(['./admin/products']);
        },
        (error) => {
          console.log('Error', error);
        }
      );
    }
  }
  uploadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files !== null) {
      const file = input.files[0];
      const name = 'images';
      const fileRef = this.angularFireStorage.ref(name);
      const task = this.angularFireStorage.upload(name, file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.image$ = fileRef.getDownloadURL();
            this.image$.subscribe((url) => {
              console.log(url);
              this.form.get('image')?.setValue(url);
            });
          })
        )
        .subscribe();
      console.log(file);
    }
  }

  get priceField() {
    return this.form.get('price');
  }
}
