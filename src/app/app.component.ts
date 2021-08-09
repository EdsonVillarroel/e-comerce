import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { SwUpdate } from '@angular/service-worker';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

// declare var gtag: Function;

interface Token {
  token: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private tokenCollection: AngularFirestoreCollection;

  constructor(
    private swUpdate: SwUpdate,
    private angularFireMessaging: AngularFireMessaging,
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {
    this.tokenCollection = this.angularFirestore.collection<Token>('tokens');

    // const obj$ = this.router.events.pipe(
    //   filter((event) => event instanceof NavigationEnd)
    // );
    // obj$.subscribe((event: NavigationEnd) => {
    //   gtag('config', 'G-S2LRZGPNV0', {
    //     page_path: event.urlAfterRedirects,
    //   });
    // });
    // this.router.events.subscribe((y: Event) => {
    //   if(y instanceof NavigationEnd){
    //     gtag('config','UA-116240153-3',{'page_path' : y.url});
    //   }
    // })

  }

  updatePwa() {
    this.swUpdate.available.subscribe((value) => {
      window.location.reload();
    });
    this.requestPermission();
    this.listenNotification();
  }
  ngOnInit() {
    this.updatePwa();
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe((token) => {
      console.log('token', this.tokenCollection);
      this.tokenCollection.add({ token }).then(
        (resp) => {
          console.log('responseToken', resp);
        },
        (error) => {
          // console.log("errorToken",error)
        }
      );
    });
  }

  listenNotification() {
    console.log('asd');
    this.angularFireMessaging.messages.subscribe(
      (message) => {
        console.log('Message', message);
      },
      (error) => {
        console.log('errores', error);
      }
    );
  }
}
