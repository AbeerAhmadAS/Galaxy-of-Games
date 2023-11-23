import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerGameComponent } from './designer-game.component';

describe('DesignerGameComponent', () => {
  let component: DesignerGameComponent;
  let fixture: ComponentFixture<DesignerGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignerGameComponent]
    });
    fixture = TestBed.createComponent(DesignerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
