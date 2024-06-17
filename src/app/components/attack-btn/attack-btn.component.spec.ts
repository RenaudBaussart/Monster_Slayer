import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackBtnComponent } from './attack-btn.component';

describe('AttackBtnComponent', () => {
  let component: AttackBtnComponent;
  let fixture: ComponentFixture<AttackBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
