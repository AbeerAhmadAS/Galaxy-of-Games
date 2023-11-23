import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesinerItemComponent } from './desiner-item.component';

describe('DesinerItemComponent', () => {
  let component: DesinerItemComponent;
  let fixture: ComponentFixture<DesinerItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesinerItemComponent]
    });
    fixture = TestBed.createComponent(DesinerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
