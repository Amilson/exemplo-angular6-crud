import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.css']
})
export class ClientesCadastroComponent implements OnInit {
  isLinear = false;
  dadosPessoaisForm: FormGroup;
  documentosForm: FormGroup;
  contatoForm: FormGroup;
  enderecoForm: FormGroup;
  concluirForm: FormGroup;

  //
  nome : String;
  sobrenome : String;
  //

  formErrors = {
    "nome": "",
    "cpf": "",
    "cnpj": "",
    "rg": ""
  };
  validationMessages = {
    "nome": {
      "required": "Por favor, digite o nome!",
      "minlength": "Insira mais de 3 caracteres"
    },
    "cpf": {
      "required": "Por favor, digite o número do CPF!",
      "minlength": "Insira pelo menos 11 caracteres"
    },
    "cnpj": {
      "required": "Por favor, digite o número do CNPJ!",
      "minlength": "Insira pelo menos 15 caracteres"
    },
    "rg": {
      "minlength": "Insira pelo menos 5 caracteres"
    }
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildDadosPessoaisForm();
    this.buildDocumentosForm();
    this.buildContatoForm();
    this.buildEnderecoForm();
  }
  /////////
  buildDadosPessoaisForm() {
    this.dadosPessoaisForm = this.formBuilder.group({
      'nome': ['', [
        Validators.required,
        Validators.minLength(3)
      ]
      ],
    });

    this.dadosPessoaisForm.valueChanges.subscribe(data => this.onValueChanged(data, this.dadosPessoaisForm));
    this.onValueChanged();
  }
  /////////
  buildDocumentosForm() {
    this.documentosForm = this.formBuilder.group({
      'cpf': ['', [
        Validators.required,
        Validators.minLength(11)
      ]
      ],
      'cnpj': ['', [
        Validators.required,
        Validators.minLength(15)
      ]
      ],
      'rg': ['', [
        Validators.minLength(5)
      ]
      ]
    });

    this.documentosForm.valueChanges.subscribe(data => this.onValueChanged(data, this.documentosForm));
    this.onValueChanged();
  }
  /////////
  buildContatoForm() {
    this.contatoForm = this.formBuilder.group({
      'telefone': ['', [
        Validators.minLength(8)
      ]
      ],
      'celular': ['', [
        Validators.required,
        Validators.minLength(9)
      ]
      ]
    });

    this.contatoForm.valueChanges.subscribe(data => this.onValueChanged(data, this.contatoForm));
    this.onValueChanged();
  }
  /////////
  buildEnderecoForm() {
    this.enderecoForm = this.formBuilder.group({
      'logradouro': ['', [
        Validators.required,
        Validators.minLength(10)
      ]
      ],
      'numero': ['', [
        Validators.required,
        Validators.minLength(1)
      ]
      ]
    });

    this.enderecoForm.valueChanges.subscribe(data => this.onValueChanged(data, this.enderecoForm));
    this.onValueChanged();
  }

  onValueChanged(data?: any, frm? : FormGroup) {
    if (!frm) {
      return;
    }
    
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        
        const control = frm.get(field);
        //console.log(control.errors+' - '+field);
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
  }
  /////////
  proximoDadosPessoais(){
    this.onValueChanged(null, this.dadosPessoaisForm);
  }
}
