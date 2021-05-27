import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;
  constructor(private cartService: CartService) {
    // this.cartService.cart$
    //   .pipe(map((products) => products.length))
    //   .subscribe(total => {
    //     console.log(total);
    //     this.total = total;
    //   });
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
  }

  ngOnInit(): void {}
}
