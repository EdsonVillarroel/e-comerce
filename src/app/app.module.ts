import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { CardComponent } from './component/card/card.component';
import { HighlightDirective } from './directive/highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BannerComponent } from './component/banner/banner.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { LayoutComponent } from './component/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CardComponent,
    HighlightDirective,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
