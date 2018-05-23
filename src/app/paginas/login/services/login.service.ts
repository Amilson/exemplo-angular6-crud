import { Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

import { Observable } from "rxjs";
import { Login } from '../models/login';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(
    private http : HttpClient) { }

  getHeaders(): HttpHeaders{
    if(isPlatformBrowser(PLATFORM_ID)){
      return new HttpHeaders()
      .set("Content-Type","application/json");
    }
  }

  login(login : Login): Observable<object> {
    //alert(loginCad.email);
    return this.http.post("http://localhost:1993/api/user/login",login, {headers : this.getHeaders()});
  }

  registraToken(tp : string){
    localStorage.setItem("xxauthmedeclaraxx",tp);
  }

  removeToken(){
    localStorage.removeItem("xxauthmedeclaraxx");
  }

}
