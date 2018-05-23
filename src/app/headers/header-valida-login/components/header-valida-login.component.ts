import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';

///
import { LoginComponent } from '../../../paginas/login/components/login.component';
import { LoginCadastroComponent } from '../../../paginas/login-cadastro/components/login-cadastro.component';
import { AuthService } from '../../../auth/services/auth.service';
import { Login } from '../../../paginas/login/models/login';

@Component({
  selector: 'app-header-valida-login',
  templateUrl: './header-valida-login.component.html',
  styleUrls: ['./header-valida-login.component.css']
})
export class HeaderValidaLoginComponent implements OnInit {

  log : Login;
  isLogin : Boolean = false;

  constructor(public dialog: MatDialog,
    private router: Router,
    private authService : AuthService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe((data : any) => {
      if(data.email){
        this.log = new Login();
        this.log.setNome(data.nome);
        this.log.setEmail(data.email);;
      }
      if(this.log){
        if(this.log.email != null){
          this.isLogin = true;
        }else{
          this.isLogin = false;
        }
      }else{
        this.isLogin = false;
      }
    }, error => {
      this.isLogin = false;
    });
  }

  abreLogin(){
    //this.router.navigate(['login']);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(LoginComponent, dialogConfig);
  }

  criarConta(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(LoginCadastroComponent, dialogConfig);
  }

}
