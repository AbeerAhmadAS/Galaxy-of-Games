import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesLoginComponent } from './des-login.component';

describe('DesLoginComponent', () => {
  let component: DesLoginComponent;
  let fixture: ComponentFixture<DesLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesLoginComponent]
    });
    fixture = TestBed.createComponent(DesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
