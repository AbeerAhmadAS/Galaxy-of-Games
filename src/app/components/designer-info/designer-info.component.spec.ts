import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerInfoComponent } from './designer-info.component';

describe('DesignerInfoComponent', () => {
  let component: DesignerInfoComponent;
  let fixture: ComponentFixture<DesignerInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignerInfoComponent]
    });
    fixture = TestBed.createComponent(DesignerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
