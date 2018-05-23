import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { LoginCadastro } from '../models/login-cadastro'

import { LoginComponent } from '../../../paginas/login/components/login.component';
import { LoginCadastroService } from '../services/login-cadastro.service';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {
  
  logCad : LoginCadastro;
  logCadRet : LoginCadastro;
  userForm: FormGroup;
  toolTipBtnEntrar : String = "Clique aqui e logue-se :)";
  nome : string;
  email : string;
  password : string;
  passwordx2 : string;
  iniciouCadastro : Boolean = false;
  iniciouVerificaEmail : Boolean = false;
  typePassword : string;
  
  formErrors = {
    "nome":"",
    "email": "",
    "emailExiste":"",
    "password": "",
    "passwordx2": ""
  };
  validationMessages = {
    "nome": {
      "required": "Por favor, insira seu nome"
    },
    "email": {
      "required": "Por favor, insira seu e-mail!",
      "email": "Por favor, insira corretamente seu e-mail!"
    },
    "password": {
      "required": "Por favor, digite sua senha!",
      "pattern": "A senha deve conter letras e números!",
      "minlength": "Insira mais de 6 caracteres"
    },
    "passwordx2": {
      "required": "Por favor, repita sua senha!",
      "pattern": "A senha deve conter letras e números!",
      "minlength": "Insira mais de 6 caracteres"
    },
    "emailExiste":"Este e-mail já foi cadastrado"
  };

  constructor(private router: Router,
              private formBuild: FormBuilder,
              public dialogRef: MatDialog,
              private loginCadService : LoginCadastroService) { }

  ngOnInit() {
     this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuild.group({
      'nome': ['', [
        Validators.required,
      ]
      ],
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
      'passwordx2': ['', [
        //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
        //Validators.maxLength(25)
      ]
      ]
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
      if(field == "emailExiste")continue;
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

    if(this.formErrors["email"] != ""){
      this.formErrors["emailExiste"] = "";
    }
  }

  entrar(){
    this.router.navigate(["login"]);
  }

  verificaEmail(){
    if(this.email != null){
      this.iniciouVerificaEmail = true;
      this.logCad = new LoginCadastro();
      this.logCad.setEmail(this.email);
      
      this.loginCadService.getContaByEmail(this.logCad).subscribe(
        data => {
          this.iniciouVerificaEmail = false;
          if(!this.formErrors["email"]){
            if(data.status == "ok"){
              this.formErrors["emailExiste"] = this.validationMessages["emailExiste"];
              this.formErrors["email"] = "";
            }
          }
        }, error => {
          this.iniciouVerificaEmail = false;
        }
      );
    }
  }

  cadastrar(){
    this.iniciouCadastro = true;
    this.logCad = new LoginCadastro();
    this.logCad.setNome(this.nome);
    this.logCad.setEmail(this.email);
    this.logCad.setSenha(this.password);
    this.loginCadService.criarConta(this.logCad).subscribe((data : any) => {
        console.log(data);
        this.iniciouCadastro = false;
        localStorage.setItem("xxauthmedeclaraxx",data.token);
        this.afterCadastro();
    });
  }

  private afterCadastro() {
    this.dialogRef.closeAll();
    this.router.navigate(['principal']);
  }

  abreLogin(){
    if(this.router.url != "/principal-signup"){
      this.dialogRef.closeAll();
      const dialogRef = this.dialogRef.open(LoginComponent);
    }else{
      this.dialogRef.closeAll();
      this.router.navigate(['principal-logoff']);
    }
  }
}
