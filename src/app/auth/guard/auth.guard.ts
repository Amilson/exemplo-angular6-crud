import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Login } from '../../paginas/login/models/login';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthGuard implements CanActivate {

  log : Login;
  iActive : boolean;

  constructor(
    private authService : AuthService,
    private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    return this.authService.getAuth().pipe(
      map((data : any) => {
        console.log("2");
        if(data.status == "ok"){
          if(data.email){
            this.log = new Login();
            this.log.setNome(data.nome);
            this.log.setEmail(data.email);;
          }
          if(this.log){
            if(this.log.email != null){
              return true;
            }else{
              this.router.navigate(["principal-logoff"]);
              return false;
            }
          }else{
            this.router.navigate(["principal-logoff"]);
            return false;
          }
        }else{
          this.router.navigate(["principal-logoff"]);
          return false;
        }
      }, error => {
        console.log("3");
        this.router.navigate(["principal-logoff"]);
        return false;
      }),
      catchError(this.handleError)
    );
  }

  validaAut() : Boolean{
    if(this.log){
      if(this.log.email != null){
        return true;
      }else{
        this.router.navigate(['home']);
        return false;
      }
    }else{
      this.router.navigate(['home']);
      return false;
    }
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    this.router.navigate(['home']);
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
