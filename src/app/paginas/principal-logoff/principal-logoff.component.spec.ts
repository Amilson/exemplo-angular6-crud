import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalLogoffComponent } from './principal-logoff.component';

describe('PrincipalLogoffComponent', () => {
  let component: PrincipalLogoffComponent;
  let fixture: ComponentFixture<PrincipalLogoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalLogoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalLogoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
