import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLoginComponent } from './player-login.component';

describe('PlayerLoginComponent', () => {
  let component: PlayerLoginComponent;
  let fixture: ComponentFixture<PlayerLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerLoginComponent]
    });
    fixture = TestBed.createComponent(PlayerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
