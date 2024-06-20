import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerButtonComponent } from './player-button.component';

describe('PlayerButtonComponent', () => {
  let component: PlayerButtonComponent;
  let fixture: ComponentFixture<PlayerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
