import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDesignerComponent } from './all-designer.component';

describe('AllDesignerComponent', () => {
  let component: AllDesignerComponent;
  let fixture: ComponentFixture<AllDesignerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDesignerComponent]
    });
    fixture = TestBed.createComponent(AllDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
