import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDesignerComponent } from './new-designer.component';

describe('NewDesignerComponent', () => {
  let component: NewDesignerComponent;
  let fixture: ComponentFixture<NewDesignerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDesignerComponent]
    });
    fixture = TestBed.createComponent(NewDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
