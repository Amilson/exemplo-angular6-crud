import { TestBed, inject } from '@angular/core/testing';

import { LoginCadastroService } from './login-cadastro.service';

describe('LoginCadastroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginCadastroService]
    });
  });

  it('should be created', inject([LoginCadastroService], (service: LoginCadastroService) => {
    expect(service).toBeTruthy();
  }));
});
