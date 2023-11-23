import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlayerGameComponent } from './list-player-game.component';

describe('ListPlayerGameComponent', () => {
  let component: ListPlayerGameComponent;
  let fixture: ComponentFixture<ListPlayerGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPlayerGameComponent]
    });
    fixture = TestBed.createComponent(ListPlayerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
