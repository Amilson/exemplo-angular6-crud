import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSignupComponent } from './principal-signup.component';

describe('PrincipalSignupComponent', () => {
  let component: PrincipalSignupComponent;
  let fixture: ComponentFixture<PrincipalSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
