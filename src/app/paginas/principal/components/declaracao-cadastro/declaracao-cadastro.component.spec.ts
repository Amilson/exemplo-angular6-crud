import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaracaoCadastroComponent } from './declaracao-cadastro.component';

describe('DeclaracaoCadastroComponent', () => {
  let component: DeclaracaoCadastroComponent;
  let fixture: ComponentFixture<DeclaracaoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclaracaoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaracaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
