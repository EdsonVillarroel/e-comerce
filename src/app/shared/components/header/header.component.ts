import { map } from 'rxjs/operators';
import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from './../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;
  installEvent:any;

  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
  }

  ngOnInit(): void {}

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeInstallPrompt(event: Event) {
    console.log(event);
    event.preventDefault();
    window.addEventListener ('beforeinstallprompt', event => {
      this.installEvent = event;
    });
  }

  installByUser(){
    console.log('holas');
    if(this.installEvent){
      this.installEvent.prompt();
      this.installEvent.userChoice();
    }
  }
}
