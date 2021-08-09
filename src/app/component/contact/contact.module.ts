import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from './components/contact/contact.component'
import { ContactRoutingModule } from './contact-routing.module';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    ContactComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
