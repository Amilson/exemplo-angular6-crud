import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderValidaLoginComponent } from './header-valida-login.component';

describe('HeaderValidaLoginComponent', () => {
  let component: HeaderValidaLoginComponent;
  let fixture: ComponentFixture<HeaderValidaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderValidaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderValidaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
