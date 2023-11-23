import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComSignComponent } from './com-sign.component';

describe('ComSignComponent', () => {
  let component: ComSignComponent;
  let fixture: ComponentFixture<ComSignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComSignComponent]
    });
    fixture = TestBed.createComponent(ComSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
