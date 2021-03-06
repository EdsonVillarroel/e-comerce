import { TokenService } from './../services/token/token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private tokenService : TokenService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.addToken(request);
    return next.handle(request);
  }
  private addToken(request: HttpRequest<any>) {
    const token = this.tokenService.getToken();
    if(token){
      request = request.clone({
        setHeaders:{
          token
        }
      });
      return request;
    }else{
      return request;
    }
  }
}
