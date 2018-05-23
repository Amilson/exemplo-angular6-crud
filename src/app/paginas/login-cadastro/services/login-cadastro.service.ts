import { Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs";
import { LoginCadastro } from '../models/login-cadastro';

@Injectable()
export class LoginCadastroService {

  constructor(private http : HttpClient) { }

  getHeaders(): HttpHeaders{
    if(isPlatformBrowser(PLATFORM_ID)){
      return new HttpHeaders()
      .set("Content-Type","application/json");
    }
  }

  criarConta(loginCad : LoginCadastro): Observable<any>{
    return this.http.post("http://localhost:1993/api/user/nconta",
    {nome:loginCad.nome,email:loginCad.email,senha:loginCad.senha},
    {headers : this.getHeaders()});
  }

  getContaByEmail(loginCad : LoginCadastro): Observable<any>{
    return this.http.get("http://localhost:1993/api/user/vemail/"+loginCad.email, {headers : this.getHeaders()});
  }
}
