import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaracaoAnaliseRelComponent } from './declaracao-analise-rel.component';

describe('DeclaracaoAnaliseRelComponent', () => {
  let component: DeclaracaoAnaliseRelComponent;
  let fixture: ComponentFixture<DeclaracaoAnaliseRelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclaracaoAnaliseRelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaracaoAnaliseRelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
