import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { SafeMethodCall } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth :AngularFireAuth,
    private httpClient : HttpClient,
    private tokenService : TokenService
  ) { }

  createUser(email:string,password:string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email,password);
  }

  login(email:string,password:string){
    return this.angularFireAuth.signInWithEmailAndPassword(email,password);
  }
  logout(){
    return this.angularFireAuth.signOut();
  }

  hasUser(){
    return this.angularFireAuth.authState;
  }
  loginRestApi(email:string,password:string){
    return this.httpClient.post('https://platzi-store.herokuapp.com/auth',{
      email,
      password
    }).pipe(tap((data:any)=>{
      const token = data.token
      this.tokenService.saveToken(token);
    }));
  }
}
