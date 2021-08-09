import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './../component/card/card.component';
import { HighlightDirective } from './directives/directive/highlight.directive';

import { MaterialModule } from './../material/material.module';
import { QuicklinkModule } from 'ngx-quicklink';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    QuicklinkModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    MaterialModule,
    CardComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule {}
