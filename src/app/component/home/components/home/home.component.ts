import { DirectiveResolver } from '@angular/compiler';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  mySwiper: Swiper;

  ngOnInit(): void {
    var url = window.location.hostname;
    var link = window.location.href;
    var title = document.title;

    window.open(
      'https://e-commerce-f8c4a.web.app/' +
        url +
        '&link=' +
        link +
        '&title=' +
        title
    );
    console.log(url,link,title);

    if (this.isFacebookOrInstagramApp()) {
      if (this.isAppleDevice()) {
        location.href = `googlechrome://${window.location.host}`;
        alert("safari");
        // this.showPoupUp(this.alertModals.appleCameraMessage);
      } else {
        window.location.href = "googlechromes"+location.href.substring(4);;
        var url = navigator.userAgent;
        var link = navigator.appCodeName;
        var title = location.hostname;        ;

        alert(
         " abrir en google por que si " + url+"userAgent" + link+"appCodeName" + title+"HostName"
        );

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
      ua.indexOf('Instagram') > -1||
      ua.indexOf('Mozilla') > -1
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
