import { Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

import { Observable } from "rxjs";
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http : HttpClient) { }

  getHeaders(): HttpHeaders{
    alert("kk");
    const token = localStorage.getItem("xxauthmedeclaraxx");
    return (token) ? 
    new HttpHeaders()
    .set("Authorization",token)
    .set("Content-Type","application/json")
    : null;
  }

  getAuth(): Observable<object>{
    return this.http.get("http://localhost:1993/api/user/auth", {headers : this.getHeaders()});
  }
}
