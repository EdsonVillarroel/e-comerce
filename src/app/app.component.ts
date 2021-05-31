import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { SwUpdate } from '@angular/service-worker';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


interface Token{
  token:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  private tokenCollection:AngularFirestoreCollection;

  constructor(
    private swUpdate: SwUpdate,
    private angularFireMessaging: AngularFireMessaging,
    private angularFirestore :AngularFirestore
  ) {
    this.tokenCollection = this.angularFirestore.collection<Token>('tokens');
  }

  updatePwa() {
    this.swUpdate.available.subscribe((value) => {
      console.log('value', value);
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
      console.log(token);
    });
  }

  listenNotification() {
    this.angularFireMessaging.messages.subscribe((message) => {
      console.log(message);
    });
  }
}
