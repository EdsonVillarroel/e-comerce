import { CategoriesComponent } from './../categories/components/categories/categories.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriessRoutingModule } from './categoriess-routing.module';


@NgModule({
  declarations: [CategoriesComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    CategoriessRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class CategoriessModule { }
