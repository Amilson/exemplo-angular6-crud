import { Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { Observable, observable } from "rxjs";
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../../paginas/login/models/login';

@Injectable()
export class AuthService {

  constructor(private http : HttpClient) { }

  getHeaders(): HttpHeaders{
    const token = localStorage.getItem("xxauthmedeclaraxx");
    return (token) ? 
    new HttpHeaders()
    .set("Authorization",token)
    .set("Content-Type","application/json")
    : null;
  }

  getAuth(): Observable<any>{
    return this.http.get("http://localhost:1993/api/user/auth", {headers : this.getHeaders()});
  }
}
