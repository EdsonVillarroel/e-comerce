import { DirectiveResolver } from '@angular/compiler';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  mySwiper: Swiper;

  ngOnInit(): void {
    if (this.isFacebookOrInstagramApp()) {
      if (this.isAppleDevice()) {
        location.href = `googlechrome://${window.location.host}`;
        // this.showPoupUp(this.alertModals.appleCameraMessage);
      } else {
        window.location.href = `${window.location.host}`;

        alert(`abrir en google ${navigator.userAgent ,navigator.appCodeName,document.URL}`);

        // this.showPoupUp(this.alertModals.notAppleFacebookOrInstagramApp);
      }
    }
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.mySwiper = new Swiper('.swiper-container');

  }

  isFacebookOrInstagramApp(): boolean {
    var ua = navigator.userAgent || navigator.vendor;
    return (
      ua.indexOf('FBAN') > -1 ||
      ua.indexOf('FBAV') > -1 ||
      ua.indexOf('Instagram') > -1
    );
  }
  isAppleDevice(): boolean {
    const appleDevices = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ];
    return (
      appleDevices.includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    );
  }

}
