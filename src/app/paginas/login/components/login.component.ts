import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

import { LoginCadastroComponent } from '../../../paginas/login-cadastro/components/login-cadastro.component'
import { Login } from '../models/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log : Login;
  userForm: FormGroup;
  email : String;
  password : String;
  iniciouLogin : Boolean = false;
  toolTipBtnRegistrar : String = "Crie uma conta, é fácil e rápido :)";
  
  formErrors = {
    "email": "",
    "password": "",
    "login":""
  };
  validationMessages = {
    "email": {
      "required": "Por favor, insira seu e-mail!",
      "email": "Por favor, insira corretamente seu e-mail!"
    },
    "password": {
      "required": "Por favor, digite sua senha!",
      "pattern": "A senha deve conter letras e números!",
      "minlength": "Insira mais de 6 caracteres"
    },
    "login": {
      "err":"Ops, ocorreu um erro, aguarde alguns segundos e tente novamente =(",
      "geral":"Não foi possível entrar, verifique seu usuário e senha e tente novamente",
      "senha":"Senha incorreta"
    }
  };

  constructor(private router: Router,
              private formBuild: FormBuilder,
              private dialogRef: MatDialog,
              private loginService : LoginService) { }

  ngOnInit() {
     this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuild.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
        //Validators.maxLength(25)
      ]
      ],
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }    
    
    const form = this.userForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }

    if(this.email == ""){
      this.formErrors.email = "";
    }
    
    if(this.password == ""){
      this.formErrors.password = "";
    }
  }

  loginWithEmail() {
    //this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password'])
    //    .catch(error => console.log('Inconformidade de login: ', error));
    this.dialogRef.closeAll();
    this.router.navigate(['principal']);
  }

  limpa(){
    this.formErrors["email"] = "";
    this.formErrors["password"] = "";
    this.formErrors["login"] = "";
  }

  login() {
    this.limpa();
    this.iniciouLogin = true;
    this.log = new Login();
    this.log.setEmail(this.email);
    this.log.setSenha(this.password);

    this.loginService.login(this.log).subscribe((data : any) => {
      if(!this.formErrors["email"]){
        if(data.status == "nok"){
          this.formErrors["login"] = this.validationMessages["login"]["geral"];
          this.loginService.removeToken();
        }else{
          //localStorage.setItem("xxauthmedeclaraxx",data.token);
          this.loginService.registraToken(data.token);
          this.afterLogin();
        }
      }
      this.iniciouLogin = false;
    }, error => {
      this.formErrors["login"] = this.validationMessages["login"]["err"];
      this.iniciouLogin = false;
      this.loginService.removeToken();
    });
  }

  private afterLogin() {
    this.dialogRef.closeAll();
    this.router.navigate(['principal']);
  }

  private cadastrar(){
    if(this.router.url != "/principal-logoff"){
      this.dialogRef.closeAll();
      const dialogRef = this.dialogRef.open(LoginCadastroComponent);
    }else{
      this.dialogRef.closeAll();
      this.router.navigate(['principal-signup']);
    }
  }

}
