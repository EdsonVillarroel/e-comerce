import { CategoriesComponent } from './../categories/components/categories/categories.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: '',
  component: CategoriesComponent
},
{
  path: 'create',
  component: CategoryFormComponent
},
{
  path: 'edit/:id',
  component: CategoryFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriessRoutingModule { }
