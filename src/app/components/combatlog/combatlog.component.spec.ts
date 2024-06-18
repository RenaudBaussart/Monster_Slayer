import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatlogComponent } from './combatlog.component';

describe('CombatlogComponent', () => {
  let component: CombatlogComponent;
  let fixture: ComponentFixture<CombatlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
