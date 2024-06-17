import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHealthBarComponent } from './player-health-bar.component';

describe('PlayerHealthBarComponent', () => {
  let component: PlayerHealthBarComponent;
  let fixture: ComponentFixture<PlayerHealthBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerHealthBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerHealthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
